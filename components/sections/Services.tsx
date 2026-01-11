import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FEATURED_TREATMENTS } from '@/lib/constants';

// Image mapping for each treatment from nusqin.com
const treatmentImages: Record<string, string> = {
  'botox': 'https://nusqin.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-18-at-9.41.25-PM.jpeg',
  'dermal-fillers': 'https://images.unsplash.com/photo-1598300188904-6287d52746ad?w=2000&auto=format&fit=crop&q=80',
  'microneedling': 'https://nusqin.com/wp-content/uploads/2024/04/woman-holding-device-microneedle-mesotherapy-doing-skin-resurfacing-procedure-1471428695_6847x4565-scaled.jpeg',
  'platelet-rich-plasma': 'https://nusqin.com/wp-content/uploads/2024/04/prp-therapy-process-for-hair-loss-1364189789_8192x5464.jpeg',
  'laser-treatment': 'https://nusqin.com/wp-content/uploads/2024/04/Laser.jpg',
  'minor-surgeries': 'https://nusqin.com/wp-content/uploads/2024/04/person-pointing-to-lipoma-1607281866_6000x4000-scaled.jpeg',
  'tempsure': 'https://nusqin.com/wp-content/uploads/2024/04/Laser_2.jpg',
  'chemical-peels': '/treatments/chemical-peels.jpeg',
};

export default function Services() {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Our Treatments
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Discover our comprehensive range of medical aesthetic treatments designed to enhance
            your natural beauty with precision and care.
          </p>
        </div>

        {/* Treatment Grid - Kanata style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURED_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={treatmentImages[treatment.slug] || treatmentImages['botox']}
                  alt={treatment.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {treatment.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm mb-6 text-gray-500 line-clamp-2 leading-relaxed">
                  {treatment.shortDescription}
                </p>

                {/* Two Buttons - Kanata style */}
                <div className="flex gap-3">
                  <Button href="/contact" size="sm" className="flex-1">
                    Book Now
                  </Button>
                  <Button href={`/treatments/${treatment.slug}`} variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Light style */}
        <div className="rounded-2xl p-8 lg:p-12 text-center bg-white border border-gray-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Look?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book a free consultation with our expert team and discover the perfect treatment plan for your unique needs.
          </p>
          <Button href="/contact" size="lg">
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
