import Link from 'next/link';
import { COMPANY_INFO, TREATMENTS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <path d="M8 8L20 20L8 32" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 8L32 20L20 32" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-semibold text-gray-900">
                NuSQIN
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p>{COMPANY_INFO.address.street}</p>
              <p>
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.province}{' '}
                {COMPANY_INFO.address.postalCode}
              </p>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Treatments
            </h3>
            <ul className="space-y-3">
              {TREATMENTS.slice(0, 6).map((treatment) => (
                <li key={treatment.id}>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {treatment.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#treatments"
                  className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <a
                  href="https://www.beautifi.com/doctors/nusqin-medical/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Financing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Hours</p>
                <p className="text-gray-600">{COMPANY_INFO.hours.display}</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-gray-50 transition-all"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-gray-50 transition-all"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Financing Partner */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <span className="text-sm text-gray-500">Financing available through</span>
            <a
              href="https://www.beautifi.com/doctors/nusqin-medical/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/partners/beautifi-horizontal.png"
                alt="Beautifi - Cosmetic Financing"
                className="h-8"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
