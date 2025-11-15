import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. Sara Kahrobaei',
    title: 'Family Physician / Medical Aesthetics Practitioner',
    image: 'https://nusqin.com/wp-content/uploads/2024/04/Dr.-Sara-Kahrobaei.webp',
    credentials: [
      'Member of the Royal College of Surgeons of Edinburgh',
      'Clinical Instructor at the University of British Columbia',
    ],
    bio: 'Became fully qualified family physician in 2012. Moved to Canada in 2014. Practices at Burke Mountain Medical Center. Services include Botox, Dermal Fillers, and surgical removal of skin lesions.',
  },
  {
    name: 'Dr. Ali Sanei Moghaddam',
    title: 'Medical Doctor',
    image: 'https://nusqin.com/wp-content/uploads/2024/04/Dr.-Ali-Sanei-Moghaddam.webp',
    credentials: [],
    bio: 'Dedicated medical professional committed to providing exceptional aesthetic care with precision and expertise.',
  },
];

export default function Team() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-sage)' }}>
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
            Meet Our Team
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
            Our experienced medical professionals are dedicated to your care and satisfaction
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ backgroundColor: 'var(--color-white)' }}
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  style={{ filter: 'brightness(0.95) saturate(1.05)' }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-brown)',
                    fontWeight: 400
                  }}
                >
                  {member.name}
                </h3>

                {/* Title */}
                <div
                  className="text-xs uppercase mb-4"
                  style={{
                    fontFamily: 'var(--font-label)',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.1em'
                  }}
                >
                  {member.title}
                </div>

                {/* Bio */}
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-brown)',
                    opacity: 0.8,
                    letterSpacing: '0.04em'
                  }}
                >
                  {member.bio}
                </p>

                {/* Credentials */}
                {member.credentials.length > 0 && (
                  <div className="border-t pt-4" style={{ borderColor: 'var(--color-sage)' }}>
                    <div
                      className="text-xs uppercase mb-2"
                      style={{
                        fontFamily: 'var(--font-label)',
                        color: 'var(--color-brown)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      Credentials
                    </div>
                    <ul className="space-y-1">
                      {member.credentials.map((credential, idx) => (
                        <li
                          key={idx}
                          className="text-xs flex items-start"
                          style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-brown)',
                            opacity: 0.7
                          }}
                        >
                          <span
                            className="mr-2"
                            style={{ color: 'var(--color-gold)' }}
                          >
                            •
                          </span>
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
