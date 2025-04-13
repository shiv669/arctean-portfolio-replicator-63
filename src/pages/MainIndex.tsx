
import { useState } from 'react';
import Hero from '../components/Hero';
import SplineScene from '../components/SplineScene';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import FeaturedProject from '../components/FeaturedProject';
import WhyArctean from '../components/WhyArctean';
import Philosophy from '../components/Philosophy';
import ParallaxFeatures from '../components/ParallaxFeatures';
import Projects from '../components/Projects';
import Audience from '../components/Audience';
import InteractiveFeatures from '../components/InteractiveFeatures';
import TestimonialsSlider from '../components/TestimonialsSlider';
import MetricsSection from '../components/MetricsSection';
import Faq from '../components/Faq';
import AssetVault from '../components/AssetVault';
import Footer from '../components/Footer';

const MainIndex = () => {
  const [loading, setLoading] = useState(true);

  const handleSplineLoad = () => {
    // Adding a small delay to ensure smooth transition
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen isLoading={loading} />
      
      {/* We render everything even when loading, but it's hidden by the loading screen */}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <SplineScene onLoad={handleSplineLoad} />
        <Navbar />
        <Hero />
        <FeaturedProject />
        <WhyArctean />
        <Philosophy />
        <ParallaxFeatures />
        <Projects />
        <Audience />
        <InteractiveFeatures />
        <TestimonialsSlider />
        <MetricsSection />
        <Faq />
        <AssetVault />
        <Footer />
      </div>
    </div>
  );
};

export default MainIndex;
