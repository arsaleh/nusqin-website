'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { submitToHubSpot, convertToHubSpotFields, HubSpotValidationError } from '@/lib/hubspot';
import { HUBSPOT_CONFIG, TURNSTILE_SITE_KEY } from '@/lib/constants';

// Local validation schema (matches HubSpot field requirements)
const contactFormSchema = z.object({
  firstname: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastname: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-\+\(\)]{7,20}$/, 'Please enter a valid phone number'),
  treatment_interest: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      treatment_interest: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check Turnstile token
    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Please complete the security check');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Submit to HubSpot Forms API
      const fields = convertToHubSpotFields(data as Record<string, string>);

      await submitToHubSpot(HUBSPOT_CONFIG.contactFormId, {
        fields,
        context: {
          pageUri: window.location.href,
          pageName: 'Contact - Book a Consultation',
        },
      });

      setStatus('success');
      reset();
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch (error) {
      // Handle HubSpot validation errors (field-level)
      if (error instanceof HubSpotValidationError) {
        // Set field-specific errors from HubSpot response
        for (const fieldError of error.fieldErrors) {
          const fieldName = fieldError.field as keyof ContactFormData;
          if (fieldName && fieldName in contactFormSchema.shape) {
            setError(fieldName, {
              type: 'server',
              message: fieldError.message,
            });
          }
        }
        setStatus('error');
        setErrorMessage('Please correct the errors below');
      } else {
        setStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      }

      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  };

  // Show only success message after submission
  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="mb-4 text-green-600">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Thank You!
          </h2>
          <p className="text-lg text-gray-600">
            We've received your inquiry and will contact you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Book a Consultation
      </h2>

      {status === 'error' && errorMessage && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstname"
              {...register('firstname')}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                errors.firstname ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstname && (
              <p className="mt-1 text-sm text-red-600">{errors.firstname.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastname"
              {...register('lastname')}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                errors.lastname ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastname && (
              <p className="mt-1 text-sm text-red-600">{errors.lastname.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            {...register('email')}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="604-555-1234"
            {...register('phone')}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="treatment_interest" className="block text-sm font-medium mb-1">
            Treatment Interest
          </label>
          <select
            id="treatment_interest"
            {...register('treatment_interest')}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          >
            <option value="">Select a treatment...</option>
            <option value="Botox">Botox®</option>
            <option value="Dermal Fillers">Dermal Fillers</option>
            <option value="Microneedling">Microneedling</option>
            <option value="PRP (Platelet-Rich Plasma)">Platelet-Rich Plasma (PRP)</option>
            <option value="Laser Treatment">Laser Treatment</option>
            <option value="Minor Surgery">Minor Surgeries</option>
            <option value="Chemical Peels">Chemical Peels</option>
            <option value="Consultation">General Consultation</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            placeholder="Tell us about your goals and any questions you have..."
          />
        </div>

        {/* Cloudflare Turnstile Widget */}
        <div className="flex justify-center">
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => {
              setTurnstileToken(null);
              setErrorMessage('Security check failed. Please try again.');
            }}
            onExpire={() => setTurnstileToken(null)}
            options={{
              theme: 'light',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting' || !turnstileToken}
          className="w-full px-6 py-3 text-white rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--color-primary)',
          }}
        >
          {status === 'submitting' ? 'Submitting...' : 'Book Consultation'}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600 text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </div>
  );
}
