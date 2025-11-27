'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

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
    <section className="relative min-h-screen flex items-center pt-20 bg-gray-50">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-blue-50 text-blue-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Now Accepting New Patients
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Where Science
              <br />
              <span className="text-blue-500">Meets Artistry</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg max-w-xl text-gray-600 leading-relaxed">
              Experience premium medical aesthetics at NuSQIN. Our expert team delivers
              personalized treatments using cutting-edge technology for natural, beautiful results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button href="/contact" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/#treatments" variant="outline" size="lg">
                View Treatments
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  10+
                </div>
                <div className="text-sm text-gray-500">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  5000+
                </div>
                <div className="text-sm text-gray-500">
                  Happy Clients
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  8
                </div>
                <div className="text-sm text-gray-500">
                  Treatments
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="order-1 lg:order-2 relative">
            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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

              {/* Slider Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 w-2 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
