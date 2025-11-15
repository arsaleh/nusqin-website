import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/constants';

export default function About() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-mauve)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-16-at-4.02.15-AM.jpg"
                alt="NuSQIN Medical Aesthetics Clinic"
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.95) saturate(1.05)' }}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-light mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-brown)',
                letterSpacing: '-0.01em'
              }}
            >
              About {COMPANY_INFO.name}
            </h2>

            <div
              className="text-base leading-relaxed mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.85,
                letterSpacing: '0.04em'
              }}
            >
              <p className="mb-4">
                At NuSQIN Medical Aesthetics, we believe in the perfect harmony of science and artistry.
                Our clinic is dedicated to providing medically directed aesthetic care that prioritizes
                both your health and satisfaction.
              </p>
              <p className="mb-4">
                Located in Port Coquitlam, BC, we offer a comprehensive range of cutting-edge treatments
                performed by experienced medical professionals using state-of-the-art equipment.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'Medically Directed Care',
                'State-of-the-Art Equipment',
                'Personalized Treatment Plans',
                'Experienced Medical Team',
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-brown)',
                      fontSize: '14px',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brown)'
                  }}
                >
                  10+
                </div>
                <div
                  className="text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-brown)',
                    opacity: 0.7,
                    letterSpacing: '0.1em'
                  }}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brown)'
                  }}
                >
                  6
                </div>
                <div
                  className="text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-brown)',
                    opacity: 0.7,
                    letterSpacing: '0.1em'
                  }}
                >
                  Treatments
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brown)'
                  }}
                >
                  1000+
                </div>
                <div
                  className="text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-brown)',
                    opacity: 0.7,
                    letterSpacing: '0.1em'
                  }}
                >
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
