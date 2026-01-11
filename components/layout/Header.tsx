'use client';

import Link from 'next/link';
import { useState } from 'react';
import { COMPANY_INFO, TREATMENTS } from '@/lib/constants';
import Button from '@/components/ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/#treatments', hasSubmenu: true },
  { name: 'Financing', href: '/#financing' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Kanata-style logo icon */}
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <path d="M8 8L20 20L8 32" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 8L32 20L20 32" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              NUSQIN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Button href="/contact" size="sm">
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <>
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${servicesExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {servicesExpanded && (
                        <div className="pl-4 space-y-1">
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All Services
                          </Link>
                          {TREATMENTS.map((treatment) => (
                            <Link
                              key={treatment.id}
                              href={`/treatments/${treatment.slug}`}
                              className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {treatment.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 pt-4">
                <Button href="/contact" size="sm" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
