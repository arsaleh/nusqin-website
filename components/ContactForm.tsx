'use client';

import { useState, useRef } from 'react';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { submitToHubSpot, convertToHubSpotFields } from '@/lib/hubspot';
import { HUBSPOT_CONFIG, TURNSTILE_SITE_KEY } from '@/lib/constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    treatment_interest: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check Turnstile token
    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Please complete the security check');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Submit directly to HubSpot Forms API
      const fields = convertToHubSpotFields(formData);

      await submitToHubSpot(HUBSPOT_CONFIG.contactFormId, {
        fields,
        context: {
          pageUri: window.location.href,
          pageName: 'Contact - Book a Consultation',
        },
      });

      setStatus('success');
      // Reset form
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        treatment_interest: '',
        message: '',
      });
      // Reset Turnstile
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      // Reset Turnstile on error
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Book a Consultation
      </h2>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
          Thank you! We've received your inquiry and will contact you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              value={formData.firstname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              value={formData.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="604-555-1234"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <div>
          <label htmlFor="treatment_interest" className="block text-sm font-medium mb-1">
            Treatment Interest
          </label>
          <select
            id="treatment_interest"
            name="treatment_interest"
            value={formData.treatment_interest}
            onChange={handleChange}
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
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
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
