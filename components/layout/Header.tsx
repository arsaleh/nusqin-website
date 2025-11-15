'use client';

import Link from 'next/link';
import { useState } from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Treatments', href: '/#treatments' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm"
      style={{ backgroundColor: 'rgba(246, 245, 241, 0.95)' }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span
                className="text-2xl font-light"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-brown)'
                }}
              >
                NuSQIN
              </span>
              <span
                className="ml-2 text-xs hidden sm:block"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-primary)',
                  letterSpacing: '0.04em'
                }}
              >
                Medical Aesthetics
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm uppercase transition-colors"
                style={{
                  fontFamily: 'var(--font-label)',
                  color: 'var(--color-brown)',
                  letterSpacing: '0.1em',
                  fontSize: '12px'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-sm transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.8
              }}
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
            <Button href="/contact" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            style={{ color: 'var(--color-brown)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4" style={{ borderTop: '1px solid var(--color-sage)' }}>
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm uppercase transition-colors rounded-md"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-brown)',
                    letterSpacing: '0.1em'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="block text-sm mb-3"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-brown)',
                    opacity: 0.8
                  }}
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <Button href="/contact" size="sm" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
