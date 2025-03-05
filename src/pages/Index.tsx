
import { useEffect } from "react";
import Navbar from "@/components/museum/Navbar";
import Hero from "@/components/museum/Hero";
import MuseumPresentation from "@/components/museum/MuseumPresentation";
import Testimonials from "@/components/museum/Testimonials";
import Footer from "@/components/museum/Footer";

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
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <MuseumPresentation />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
