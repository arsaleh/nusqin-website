import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function About() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-16-at-4.02.15-AM.jpg"
                alt="NuSQIN Medical Aesthetics Clinic"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div
              className="absolute -bottom-6 -right-6 lg:-right-12 p-6 rounded-2xl shadow-xl"
              style={{ backgroundColor: 'var(--color-navy)' }}
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    10+
                  </div>
                  <div className="text-xs text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    Years
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    8
                  </div>
                  <div className="text-xs text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    Treatments
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    5K+
                  </div>
                  <div className="text-xs text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    Clients
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{
                backgroundColor: 'rgba(5, 83, 240, 0.1)',
                color: 'var(--color-blue)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500
              }}
            >
              About Us
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-gray-900)',
                letterSpacing: '-0.02em'
              }}
            >
              Premium Medical Aesthetics Care
            </h2>

            <div
              className="text-base leading-relaxed mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-gray-500)',
                lineHeight: '1.8'
              }}
            >
              <p className="mb-4">
                At NuSQIN Medical Aesthetics, we believe in the perfect harmony of science and artistry.
                Our clinic is dedicated to providing medically directed aesthetic care that prioritizes
                both your health and satisfaction.
              </p>
              <p>
                Located in Port Coquitlam, BC, we offer a comprehensive range of cutting-edge treatments
                performed by experienced medical professionals using state-of-the-art equipment.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '⚕️', text: 'Medically Directed Care' },
                { icon: '🔬', text: 'State-of-the-Art Equipment' },
                { icon: '✨', text: 'Personalized Treatment Plans' },
                { icon: '👨‍⚕️', text: 'Experienced Medical Team' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: 'var(--color-off-white)' }}
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-gray-700)',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button href="/about" size="lg">
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
