'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';

// Treatment images for slider from nusqin.com
const sliderImages = [
  {
    src: 'https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-18-at-9.41.25-PM.jpeg',
    alt: 'Botox Treatment'
  },
  {
    src: 'https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-16-at-4.02.55-AM-1.jpeg',
    alt: 'Dermal Fillers'
  },
  {
    src: 'https://nusqin.com/wp-content/uploads/2024/04/woman-holding-device-microneedle-mesotherapy-doing-skin-resurfacing-procedure-1471428695_6847x4565-scaled.jpeg',
    alt: 'Microneedling Treatment'
  },
  {
    src: 'https://nusqin.com/wp-content/uploads/2024/04/Laser.jpg',
    alt: 'Laser Treatment'
  },
  {
    src: 'https://nusqin.com/wp-content/uploads/2024/04/prp-therapy-process-for-hair-loss-1364189789_8192x5464.jpeg',
    alt: 'PRP Therapy'
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Split Layout Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            {/* Eyebrow Text */}
            <div
              className="inline-block px-5 py-2.5 rounded-full text-xs uppercase tracking-widest"
              style={{
                backgroundColor: 'var(--color-gold)',
                color: 'white',
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.15em',
                boxShadow: '0 2px 12px rgba(212, 175, 55, 0.25)'
              }}
            >
              Premium Medical Aesthetics
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-charcoal)',
                letterSpacing: '-0.02em'
              }}
            >
              Where Science
              <br />
              <span style={{
                color: 'var(--color-terracotta)',
                fontWeight: '400'
              }}>Meets Artistry</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl max-w-xl"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-charcoal)',
                letterSpacing: '0.01em',
                lineHeight: '1.8'
              }}
            >
              Redefining standards of medically directed aesthetic care with cutting-edge treatments and personalized attention.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/contact" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/#treatments" variant="outline" size="lg">
                Explore Treatments
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: 'var(--color-mauve)' }}>
              <div>
                <div
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-gold)'
                  }}
                >
                  10+
                </div>
                <div
                  className="text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-charcoal)',
                    letterSpacing: '0.1em'
                  }}
                >
                  Years Experience
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-gold)'
                  }}
                >
                  5000+
                </div>
                <div
                  className="text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-charcoal)',
                    letterSpacing: '0.1em'
                  }}
                >
                  Happy Clients
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-gold)'
                  }}
                >
                  8
                </div>
                <div
                  className="text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-charcoal)',
                    letterSpacing: '0.1em'
                  }}
                >
                  Treatments
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="order-1 lg:order-2 relative">
            {/* Image Container with Modern Shape */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Slider */}
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Subtle Bottom Gradient for Indicators Visibility */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Slider Indicators - Inside Image */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 w-1 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Element - Floating Badge */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center shadow-lg animate-pulse"
              style={{
                backgroundColor: 'var(--color-gold)',
                color: 'white'
              }}
            >
              <div className="text-center">
                <div className="text-2xl">⚕️</div>
                <div
                  className="text-[10px] uppercase font-semibold"
                  style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.05em' }}
                >
                  Medical
                  <br />
                  Grade
                </div>
              </div>
            </div>

            {/* Decorative Abstract Shape */}
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-50 blur-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--color-terracotta) 0%, var(--color-mauve) 100%)',
              }}
            />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
          style={{ color: 'var(--color-primary)' }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
