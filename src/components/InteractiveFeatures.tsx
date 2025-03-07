
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LockIcon, ShieldCheck, Database, Link } from 'lucide-react';

const features = [
  {
    id: 'secure-storage',
    title: 'Ultra-Secure Storage',
    description: 'Your assets are protected with military-grade encryption and decentralized storage systems that prevent unauthorized access.',
    icon: <LockIcon className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/20 to-blue-500/10'
  },
  {
    id: 'fraud-prevention',
    title: 'Advanced Fraud Prevention',
    description: 'Our proprietary Asset DNA™ technology creates a unique signature for each asset that makes forgery virtually impossible.',
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    color: 'from-blue-500/20 to-purple-500/10'
  },
  {
    id: 'blockchain-integration',
    title: 'Blockchain Integration',
    description: 'Assets are verified and recorded on multiple blockchain networks, creating an immutable record of ownership that stands up to legal scrutiny.',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/20 to-indigo-500/10'
  },
  {
    id: 'smart-inheritance',
    title: 'Smart Inheritance System',
    description: 'Define rules for asset transfer that execute automatically under conditions you set, ensuring your wealth passes to the right hands.',
    icon: <Link className="w-6 h-6 text-purple-400" />,
    color: 'from-indigo-500/20 to-purple-500/10'
  }
];

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('secure-storage');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  
  return (
    <section className="py-28 bg-black overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Enterprise-Grade Protection</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arctean's security systems leverage cutting-edge technology to ensure your assets remain protected and verified for generations.
          </p>
        </motion.div>
        
        <div ref={containerRef} className="relative">
          <motion.div 
            style={{ opacity }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            <div className="lg:col-span-5 space-y-6">
              {features.map(feature => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg cursor-pointer transition-all ${activeFeature === feature.id ? 'bg-white/5 border border-white/10' : 'bg-transparent'}`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-900/30 flex items-center justify-center rounded-full flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="lg:col-span-7 relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              {features.map(feature => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeFeature === feature.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}`}></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,107,246,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
                  
                  <div className="relative h-full flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full max-w-md aspect-[3/2] bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                    >
                      <div className="h-4 w-24 bg-white/10 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-white/10 rounded"></div>
                        <div className="h-3 w-4/5 bg-white/10 rounded"></div>
                        <div className="h-3 w-3/4 bg-white/10 rounded"></div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <div className="h-8 w-20 bg-purple-500/30 rounded"></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
