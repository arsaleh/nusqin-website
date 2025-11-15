import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { TREATMENTS, COMPANY_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

// Image mapping for treatments
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

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all treatments
export async function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({
    slug: treatment.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: `${treatment.name} | ${COMPANY_INFO.name}`,
    description: treatment.description,
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  // Return 404 if treatment not found
  if (!treatment) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={treatmentImages[treatment.slug] || treatmentImages['botox']}
            alt={treatment.name}
            fill
            className="object-cover"
            style={{ filter: 'brightness(0.4)' }}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-6xl mb-6">{treatment.icon}</div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em'
              }}
            >
              {treatment.name}
            </h1>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                opacity: 0.9,
                letterSpacing: '0.04em'
              }}
            >
              {treatment.shortDescription}
            </p>
            <Button href="/contact" size="lg">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16">
            <h2
              className="text-3xl font-light mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-brown)',
                letterSpacing: '-0.01em'
              }}
            >
              About {treatment.name}
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.85,
                letterSpacing: '0.04em'
              }}
            >
              {treatment.description}
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2
              className="text-3xl font-light mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-brown)',
                letterSpacing: '-0.01em'
              }}
            >
              Benefits
            </h2>
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: 'var(--color-white)' }}
            >
              <ul className="space-y-4">
                {treatment.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-brown)',
                      opacity: 0.85,
                      letterSpacing: '0.04em'
                    }}
                  >
                    <span
                      className="mr-3 mt-1 text-xl flex-shrink-0"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conditions Treated */}
          {treatment.conditionsTreated && treatment.conditionsTreated.length > 0 && (
            <div className="mb-16">
              <h2
                className="text-3xl font-light mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-brown)',
                  letterSpacing: '-0.01em'
                }}
              >
                Conditions Treated
              </h2>
              <div
                className="p-8 rounded-lg"
                style={{ backgroundColor: 'var(--color-white)' }}
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {treatment.conditionsTreated.map((condition, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-brown)',
                        opacity: 0.85,
                        letterSpacing: '0.04em'
                      }}
                    >
                      <span
                        className="mr-3 mt-1 flex-shrink-0"
                        style={{ color: 'var(--color-gold)' }}
                      >
                        •
                      </span>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Treatment Process */}
          {treatment.process && treatment.process.length > 0 && (
            <div className="mb-16">
              <h2
                className="text-3xl font-light mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-brown)',
                  letterSpacing: '-0.01em'
                }}
              >
                What to Expect
              </h2>
              <div
                className="p-8 rounded-lg"
                style={{ backgroundColor: 'var(--color-white)' }}
              >
                <ol className="space-y-6">
                  {treatment.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span
                        className="text-2xl font-light mr-4 flex-shrink-0"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--color-gold)'
                        }}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-brown)',
                            opacity: 0.85,
                            letterSpacing: '0.04em'
                          }}
                        >
                          {step}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* Maintenance */}
          {treatment.maintenance && (
            <div className="mb-16">
              <h2
                className="text-3xl font-light mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-brown)',
                  letterSpacing: '-0.01em'
                }}
              >
                Maintenance
              </h2>
              <div
                className="p-8 rounded-lg"
                style={{ backgroundColor: 'var(--color-sage)' }}
              >
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-brown)',
                    opacity: 0.85,
                    letterSpacing: '0.04em'
                  }}
                >
                  {treatment.maintenance}
                </p>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div
            className="text-center rounded-2xl p-12"
            style={{ backgroundColor: 'var(--color-mauve)' }}
          >
            <h2
              className="text-3xl font-light mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-brown)',
                letterSpacing: '-0.01em'
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-base mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.8,
                letterSpacing: '0.04em'
              }}
            >
              Book a consultation with our experienced team to learn more about {treatment.name} and
              create a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Book Consultation
              </Button>
              <Button href="/#treatments" variant="outline" size="lg">
                View All Treatments
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
