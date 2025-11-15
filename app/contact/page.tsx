import type { Metadata } from 'next';
import { COMPANY_INFO, HUBSPOT_CONFIG } from '@/lib/constants';
import HubSpotForm from '@/components/hubspot/HubSpotForm';

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY_INFO.name}`,
  description: `Get in touch with ${COMPANY_INFO.name} to book a consultation or learn more about our medical aesthetics services in Port Coquitlam, BC.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-sage)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-brown)',
                letterSpacing: '-0.01em'
              }}
            >
              Contact Us
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.85,
                letterSpacing: '0.04em'
              }}
            >
              Ready to begin your aesthetic journey? Get in touch with our team to schedule a
              consultation or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2
                className="text-3xl font-light mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-brown)',
                  letterSpacing: '-0.01em'
                }}
              >
                Send Us a Message
              </h2>
              <HubSpotForm
                portalId={HUBSPOT_CONFIG.portalId}
                formId={HUBSPOT_CONFIG.contactFormId}
                region="na3"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl font-light mb-6"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brown)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Get In Touch
                </h2>
                <p
                  className="text-base mb-8"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-brown)',
                    opacity: 0.7,
                    letterSpacing: '0.04em'
                  }}
                >
                  We're here to help you achieve your aesthetic goals. Reach out to us through any
                  of the following methods.
                </p>
              </div>

              {/* Contact Details */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--color-white)' }}
              >
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: 'var(--color-mauve)', opacity: 0.3 }}
                    >
                      <svg
                        className="w-6 h-6"
                        style={{ color: 'var(--color-brown)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-xs uppercase mb-1"
                        style={{
                          fontFamily: 'var(--font-label)',
                          color: 'var(--color-gold)',
                          letterSpacing: '0.1em'
                        }}
                      >
                        Phone
                      </h3>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-sm transition-colors hover:opacity-100"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--color-brown)',
                          opacity: 0.8,
                          letterSpacing: '0.04em'
                        }}
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: 'var(--color-mauve)', opacity: 0.3 }}
                    >
                      <svg
                        className="w-6 h-6"
                        style={{ color: 'var(--color-brown)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-neutral-charcoal mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-body text-neutral-charcoal/70 hover:text-primary transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-neutral-charcoal mb-1">
                        Address
                      </h3>
                      <address className="font-body text-neutral-charcoal/70 not-italic">
                        {COMPANY_INFO.address.street}
                        <br />
                        {COMPANY_INFO.address.city}, {COMPANY_INFO.address.province}{' '}
                        {COMPANY_INFO.address.postalCode}
                        <br />
                        {COMPANY_INFO.address.country}
                      </address>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-neutral-charcoal mb-1">
                        Hours
                      </h3>
                      <p className="font-body text-neutral-charcoal/70">
                        {COMPANY_INFO.hours.display}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--color-white)' }}
              >
                <h3
                  className="text-lg mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 400,
                    color: 'var(--color-brown)'
                  }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href={COMPANY_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg transition-all text-center"
                    style={{
                      backgroundColor: 'var(--color-sage)',
                      fontFamily: 'var(--font-label)',
                      color: 'var(--color-brown)',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}
                  >
                    Instagram
                  </a>
                  <a
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-lg transition-all text-center"
                    style={{
                      backgroundColor: 'var(--color-sage)',
                      fontFamily: 'var(--font-label)',
                      color: 'var(--color-brown)',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
