
import SectionSplineScene from './SectionSplineScene';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const SplineScene1 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  
  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="relative"
    >
      <SectionSplineScene scene="https://prod.spline.design/MHqJwmvmbjGpqqsK/scene.splinecode" />
    </motion.div>
  );
};

export const SplineScene2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <motion.div 
      ref={ref}
      className="rounded-3xl overflow-hidden my-24 relative"
      style={{ scale, opacity }}
    >
      <SectionSplineScene 
        scene="https://prod.spline.design/8NtAMBRnowHpONFa/scene.splinecode"
        className="relative min-h-[600px]"
      />
    </motion.div>
  );
};

export const SplineScene3 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
    >
      <SectionSplineScene scene="https://prod.spline.design/0nym7UV9LJSa8kuC/scene.splinecode" />
    </motion.div>
  );
};

export const SplineScene4 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
    >
      <SectionSplineScene 
        scene="https://prod.spline.design/dRFjVC8yrZFMSfGg/scene.splinecode"
        className="relative min-h-[600px]"
      />
    </motion.div>
  );
};

export const SplineScene5 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
    >
      <SectionSplineScene scene="https://prod.spline.design/sETXtt2xBru24o3T/scene.splinecode" />
    </motion.div>
  );
};

export const SplineScene6 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <motion.div 
      ref={ref}
      className="py-32 relative"
      style={{ scale, opacity }}
    >
      <SectionSplineScene 
        scene="https://prod.spline.design/tqE7lquhSK5FiG7n/scene.splinecode"
        className="relative min-h-[700px]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white text-center text-balance" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            Advanced Investment Strategies
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export const SplineScene7 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
    >
      <SectionSplineScene 
        scene="https://prod.spline.design/1LPGwPo7iz9qGz4W/scene.splinecode"
        className="relative min-h-[500px]"
      />
    </motion.div>
  );
};
