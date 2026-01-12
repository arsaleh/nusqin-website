import type { Metadata } from 'next';
import Image from 'next/image';
import { COMPANY_INFO, TEAM_MEMBERS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Team from '@/components/sections/Team';

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_INFO.name}`,
  description: `Learn about ${COMPANY_INFO.name}, our mission, and our team of experienced medical aesthetics professionals in Port Coquitlam, BC.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-blue-50 text-blue-600 font-medium mb-6">
                About NuSQIN
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Where Science
                <br />
                <span className="text-blue-500">Meets Artistry</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                NuSQIN Medical Aesthetics was founded by Dr. Sara Kahrobaei and Dr. Ali Sanei
                with a shared vision: to provide prompt, high-quality dermatology and surgical services
                to patients in the Tri-Cities and surrounding areas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Book a Consultation
                </Button>
                <Button href="/#treatments" variant="outline" size="lg">
                  View Treatments
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/nusqin-photo.avif"
                  alt="NuSQIN Medical Aesthetics Clinic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              What began as a shared passion between two physicians has grown into a trusted
              destination for medical aesthetics in British Columbia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                Dr. Sara Kahrobaei and Dr. Ali Sanei bring together decades of combined
                experience in family medicine, surgery, and cosmetic dermatology. Both trained in
                the UK and Canada, they share a commitment to excellence and patient-centered care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                After establishing themselves at Burke Mountain Medical Centre, they recognized
                a growing need for accessible, high-quality aesthetic services in the Tri-Cities.
                NuSQIN was born from this vision—a clinic where patients could receive expert
                cosmetic care from physicians they know and trust.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, NuSQIN offers a comprehensive range of treatments, from Botox and dermal
                fillers to advanced laser therapies and minor surgical procedures. Our team,
                including Dr. Neda Sadeghi, continues to expand our capabilities while maintaining
                the personalized approach that defines our practice.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about/kanata-outside.avif"
                  alt="NuSQIN Clinic Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe everyone deserves to feel confident in their own skin. Our mission is to
              provide safe, effective aesthetic treatments that enhance your natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚕️',
                title: 'Medical Excellence',
                description: 'Every treatment is performed by qualified medical professionals using proven techniques and premium products.'
              },
              {
                icon: '🤝',
                title: 'Patient-First Care',
                description: 'We listen to your concerns, understand your goals, and create personalized treatment plans tailored to you.'
              },
              {
                icon: '🔬',
                title: 'Innovation',
                description: 'We stay at the forefront of aesthetic medicine, continuously adopting the latest technologies and techniques.'
              },
              {
                icon: '✨',
                title: 'Natural Results',
                description: 'Our goal is to enhance your natural beauty, not change who you are. Subtle, refined results are our specialty.'
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Facility
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Located in the heart of Port Coquitlam, our modern clinic is designed with your
                comfort and safety in mind. From the moment you walk through our doors, you'll
                experience a welcoming environment that puts you at ease.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'State-of-the-art treatment rooms',
                  'Advanced Cynosure Elite+ laser system',
                  'Comfortable consultation areas',
                  'Strict hygiene and safety protocols',
                  'Convenient parking available',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-1">{COMPANY_INFO.address.street}</p>
                <p className="text-gray-600">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.province}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/about/nusqin-photo.avif"
                  alt="Treatment Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/about/kanata-outside.avif"
                  alt="Clinic Exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '7', label: 'Treatments Offered' },
              { number: '3', label: 'Expert Practitioners' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Book a consultation with our team and discover how we can help you achieve
            your aesthetic goals with confidence.
          </p>
          <Button href="/contact" size="lg">
            Book Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
