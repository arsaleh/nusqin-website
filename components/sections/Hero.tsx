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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0 w-full h-full">
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
              style={{ filter: 'brightness(0.35)' }}
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient Overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(71, 66, 64, 0.65) 0%, rgba(206, 184, 187, 0.45) 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Heading */}
        <h1
          className="text-6xl sm:text-7xl lg:text-[60px] font-light mb-6 leading-tight text-white drop-shadow-2xl"
          style={{
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
          }}
        >
          Where Science Meets Artistry
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 text-white drop-shadow-lg"
          style={{
            fontFamily: 'var(--font-body)',
            opacity: 0.95,
            letterSpacing: '0.04em',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}
        >
          Redefining standards of medically directed aesthetic care
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button href="/contact" size="lg">
            Book Consultation
          </Button>
          <Button
            href="/#treatments"
            variant="outline"
            size="lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: 'var(--color-brown)',
              color: 'var(--color-brown)'
            }}
          >
            View Treatments
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center backdrop-blur-sm bg-white/10 p-6 rounded-lg transition-all hover:bg-white/20">
            <div className="text-5xl mb-3">⚕️</div>
            <h3
              className="text-sm uppercase mb-2 text-white"
              style={{
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.1em'
              }}
            >
              Medical Excellence
            </h3>
            <p
              className="text-sm text-white"
              style={{
                fontFamily: 'var(--font-body)',
                opacity: 0.9
              }}
            >
              Medically directed aesthetic care
            </p>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 p-6 rounded-lg transition-all hover:bg-white/20">
            <div className="text-5xl mb-3">✨</div>
            <h3
              className="text-sm uppercase mb-2 text-white"
              style={{
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.1em'
              }}
            >
              Advanced Technology
            </h3>
            <p
              className="text-sm text-white"
              style={{
                fontFamily: 'var(--font-body)',
                opacity: 0.9
              }}
            >
              State-of-the-art equipment
            </p>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 p-6 rounded-lg transition-all hover:bg-white/20">
            <div className="text-5xl mb-3">💚</div>
            <h3
              className="text-sm uppercase mb-2 text-white"
              style={{
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.1em'
              }}
            >
              Personalized Care
            </h3>
            <p
              className="text-sm text-white"
              style={{
                fontFamily: 'var(--font-body)',
                opacity: 0.9
              }}
            >
              Tailored to your unique needs
            </p>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          style={{ opacity: 0.7 }}
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
