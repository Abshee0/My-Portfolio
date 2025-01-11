import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <div className="max-w-screen mx-auto">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <ContactSection />
      </div>
    </div>
  );
}