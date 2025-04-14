
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
import ScrolljackingProvider from '../components/ScrolljackingProvider';
import { 
  SplineScene1,
  SplineScene2, 
  SplineScene3,
  SplineScene4,
  SplineScene5, 
  SplineScene6,
  SplineScene7
} from '../components/AdditionalSplineScenes';

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
    <div className="min-h-screen bg-background">
      <LoadingScreen isLoading={loading} />
      
      {/* We render the main scene even when loading, to allow it to be ready when we hide the loading screen */}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {/* Main Spline scene fixed behind all content */}
        <SplineScene onLoad={handleSplineLoad} fixed={true} />
        
        {/* Navbar stays fixed at the top */}
        <Navbar />
        
        {/* Hero section with the main Spline */}
        <Hero />
        
        {/* Only render these sections after the main scene is loaded */}
        {renderSections && (
          <ScrolljackingProvider>
            <section className="h-screen w-full">
              <FeaturedProject />
            </section>
            
            <section className="h-screen w-full">
              <SplineScene1 />
              <WhyArctean />
            </section>
            
            <section className="h-screen w-full">
              <SplineScene2 />
              <Philosophy />
            </section>
            
            <section className="h-screen w-full">
              <SplineScene3 />
              <ParallaxFeatures />
            </section>
            
            <section className="h-screen w-full">
              <SplineScene4 />
              <Projects />
            </section>
            
            <section className="h-screen w-full">
              <SplineScene5 />
              <Audience />
            </section>
            
            <section className="h-screen w-full">
              <InteractiveFeatures />
            </section>
            
            <section className="h-screen w-full">
              <SplineScene6 />
              <TestimonialsSlider />
            </section>
            
            <section className="h-screen w-full">
              <SplineScene7 />
              <MetricsSection />
            </section>
          </ScrolljackingProvider>
        )}
        
        {/* Footer and FAQ outside the scrolljacking for better usability */}
        {renderSections && (
          <>
            <Faq />
            <AssetVault />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default MainIndex;
