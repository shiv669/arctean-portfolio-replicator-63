
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/WhyArctean";
import Philosophy from "@/components/AssetVault";
import InvestmentStrategies from "@/components/Audience";
import FeaturedApproach from "@/components/FeaturedProject";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import InteractiveFeatures from "@/components/InteractiveFeatures";
import MetricsSection from "@/components/MetricsSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ParallaxFeatures from "@/components/ParallaxFeatures";

const Index = () => {
  // Smooth scroll initialization
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  // Disable smooth scroll for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 50);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Philosophy />
      <InteractiveFeatures />
      <ParallaxFeatures />
      <MetricsSection />
      <InvestmentStrategies />
      <TestimonialsSlider />
      <FeaturedApproach />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
