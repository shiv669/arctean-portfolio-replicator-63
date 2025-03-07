
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, Shield, FileText } from 'lucide-react';

const features = [
  {
    title: "Asset Registration",
    description: "Our intuitive dashboard makes adding new assets simple. Just upload your documents, fill in basic details, and your asset is instantly protected.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-purple-500/20 to-blue-500/20",
    icon: <FileText className="w-8 h-8 text-purple-400" />,
    details: [
      "Document verification",
      "Secure encryption",
      "Blockchain recording",
      "Instant confirmation"
    ]
  },
  {
    title: "Wealth Distribution Planning",
    description: "Our visual inheritance planner allows you to drag and drop assets to beneficiaries, set conditions, and see exactly how your wealth will be distributed.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-blue-500/20 to-purple-500/20",
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    details: [
      "Visual distribution planner",
      "Conditional inheritance rules",
      "Auto-executing transfers",
      "Real-time simulations"
    ]
  },
  {
    title: "Beneficiary Management",
    description: "Keep your loved ones informed with customizable notifications. They'll receive only the information you want them to have, exactly when you want them to have it.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-indigo-500/20 to-pink-500/20",
    icon: <Lock className="w-8 h-8 text-indigo-400" />,
    details: [
      "Customizable permissions",
      "Timed notifications",
      "Secure access controls",
      "Multi-signature verification"
    ]
  }
];

const ParallaxFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [expandedInfoIndex, setExpandedInfoIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Floating animation variant
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };

  // Info panel animation
  const infoPanelAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };
  
  const toggleInfo = (index: number) => {
    if (expandedInfoIndex === index) {
      setExpandedInfoIndex(null);
    } else {
      setExpandedInfoIndex(index);
    }
  };
  
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(138, 107, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%)"
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      
      {/* Moving particles in background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Experience Seamless Security</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arctean combines cutting-edge technology with intuitive design to provide you with a seamless asset protection experience.
          </p>
        </motion.div>
        
        <div ref={containerRef} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="relative p-6">
                <motion.div 
                  style={{ 
                    y: index === 0 ? y1 : index === 1 ? y2 : y3,
                    x: index === 0 ? x1 : index === 1 ? 0 : x2,
                    rotateZ: index === 0 ? rotate1 : index === 1 ? 0 : rotate2,
                    scale: scale
                  }}
                  className="mb-6 rounded-lg overflow-hidden aspect-video relative group"
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10`}></div>
                  
                  <motion.img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated overlay on hover */}
                  <motion.div
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-lg flex flex-col items-center">
                      <div className="mb-2">{feature.icon}</div>
                      <span className="text-base font-medium text-white">{feature.title}</span>
                      <button 
                        onClick={() => toggleInfo(index)} 
                        className="mt-2 text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                      >
                        Learn more <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Tech circuit lines animation */}
                  <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                    <motion.path 
                      d={`M 0 ${Math.random() * 50 + 50} Q ${Math.random() * 200 + 100} ${Math.random() * 100} ${Math.random() * 200 + 200} ${Math.random() * 50 + 50}`}
                      stroke="rgba(139, 92, 246, 0.5)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                    />
                    <motion.path 
                      d={`M ${Math.random() * 100 + 200} 0 Q ${Math.random() * 200 + 100} ${Math.random() * 100 + 50} ${Math.random() * 100} ${Math.random() * 50 + 100}`}
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "loop" }}
                    />
                  </svg>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <h3 className="text-xl md:text-2xl font-display mb-3">{feature.title}</h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                  
                  {/* Feature highlights */}
                  <ul className="mt-4 space-y-2">
                    {feature.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mt-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                
                {/* Expanded info panel */}
                <AnimatePresence>
                  {expandedInfoIndex === index && (
                    <motion.div
                      className="absolute top-full left-0 right-0 mt-4 bg-black/80 backdrop-blur-md border border-purple-500/20 rounded-lg p-4 z-50 shadow-xl"
                      variants={infoPanelAnimation}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-medium text-white">{feature.title} Details</h4>
                        <button 
                          onClick={() => setExpandedInfoIndex(null)}
                          className="text-gray-400 hover:text-white"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex gap-3 items-center">
                          {feature.icon}
                          <div className="h-8 w-2/3 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded animate-pulse"></div>
                        </div>
                        
                        <p className="text-sm text-gray-300">
                          Arctean's {feature.title.toLowerCase()} system uses advanced blockchain technology 
                          and military-grade encryption to ensure your assets remain protected.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {feature.details.map((detail, i) => (
                            <motion.div 
                              key={i}
                              className="bg-white/5 rounded p-2 text-xs"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              {detail}
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-3 text-right">
                          <motion.button
                            className="text-xs bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-3 py-1 rounded transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Try it now
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {/* Bottom glowing effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15), rgba(0, 0, 0, 0) 70%)"
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          
          {/* Connection lines between features */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full">
              {hoveredFeature !== null && (
                <motion.path
                  d={`M ${features.map((_, i) => i === hoveredFeature ? 1 : 0).join(' ')} Z`}
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxFeatures;
