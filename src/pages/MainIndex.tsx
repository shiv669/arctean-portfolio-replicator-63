
import { useState, useEffect } from 'react';
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
import { 
  SplineScene1,
  SplineScene2, 
  SplineScene3,
  SplineScene4,
  SplineScene5, 
  SplineScene6,
  SplineScene7
} from '../components/AdditionalSplineScenes';
import { ScrollProvider } from '../context/ScrollContext';
import Section from '../components/Section';

const MainIndex = () => {
  const [loading, setLoading] = useState(true);
  const [mainSceneLoaded, setMainSceneLoaded] = useState(false);

  const handleSplineLoad = () => {
    console.log("Main Spline scene loaded");
    setMainSceneLoaded(true);
    
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // Set a maximum loading time of 8 seconds
  useEffect(() => {
    const maxLoadingTimeout = setTimeout(() => {
      if (loading) {
        console.log("Maximum loading time reached, showing content regardless of Spline load state");
        setMainSceneLoaded(true);
        setLoading(false);
      }
    }, 8000);

    return () => {
      clearTimeout(maxLoadingTimeout);
    };
  }, [loading]);

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-background overflow-hidden">
        <LoadingScreen isLoading={loading} />
        
        <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          {/* Main background Spline scene fixed behind everything */}
          <SplineScene onLoad={handleSplineLoad} />
          <Navbar />
          
          <div className="section-container">
            <Section id="hero" parallaxFactor={0.3}>
              <Hero />
            </Section>
            
            <Section id="featured-project" parallaxFactor={0.2}>
              <FeaturedProject />
              <SplineScene1 />
            </Section>
            
            <Section id="why-arctean" parallaxFactor={0.25}>
              <WhyArctean />
              <SplineScene2 />
            </Section>
            
            <Section id="philosophy" parallaxFactor={0.2}>
              <Philosophy />
              <SplineScene3 />
            </Section>
            
            <Section id="parallax-features" parallaxFactor={0.15}>
              <ParallaxFeatures />
              <SplineScene4 />
            </Section>
            
            <Section id="projects" parallaxFactor={0.25}>
              <Projects />
              <SplineScene5 />
            </Section>
            
            <Section id="audience" parallaxFactor={0.2}>
              <Audience />
            </Section>
            
            <Section id="interactive-features" parallaxFactor={0.22}>
              <InteractiveFeatures />
              <SplineScene6 />
            </Section>
            
            <Section id="testimonials" parallaxFactor={0.18}>
              <TestimonialsSlider />
              <SplineScene7 />
            </Section>
            
            <Section id="metrics" parallaxFactor={0.25}>
              <MetricsSection />
            </Section>
            
            <Section id="faq" parallaxFactor={0.2}>
              <Faq />
            </Section>
            
            <Section id="asset-vault" parallaxFactor={0.15}>
              <AssetVault />
            </Section>
            
            <Section id="footer" parallaxFactor={0.1}>
              <Footer />
            </Section>
          </div>
        </div>
      </div>
    </ScrollProvider>
  );
};

export default MainIndex;
