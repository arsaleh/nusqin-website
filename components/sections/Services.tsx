import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FEATURED_TREATMENTS } from '@/lib/constants';

// Image mapping for each treatment from nusqin.com
const treatmentImages: Record<string, string> = {
  'botox': 'https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-18-at-9.41.25-PM.jpeg',
  'dermal-fillers': 'https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-16-at-4.02.55-AM-1.jpeg',
  'microneedling': 'https://nusqin.com/wp-content/uploads/2024/04/woman-holding-device-microneedle-mesotherapy-doing-skin-resurfacing-procedure-1471428695_6847x4565-scaled.jpeg',
  'platelet-rich-plasma': 'https://nusqin.com/wp-content/uploads/2024/04/prp-therapy-process-for-hair-loss-1364189789_8192x5464.jpeg',
  'laser-treatment': 'https://nusqin.com/wp-content/uploads/2024/04/Laser.jpg',
  'minor-surgeries': 'https://nusqin.com/wp-content/uploads/2024/04/person-pointing-to-lipoma-1607281866_6000x4000-scaled.jpeg',
  'tempsure': 'https://nusqin.com/wp-content/uploads/2024/04/Laser_2.jpg', // RF skin tightening device
  'chemical-peels': 'https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-16-at-4.14.47-AM-1-e1713472748483-300x205.jpeg', // Chemical peel application
};

export default function Services() {
  return (
    <section id="treatments" className="py-20" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-light mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-brown)',
              letterSpacing: '-0.01em'
            }}
          >
            Our Treatments
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-brown)',
              opacity: 0.7,
              letterSpacing: '0.04em'
            }}
          >
            Discover our comprehensive range of medical aesthetic treatments designed to enhance
            your natural beauty
          </p>
        </div>

        {/* Treatment Grid - 4 column on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED_TREATMENTS.map((treatment) => (
            <Link
              key={treatment.id}
              href={`/treatments/${treatment.slug}`}
              className="group block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: 'var(--color-white)' }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={treatmentImages[treatment.slug] || treatmentImages['botox']}
                  alt={treatment.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.95) saturate(1.05)' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="text-center text-4xl mb-3">{treatment.icon}</div>

                {/* Title */}
                <h3
                  className="text-xl text-center mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brown)',
                    fontWeight: 400
                  }}
                >
                  {treatment.name}
                </h3>

                {/* Short Description */}
                <p
                  className="text-sm text-center mb-4 line-clamp-3"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-brown)',
                    opacity: 0.7,
                    letterSpacing: '0.04em'
                  }}
                >
                  {treatment.shortDescription}
                </p>

                {/* Learn More Link */}
                <div
                  className="flex items-center justify-center text-sm uppercase tracking-wider transition-all"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-accent)',
                    letterSpacing: '0.1em'
                  }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Treatments CTA */}
        <div className="text-center">
          <Button href="/contact" size="lg">
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
