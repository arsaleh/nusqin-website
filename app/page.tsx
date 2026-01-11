import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Financing from '@/components/sections/Financing';
import VideoShowcase from '@/components/sections/VideoShowcase';
import Team from '@/components/sections/Team';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Financing />
      <VideoShowcase />
      <Team />
    </>
  );
}
