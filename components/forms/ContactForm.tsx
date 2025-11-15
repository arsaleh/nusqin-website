'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitToHubSpot } from '@/lib/hubspot';
import { HUBSPOT_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';

// Validation schema using Zod
const contactSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check if form ID is configured
    if (!HUBSPOT_CONFIG.contactFormId) {
      setSubmitStatus('error');
      setErrorMessage(
        'Form is not yet configured. Please contact us directly at info@nusqin.ca or call +1 (604) 349-9229.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await submitToHubSpot(HUBSPOT_CONFIG.contactFormId, {
        fields: [
          { name: 'firstname', value: data.firstname },
          { name: 'lastname', value: data.lastname },
          { name: 'email', value: data.email },
          { name: 'phone', value: data.phone },
          { name: 'message', value: data.message },
        ],
      });

      // HubSpot returns different response formats - check for success indicators
      if (response.inlineMessage || response.redirectUri || !response.errors) {
        setSubmitStatus('success');
        reset();
      } else if (response.errors && response.errors.length > 0) {
        throw new Error(response.errors[0].message || 'Form validation failed');
      } else {
        // If we got here, the submission likely succeeded
        setSubmitStatus('success');
        reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to submit form. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstname" className="block font-heading font-semibold text-neutral-charcoal mb-2">
            First Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="firstname"
            {...register('firstname')}
            className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${
              errors.firstname ? 'border-red-500' : 'border-neutral-charcoal/20'
            }`}
            placeholder="John"
          />
          {errors.firstname && (
            <p className="mt-1 text-sm text-red-600">{errors.firstname.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastname" className="block font-heading font-semibold text-neutral-charcoal mb-2">
            Last Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="lastname"
            {...register('lastname')}
            className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${
              errors.lastname ? 'border-red-500' : 'border-neutral-charcoal/20'
            }`}
            placeholder="Doe"
          />
          {errors.lastname && (
            <p className="mt-1 text-sm text-red-600">{errors.lastname.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-heading font-semibold text-neutral-charcoal mb-2">
          Email <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${
            errors.email ? 'border-red-500' : 'border-neutral-charcoal/20'
          }`}
          placeholder="john.doe@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block font-heading font-semibold text-neutral-charcoal mb-2">
          Phone <span className="text-primary">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${
            errors.phone ? 'border-red-500' : 'border-neutral-charcoal/20'
          }`}
          placeholder="+1 (604) 123-4567"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-heading font-semibold text-neutral-charcoal mb-2">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none ${
            errors.message ? 'border-red-500' : 'border-neutral-charcoal/20'
          }`}
          placeholder="Tell us about your aesthetic goals and any questions you have..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-body text-center">
            Thank you for your message! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-body text-center">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
