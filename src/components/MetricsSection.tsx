
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated counter hook
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef);
  
  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, inView]);
  
  return { count, ref: nodeRef };
};

const MetricsSection = () => {
  const stats = [
    { metric: '17.8%', description: 'Average annual returns since inception' },
    { metric: '76%', description: 'Success rate on value investments' },
    { metric: '$42M', description: 'Assets under management' },
    { metric: '45+', description: 'Institutional investment partnerships' }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };
  
  const annualReturn = useCounter(18);
  const successRate = useCounter(76);
  const aum = useCounter(42);
  const partnerships = useCounter(45);
  
  const formatWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-gray-900/5 to-black/0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Performance Highlights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kapital LLC consistently delivers exceptional results through disciplined value investing and quantitative analysis.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div 
            variants={item} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 text-center"
          >
            <h3 className="text-4xl font-display font-bold text-white" ref={annualReturn.ref}>
              {annualReturn.count}.8%
            </h3>
            <p className="text-sm text-gray-400 mt-2">Average annual returns since inception</p>
          </motion.div>
          
          <motion.div 
            variants={item} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 text-center"
          >
            <h3 className="text-4xl font-display font-bold text-white" ref={successRate.ref}>
              {successRate.count}%
            </h3>
            <p className="text-sm text-gray-400 mt-2">Success rate on value investments</p>
          </motion.div>
          
          <motion.div 
            variants={item} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 text-center"
          >
            <h3 className="text-4xl font-display font-bold text-white" ref={aum.ref}>
              ${aum.count}M
            </h3>
            <p className="text-sm text-gray-400 mt-2">Assets under management</p>
          </motion.div>
          
          <motion.div 
            variants={item} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 text-center"
          >
            <h3 className="text-4xl font-display font-bold text-white" ref={partnerships.ref}>
              {partnerships.count}+
            </h3>
            <p className="text-sm text-gray-400 mt-2">Institutional investment partnerships</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
