import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* Decorative Animated Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20 animate-pulse">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-mauve) 100%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Heading */}
        <h1
          className="text-6xl sm:text-7xl lg:text-[60px] font-light mb-6 leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-brown)',
            letterSpacing: '-0.02em'
          }}
        >
          Where Science Meets Artistry
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-brown)',
            opacity: 0.85,
            letterSpacing: '0.04em'
          }}
        >
          Redefining standards of medically directed aesthetic care
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button href="/contact" size="lg">
            Book Consultation
          </Button>
          <Button href="/#treatments" variant="outline" size="lg">
            View Treatments
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-3">⚕️</div>
            <h3
              className="text-sm uppercase mb-2"
              style={{
                fontFamily: 'var(--font-label)',
                color: 'var(--color-gold)',
                letterSpacing: '0.1em'
              }}
            >
              Medical Excellence
            </h3>
            <p
              className="text-sm"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.7
              }}
            >
              Medically directed aesthetic care
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">✨</div>
            <h3
              className="text-sm uppercase mb-2"
              style={{
                fontFamily: 'var(--font-label)',
                color: 'var(--color-gold)',
                letterSpacing: '0.1em'
              }}
            >
              Advanced Technology
            </h3>
            <p
              className="text-sm"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.7
              }}
            >
              State-of-the-art equipment
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-3">💚</div>
            <h3
              className="text-sm uppercase mb-2"
              style={{
                fontFamily: 'var(--font-label)',
                color: 'var(--color-gold)',
                letterSpacing: '0.1em'
              }}
            >
              Personalized Care
            </h3>
            <p
              className="text-sm"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-brown)',
                opacity: 0.7
              }}
            >
              Tailored to your unique needs
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
          style={{ color: 'var(--color-brown)', opacity: 0.5 }}
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
