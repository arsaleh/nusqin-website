import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_INFO.name}`,
  description: `Learn about ${COMPANY_INFO.name}, our mission, and our team of experienced medical aesthetics professionals in Port Coquitlam, BC.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      {/* About Section */}
      <About />

      {/* Team Section */}
      <Team />
    </div>
  );
}
