
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
  const [renderSections, setRenderSections] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleSplineLoad = () => {
    console.log("Main Spline scene loaded");
    setMainSceneLoaded(true);
    
    // Add a small delay to ensure smooth transition
    const timeout = setTimeout(() => {
      setLoading(false);
      
      // Delay rendering the rest of the sections slightly for better performance
      setTimeout(() => {
        setRenderSections(true);
      }, 300);
    }, 500);
    
    setLoadingTimeout(timeout);
  };

  // Set a maximum loading time of 10 seconds
  useEffect(() => {
    const maxLoadingTimeout = setTimeout(() => {
      if (loading) {
        console.log("Maximum loading time reached, showing content regardless of Spline load state");
        setMainSceneLoaded(true);
        setLoading(false);
        setRenderSections(true);
      }
    }, 10000);

    return () => {
      clearTimeout(maxLoadingTimeout);
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      window.gc && window.gc();
    };
  }, [loading, loadingTimeout]);

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-background">
        <LoadingScreen isLoading={loading} />
        
        {/* We render the main scene even when loading, to allow it to be ready when we hide the loading screen */}
        <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <SplineScene onLoad={handleSplineLoad} />
          <Navbar />
          
          <div className="section-container">
            <Section id="hero" parallaxFactor={0.3}>
              <Hero />
            </Section>
            
            {renderSections && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </ScrollProvider>
  );
};

export default MainIndex;
