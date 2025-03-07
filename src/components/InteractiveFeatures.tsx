
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { LockIcon, ShieldCheck, Database, Link } from 'lucide-react';

const features = [
  {
    id: 'secure-storage',
    title: 'Ultra-Secure Storage',
    description: 'Your assets are protected with military-grade encryption and decentralized storage systems that prevent unauthorized access.',
    icon: <LockIcon className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/20 to-blue-500/10',
    preview: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'fraud-prevention',
    title: 'Advanced Fraud Prevention',
    description: 'Our proprietary Asset DNA™ technology creates a unique signature for each asset that makes forgery virtually impossible.',
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    color: 'from-blue-500/20 to-purple-500/10',
    preview: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'blockchain-integration',
    title: 'Blockchain Integration',
    description: 'Assets are verified and recorded on multiple blockchain networks, creating an immutable record of ownership that stands up to legal scrutiny.',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/20 to-indigo-500/10',
    preview: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'smart-inheritance',
    title: 'Smart Inheritance System',
    description: 'Define rules for asset transfer that execute automatically under conditions you set, ensuring your wealth passes to the right hands.',
    icon: <Link className="w-6 h-6 text-purple-400" />,
    color: 'from-indigo-500/20 to-purple-500/10',
    preview: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  }
];

// Animation variants
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const codeBlockAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('secure-storage');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, 30]);
  
  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(current => {
        const currentIndex = features.findIndex(f => f.id === current);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
        
        <motion.div 
          ref={containerRef}
          style={{ opacity, scale, y }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <motion.div 
              className="lg:col-span-5 space-y-6"
              variants={containerAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map(feature => (
                <motion.div
                  key={feature.id}
                  variants={itemAnimation}
                  whileHover={{ 
                    x: 5, 
                    transition: { duration: 0.2 } 
                  }}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 relative ${activeFeature === feature.id ? 'bg-white/5 border border-white/10' : 'bg-transparent hover:bg-white/5'}`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {activeFeature === feature.id && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/5 rounded-lg"
                      layoutId="highlight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div 
                      className="w-10 h-10 bg-purple-900/30 flex items-center justify-center rounded-full flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="lg:col-span-7 relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                {features.map(feature => (
                  feature.id === activeFeature && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 rounded-lg"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}`}></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,107,246,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
                      
                      <div className="absolute inset-0 z-0 opacity-20">
                        <motion.img 
                          src={feature.preview}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.1, filter: "blur(8px)" }}
                          animate={{ scale: 1, filter: "blur(4px)" }}
                          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        />
                      </div>
                      
                      <div className="relative h-full flex items-center justify-center">
                        <motion.div
                          variants={codeBlockAnimation}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="w-full max-w-md aspect-[3/2] bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 shadow-xl"
                        >
                          <div className="flex items-center space-x-2 mb-4">
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-red-500"
                              whileHover={{ scale: 1.2 }}
                            ></motion.div>
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-yellow-500"
                              whileHover={{ scale: 1.2 }}
                            ></motion.div>
                            <motion.div 
                              className="w-3 h-3 rounded-full bg-green-500"
                              whileHover={{ scale: 1.2 }}
                            ></motion.div>
                            
                            <div className="h-4 w-40 bg-white/10 rounded ml-3"></div>
                          </div>
                          
                          <div className="space-y-3">
                            <motion.div 
                              className="h-3 w-full bg-white/10 rounded"
                              initial={{ width: "100%" }}
                              animate={{ width: ["100%", "70%", "85%"] }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            ></motion.div>
                            <motion.div 
                              className="h-3 w-4/5 bg-white/10 rounded"
                              initial={{ width: "80%" }}
                              animate={{ width: ["80%", "60%", "75%"] }}
                              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                            ></motion.div>
                            <motion.div 
                              className="h-3 w-3/4 bg-white/10 rounded"
                              initial={{ width: "75%" }}
                              animate={{ width: ["75%", "50%", "65%"] }}
                              transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
                            ></motion.div>
                            
                            <div className="py-2"></div>
                            
                            <motion.div 
                              className="h-3 w-5/6 bg-purple-500/30 rounded"
                              initial={{ width: "85%" }}
                              animate={{ width: ["85%", "70%", "80%"] }}
                              transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse" }}
                            ></motion.div>
                            <motion.div 
                              className="h-3 w-2/3 bg-purple-500/30 rounded"
                              initial={{ width: "67%" }}
                              animate={{ width: ["67%", "55%", "63%"] }}
                              transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse" }}
                            ></motion.div>
                          </div>
                          
                          <div className="mt-6 flex justify-end">
                            <motion.div 
                              className="h-8 w-20 bg-purple-500/30 rounded"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            ></motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
