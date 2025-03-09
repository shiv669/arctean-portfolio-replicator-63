
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, Shield, FileText, ChevronRight } from 'lucide-react';

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
    ],
    stepsInfo: [
      { step: "Upload Documents", description: "Securely upload any document format" },
      { step: "Enter Asset Details", description: "Specify value, location and type" },
      { step: "Verification", description: "Our AI verifies authenticity" },
      { step: "Confirmation", description: "Asset is registered and protected" }
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
    ],
    stepsInfo: [
      { step: "Select Assets", description: "Choose which assets to distribute" },
      { step: "Assign Beneficiaries", description: "Drag & drop to assign assets" },
      { step: "Set Conditions", description: "Add time or event-based conditions" },
      { step: "Review & Finalize", description: "Visualize the complete plan" }
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
    ],
    stepsInfo: [
      { step: "Add Beneficiaries", description: "Enter contact details securely" },
      { step: "Set Access Levels", description: "Control what each person can view" },
      { step: "Schedule Notifications", description: "Set time or event triggers" },
      { step: "Manage Permissions", description: "Update access anytime" }
    ]
  }
];

const ParallaxFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [expandedInfoIndex, setExpandedInfoIndex] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showSteps, setShowSteps] = useState(false);
  
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
  
  const stepAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    }),
    exit: { opacity: 0, x: -20 }
  };
  
  const toggleInfo = (index: number) => {
    if (expandedInfoIndex === index) {
      setExpandedInfoIndex(null);
    } else {
      setExpandedInfoIndex(index);
    }
  };
  
  const handleShowSteps = () => {
    setShowSteps(true);
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
          {/* Feature Tabs */}
          <motion.div 
            className="flex items-center justify-center mb-10 overflow-x-auto pb-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  activeFeature === index
                    ? "bg-purple-500/20 text-white border border-purple-500/40"
                    : "bg-black/30 text-gray-400 border border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {feature.icon}
                <span className="whitespace-nowrap">{feature.title}</span>
              </motion.button>
            ))}
          </motion.div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className={`relative p-6 ${activeFeature === index ? 'order-first md:col-span-2' : 'md:col-span-1'}`}>
                <motion.div 
                  style={{ 
                    y: index === 0 ? y1 : index === 1 ? y2 : y3,
                    x: index === 0 ? x1 : index === 1 ? 0 : x2,
                    rotateZ: index === 0 ? rotate1 : index === 1 ? 0 : rotate2,
                    scale: activeFeature === index ? 1 : scale
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
                    className="absolute inset-0 z-20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeFeature === index || hoveredFeature === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-lg flex flex-col items-center">
                      <motion.div 
                        className="mb-2"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                      >
                        {feature.icon}
                      </motion.div>
                      <span className="text-base font-medium text-white">{feature.title}</span>
                      <button 
                        onClick={() => toggleInfo(index)} 
                        className="mt-2 text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                      >
                        Learn more <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Interactive visual elements */}
                  {activeFeature === index && (
                    <motion.div 
                      className="absolute inset-0 z-15 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg className="w-full h-full">
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r="30"
                          fill="none"
                          stroke="rgba(139, 92, 246, 0.3)"
                          strokeWidth="1"
                          initial={{ r: 10, opacity: 0 }}
                          animate={{ 
                            r: [10, 50, 10],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                        <motion.circle
                          cx="50%"
                          cy="50%"
                          r="20"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.3)"
                          strokeWidth="1"
                          initial={{ r: 10, opacity: 0 }}
                          animate={{ 
                            r: [10, 40, 10],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            delay: 0.5,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                      </svg>
                    </motion.div>
                  )}
                  
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
                  
                  {activeFeature === index && !showSteps && (
                    <motion.button
                      className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-md text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleShowSteps}
                    >
                      See how it works <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  )}
                  
                  {/* Steps visualization for active feature */}
                  {activeFeature === index && showSteps && (
                    <motion.div 
                      className="mt-8 bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="text-lg font-medium mb-4 text-white">How It Works</h4>
                      
                      <div className="relative">
                        {/* Connection line */}
                        <div className="absolute left-[18px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/80 to-blue-500/30"></div>
                        
                        {/* Steps */}
                        <div className="space-y-6">
                          {feature.stepsInfo.map((step, idx) => (
                            <motion.div 
                              key={idx}
                              className="flex gap-4 items-start relative"
                              custom={idx}
                              variants={stepAnimation}
                              initial="hidden"
                              animate="visible"
                            >
                              <motion.div 
                                className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm z-10"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {idx + 1}
                              </motion.div>
                              
                              <div className="pt-1">
                                <h5 className="font-medium text-white">{step.step}</h5>
                                <p className="text-sm text-gray-400">{step.description}</p>
                                
                                {/* Animated arrow */}
                                {idx < feature.stepsInfo.length - 1 && (
                                  <motion.div 
                                    className="absolute bottom-0 left-[18px] transform translate-y-[9px]"
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ 
                                      duration: 1.5, 
                                      repeat: Infinity,
                                      delay: idx * 0.2
                                    }}
                                  >
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                      <path d="M5 10L0.669872 0.5L9.33013 0.5L5 10Z" fill="rgba(139, 92, 246, 0.5)" />
                                    </svg>
                                  </motion.div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <motion.div 
                        className="mt-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <button 
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-md text-sm text-gray-300"
                          onClick={() => setShowSteps(false)}
                        >
                          Close
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
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
                          <motion.div 
                            className="h-8 w-2/3 rounded"
                            style={{
                              background: "linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.1))"
                            }}
                            animate={{
                              backgroundPosition: ["0% 0%", "100% 0%"],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse" 
                            }}
                          ></motion.div>
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
