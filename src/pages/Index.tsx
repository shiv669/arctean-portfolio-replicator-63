
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyArctean from "@/components/WhyArctean";
import AssetVault from "@/components/AssetVault";
import Audience from "@/components/Audience";
import FeaturedProject from "@/components/FeaturedProject";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

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
      <WhyArctean />
      <AssetVault />
      <Audience />
      <FeaturedProject />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
