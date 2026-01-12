'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import CountUp from '@/components/ui/CountUp';

// Treatment videos - vertical format
const treatmentVideos = [
  {
    src: '/video/botox-reel.mp4',
    title: 'Botox Treatment',
    label: 'Botox'
  },
  {
    src: '/video/laser-reel.mp4',
    title: 'Laser Hair Removal',
    label: 'Laser'
  },
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video end - switch to next
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % treatmentVideos.length);
  };

  // Reset video when switching
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gray-50">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-blue-50 text-blue-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Now Accepting New Patients
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Where Science
              <br />
              <span className="text-blue-500">Meets Artistry</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg max-w-xl text-gray-600 leading-relaxed">
              Experience premium medical aesthetics at NuSQIN. Our expert team delivers
              personalized treatments using cutting-edge technology for natural, beautiful results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button href="/contact" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/#treatments" variant="outline" size="lg">
                View Treatments
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <CountUp end={10} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-gray-500">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <CountUp end={500} suffix="+" duration={2500} />
                </div>
                <div className="text-sm text-gray-500">
                  Happy Clients
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  <CountUp end={7} duration={1500} />
                </div>
                <div className="text-sm text-gray-500">
                  Treatments
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Video Player */}
          <div className="order-1 lg:order-2 relative">
            {/* Video Container - Phone-like frame */}
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
              {/* Phone Frame */}
              <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black ring-4 ring-gray-800">
                {/* Video */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                >
                  <source src={treatmentVideos[currentVideo].src} type="video/mp4" />
                </video>

                {/* Video Label Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-semibold">
                    {treatmentVideos[currentVideo].title}
                  </p>
                  <p className="text-white/70 text-sm">
                    See our real treatments in action
                  </p>
                </div>

                {/* Notch (for phone effect) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>

              {/* Video Selector Pills */}
              <div className="flex justify-center gap-3 mt-6">
                {treatmentVideos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      index === currentVideo
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {video.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
