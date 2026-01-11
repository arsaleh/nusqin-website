import Image from 'next/image';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/lib/constants';

export default function Team() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Our experienced medical professionals are dedicated to your care and satisfaction
          </p>
        </div>

        {/* Team Grid - Kanata style simple cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Content - Simple Kanata style */}
              <div className="p-6 text-center">
                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                {/* Credentials */}
                <p className="text-sm text-gray-500 mt-1">
                  {member.credentials}
                </p>

                {/* View Profile Link - Blue text like Kanata */}
                <Link
                  href={`/team/${member.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600 mt-4 transition-colors"
                >
                  View Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
