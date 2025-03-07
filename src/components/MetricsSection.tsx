
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
    { metric: '$4.8B', description: 'Assets secured on our platform' },
    { metric: '99.9%', description: 'Fraud detection accuracy rate' },
    { metric: '124K', description: 'Users trusting Arctean worldwide' },
    { metric: '3.2M', description: 'Assets verified and protected' }
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
  
  const assetValue = useCounter(4800000000);
  const fraudRate = useCounter(99);
  const userCount = useCounter(124000);
  const assetCount = useCounter(3200000);
  
  const formatWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/5 to-black/0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Impact by the Numbers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arctean is rapidly becoming the global standard for asset security and wealth transfer.
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
            <h3 className="text-4xl font-display font-bold text-purple-400" ref={assetValue.ref}>
              ${assetValue.count > 1000000 ? `${(assetValue.count / 1000000000).toFixed(1)}B` : formatWithCommas(assetValue.count)}
            </h3>
            <p className="text-sm text-gray-400 mt-2">Assets secured on our platform</p>
          </motion.div>
          
          <motion.div 
            variants={item} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 text-center"
          >
            <h3 className="text-4xl font-display font-bold text-purple-400" ref={fraudRate.ref}>
              {fraudRate.count.toFixed(1)}%
            </h3>
            <p className="text-sm text-gray-400 mt-2">Fraud detection accuracy rate</p>
          </motion.div>
          
          <motion.div 
            variants={item} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 text-center"
          >
            <h3 className="text-4xl font-display font-bold text-purple-400" ref={userCount.ref}>
              {userCount.count > 1000 ? `${(userCount.count / 1000).toFixed(0)}K` : formatWithCommas(userCount.count)}
            </h3>
            <p className="text-sm text-gray-400 mt-2">Users trusting Arctean worldwide</p>
          </motion.div>
          
          <motion.div 
            variants={item} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 text-center"
          >
            <h3 className="text-4xl font-display font-bold text-purple-400" ref={assetCount.ref}>
              {assetCount.count > 1000000 ? `${(assetCount.count / 1000000).toFixed(1)}M` : formatWithCommas(assetCount.count)}
            </h3>
            <p className="text-sm text-gray-400 mt-2">Assets verified and protected</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
