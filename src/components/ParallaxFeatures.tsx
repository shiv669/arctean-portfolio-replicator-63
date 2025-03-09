
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BarChart, LineChart, TrendingUp, ChevronRight, AreaChart, PieChart } from 'lucide-react';

// Expanded to 5 features as requested
const features = [
  {
    id: 1,
    title: "Value Investment Analysis",
    description: "Our intuitive dashboard makes analyzing investments simple. Quickly review financial statements, insider purchases, and economic factors to identify undervalued assets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-sandgrey-500/20 to-sandgrey-600/20",
    icon: <LineChart className="w-8 h-8 text-sandgrey-400" />,
    details: [
      "Financial statement analysis",
      "Market trend recognition",
      "Insider activity monitoring",
      "Economic factor assessment"
    ],
    stepsInfo: [
      { step: "Financial Review", description: "Analyze financial statements & ratios" },
      { step: "Determine Value", description: "Calculate intrinsic value" },
      { step: "Compare to Market", description: "Identify price to value discrepancies" },
      { step: "Investment Decision", description: "Execute based on value metrics" }
    ]
  },
  {
    id: 2,
    title: "Quantitative Modeling",
    description: "Our advanced quantitative models analyze large datasets to identify patterns and opportunities that complement our fundamental value investing approach.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-sandgrey-600/20 to-sandgrey-500/20",
    icon: <TrendingUp className="w-8 h-8 text-sandgrey-400" />,
    details: [
      "Pattern recognition algorithms",
      "Data-driven insights",
      "Market anomaly detection",
      "Risk-adjusted returns optimization"
    ],
    stepsInfo: [
      { step: "Data Collection", description: "Gather market & economic data" },
      { step: "Model Processing", description: "Run proprietary algorithms" },
      { step: "Signal Generation", description: "Identify statistical opportunities" },
      { step: "Integration", description: "Combine with value approach" }
    ]
  },
  {
    id: 3,
    title: "Portfolio Optimization",
    description: "Our sophisticated portfolio construction methodology optimizes asset allocation to maximize returns while adhering to your risk tolerance and investment parameters.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-sandgrey-500/20 to-sandgrey-700/20",
    icon: <BarChart className="w-8 h-8 text-sandgrey-400" />,
    details: [
      "Risk-return optimization",
      "Correlation analysis",
      "Liquidity management",
      "Diversification strategy"
    ],
    stepsInfo: [
      { step: "Risk Assessment", description: "Determine optimal risk exposure" },
      { step: "Asset Selection", description: "Choose securities based on analysis" },
      { step: "Weight Allocation", description: "Set position sizes by opportunity" },
      { step: "Rebalance", description: "Monitor and adjust as needed" }
    ]
  },
  {
    id: 4,
    title: "Performance Analytics",
    description: "Track your portfolio's performance against various benchmarks. Our analytics suite provides real-time insights into your investment returns and risk metrics.",
    image: "https://images.unsplash.com/photo-1630569470960-ec1e8c034370?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-sandgrey-600/20 to-sandgrey-500/20",
    icon: <AreaChart className="w-8 h-8 text-sandgrey-400" />,
    details: [
      "Benchmark comparison",
      "Return attribution analysis",
      "Risk factor exposure",
      "Performance reporting"
    ],
    stepsInfo: [
      { step: "Data Aggregation", description: "Collect portfolio data" },
      { step: "Performance Calculation", description: "Calculate time-weighted returns" },
      { step: "Attribution Analysis", description: "Identify performance drivers" },
      { step: "Reporting", description: "Generate comprehensive reports" }
    ]
  },
  {
    id: 5,
    title: "Strategic Asset Allocation",
    description: "Develop a long-term investment strategy based on your financial goals. Our strategic approach balances risk and return across multiple asset classes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-sandgrey-500/20 to-sandgrey-600/20",
    icon: <PieChart className="w-8 h-8 text-sandgrey-400" />,
    details: [
      "Long-term planning",
      "Asset class selection",
      "Economic cycle positioning",
      "Tax-efficient investing"
    ],
    stepsInfo: [
      { step: "Goal Setting", description: "Define investment objectives" },
      { step: "Asset Class Selection", description: "Choose appropriate asset classes" },
      { step: "Allocation Design", description: "Set target portfolio weights" },
      { step: "Implementation", description: "Execute the investment strategy" }
    ]
  }
];

const ParallaxFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showSteps, setShowSteps] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
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
  
  const handleShowSteps = () => {
    setShowSteps(true);
  };
  
  const handleShowLearnMore = (id: number) => {
    setShowLearnMore(id);
  };
  
  const handleCloseModal = () => {
    setShowSteps(false);
    setShowLearnMore(null);
  };
  
  // Get the active feature data
  const currentFeature = features[activeFeature];
  
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(187, 187, 169, 0.15) 0%, rgba(0, 0, 0, 0) 50%)"
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
            className="absolute w-1 h-1 rounded-full bg-sandgrey-500/30"
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
          <h2 className="text-3xl md:text-4xl font-display mb-4">Intelligent Investment Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kapital LLC combines fundamental value analysis with quantitative models to deliver exceptional returns for our investors.
          </p>
        </motion.div>
        
        <div ref={containerRef} className="relative">
          {/* Feature Tabs */}
          <motion.div 
            className="flex flex-wrap items-center justify-center mb-10 overflow-x-auto pb-4 gap-4 md:gap-6"
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
                    ? "bg-sandgrey-500/20 text-white border border-sandgrey-500/40"
                    : "bg-black/30 text-gray-400 border border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => {
                  setActiveFeature(index);
                  setShowSteps(false);
                  setShowLearnMore(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {feature.icon}
                <span className="whitespace-nowrap">{feature.title}</span>
              </motion.button>
            ))}
          </motion.div>
        
          <AnimatePresence mode="wait">
            <motion.div 
              key={`feature-${activeFeature}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:col-span-7 order-2 lg:order-1">
                <motion.div 
                  style={{ y: y1 }}
                  className="mb-6 rounded-lg overflow-hidden aspect-video relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentFeature.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10`}></div>
                  
                  <motion.img 
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 z-20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-lg flex flex-col items-center">
                      <motion.div 
                        className="mb-2"
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                      >
                        {currentFeature.icon}
                      </motion.div>
                      <span className="text-base font-medium text-white">{currentFeature.title}</span>
                      <button 
                        onClick={() => handleShowLearnMore(currentFeature.id)} 
                        className="mt-2 text-xs text-sandgrey-400 hover:text-sandgrey-300 transition-colors flex items-center gap-1"
                      >
                        Learn more <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Tech circuit lines animation */}
                  <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                    <motion.path 
                      d={`M 0 ${Math.random() * 50 + 50} Q ${Math.random() * 200 + 100} ${Math.random() * 100} ${Math.random() * 200 + 200} ${Math.random() * 50 + 50}`}
                      stroke="rgba(187, 187, 169, 0.5)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                    />
                    <motion.path 
                      d={`M ${Math.random() * 100 + 200} 0 Q ${Math.random() * 200 + 100} ${Math.random() * 100 + 50} ${Math.random() * 100} ${Math.random() * 50 + 100}`}
                      stroke="rgba(163, 163, 148, 0.5)"
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
                  <h3 className="text-xl md:text-2xl font-display mb-3">{currentFeature.title}</h3>
                  <p className="text-gray-400">
                    {currentFeature.description}
                  </p>
                  
                  {/* Feature highlights */}
                  <ul className="mt-4 space-y-2">
                    {currentFeature.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sandgrey-500"></div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className="mt-6 bg-gradient-to-r from-sandgrey-600 to-sandgrey-700 px-4 py-2 rounded-md text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleShowSteps}
                  >
                    See how it works <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                <motion.div
                  style={{ 
                    y: y2,
                    scale
                  }}
                  className="grid grid-cols-1 gap-4"
                >
                  <motion.div className="rounded-lg overflow-hidden aspect-video relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-sandgrey-600/20 to-sandgrey-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                    <motion.img 
                      src={`https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80`}
                      alt="Investment Team"
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    style={{ y: y3 }}
                    className="rounded-lg overflow-hidden aspect-video relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sandgrey-500/20 to-sandgrey-700/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                    <motion.img 
                      src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80`}
                      alt="Data Analysis"
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Bottom glowing effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(187, 187, 169, 0.15), rgba(0, 0, 0, 0) 70%)"
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
        </div>
      </div>
      
      {/* How it works modal - Separate section that doesn't overlap with other content */}
      <AnimatePresence>
        {showSteps && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div 
              className="bg-black/90 border border-sandgrey-500/20 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  {currentFeature.icon}
                  <span>{currentFeature.title}: How It Works</span>
                </h3>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="relative">
                {/* Connection line */}
                <div className="absolute left-[18px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-sandgrey-500/80 to-sandgrey-600/30"></div>
                
                {/* Steps */}
                <div className="space-y-8">
                  {currentFeature.stepsInfo.map((step, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex gap-4 items-start relative"
                      custom={idx}
                      variants={stepAnimation}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div 
                        className="w-9 h-9 rounded-full bg-gradient-to-br from-sandgrey-500 to-sandgrey-700 flex items-center justify-center text-white font-medium text-sm z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {idx + 1}
                      </motion.div>
                      
                      <div className="pt-1 flex-1">
                        <h5 className="font-medium text-white text-lg">{step.step}</h5>
                        <p className="text-gray-400">{step.description}</p>
                        
                        {/* Illustrative content for each step */}
                        <div className="mt-3 bg-white/5 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sandgrey-600/50 to-sandgrey-700/50 flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div className="text-sm text-gray-300">
                              Kapital LLC's proprietary {step.step.toLowerCase()} process ensures optimal investment outcomes
                            </div>
                          </div>
                        </div>
                        
                        {/* Animated arrow */}
                        {idx < currentFeature.stepsInfo.length - 1 && (
                          <motion.div 
                            className="absolute bottom-0 left-[18px] transform translate-y-[20px]"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              delay: idx * 0.2
                            }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M5 10L0.669872 0.5L9.33013 0.5L5 10Z" fill="rgba(187, 187, 169, 0.5)" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="mt-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button 
                  className="px-6 py-2 bg-sandgrey-600/40 hover:bg-sandgrey-600/60 transition-colors rounded-md text-white"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Learn more modal - Separate section */}
      <AnimatePresence>
        {showLearnMore !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div 
              className="bg-black/90 border border-sandgrey-500/20 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  {currentFeature.icon}
                  <span>About {currentFeature.title}</span>
                </h3>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentFeature.color} opacity-50 z-10`}></div>
                  <img 
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Overview</h4>
                  <p className="text-gray-300">
                    {currentFeature.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentFeature.details.map((detail, i) => (
                      <motion.div 
                        key={i}
                        className="bg-white/5 rounded p-3 flex items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <div className="w-6 h-6 rounded-full bg-sandgrey-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-sandgrey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Benefits</h4>
                  <p className="text-gray-300">
                    Kapital LLC's {currentFeature.title.toLowerCase()} approach provides clients with exceptional insights
                    and investment opportunities. Our team of experienced professionals utilizes cutting-edge technology
                    and proven methodologies to identify undervalued assets and optimize portfolio performance.
                  </p>
                </div>
                
                <motion.div 
                  className="mt-10 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button 
                    className="px-6 py-2 bg-sandgrey-600/40 hover:bg-sandgrey-600/60 transition-colors rounded-md text-white"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ParallaxFeatures;
