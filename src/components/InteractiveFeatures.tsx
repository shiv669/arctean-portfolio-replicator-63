import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { LockIcon, ShieldCheck, Database, TrendingUp } from 'lucide-react';

const features = [
  {
    id: 'value-investing',
    title: 'Value Investing Approach',
    description: 'Our disciplined application of fundamental analysis reviews financial statements and observable information to identify undervalued securities.',
    icon: <TrendingUp className="w-6 h-6 text-sandgrey-600" />,
    color: 'from-sandgrey-500/20 to-sandgrey-600/10',
    preview: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'typescript',
      fileName: 'value-analyzer.ts',
      content: [
        '// Value Investing Analysis Implementation',
        'export class ValueAnalyzer {',
        '  private economicFactors: EconomicData;',
        '',
        '  async analyzeFinancials(company: Company): Promise<ValueAssessment> {',
        '    const fundamentals = await this.getFundamentalData(company);',
        '    const insiderActivity = await this.getInsiderTransactions(company);',
        '    const marketSentiment = this.calculateMarketSentiment();',
        '',
        '    return {',
        '      intrinsicValue: this.calculateIntrinsicValue(fundamentals),',
        '      upside: this.calculateUpside(fundamentals, company.currentPrice),',
        '      riskAssessment: this.assessRisk(fundamentals, insiderActivity)',
        '    };',
        '  }',
        '}'
      ]
    }
  },
  {
    id: 'quantitative-models',
    title: 'Quantitative Models',
    description: 'Our advanced quantitative models analyze large datasets to identify patterns and opportunities that complement our fundamental approach.',
    icon: <Database className="w-6 h-6 text-sandgrey-600" />,
    color: 'from-sandgrey-600/20 to-sandgrey-500/10',
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'typescript',
      fileName: 'quantitative-model.ts',
      content: [
        '// Quantitative Analysis Engine',
        'export class QuantitativeEngine {',
        '  private historicalData: MarketData[];',
        '  private machineLearningSuite: MLSuite;',
        '',
        '  analyzeMarketPatterns(): PatternResult[] {',
        '    const patterns = [',
        '      this.volatilityAnalysis(),',
        '      this.momentumSignals(),',
        '      this.correlationMatrix()',
        '    ];',
        '    ',
        '    return this.rankBySignificance(',
        '      this.filterValidPatterns(patterns)',
        '    );',
        '  }',
        '}'
      ]
    }
  },
  {
    id: 'diverse-securities',
    title: 'Diverse Securities Focus',
    description: 'We analyze a broad range of investable securities, focusing on relatively liquid assets that offer potential for significant returns.',
    icon: <ShieldCheck className="w-6 h-6 text-sandgrey-600" />,
    color: 'from-sandgrey-500/20 to-sandgrey-700/10',
    preview: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'typescript',
      fileName: 'asset-diversification.ts',
      content: [
        '// Securities Diversification Strategy',
        'export class DiversificationStrategy {',
        '  private securityTypes = [',
        '    "Equities",',
        '    "Fixed Income",',
        '    "Options",',
        '    "Futures",',
        '    "Alternative Investments"',
        '  ];',
        '',
        '  optimizePortfolio(assets: Asset[], riskTolerance: number): Portfolio {',
        '    const allocations = this.calculateOptimalAllocations(assets, riskTolerance);',
        '    const expectedReturn = this.calculateExpectedReturn(allocations);',
        '    const riskProfile = this.assessRiskProfile(allocations);',
        '',
        '    return { allocations, expectedReturn, riskProfile };',
        '  }',
        '}'
      ]
    }
  },
  {
    id: 'market-recognition',
    title: 'Market Recognition',
    description: 'We generate profits when the value of our carefully selected investments is subsequently recognized by other market participants.',
    icon: <LockIcon className="w-6 h-6 text-sandgrey-600" />,
    color: 'from-sandgrey-700/20 to-sandgrey-500/10',
    preview: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'typescript',
      fileName: 'market-timing.ts',
      content: [
        '// Market Recognition Timing Strategy',
        'export class MarketTimingStrategy {',
        '  identifyTriggerEvents(security: Security): Event[] {',
        '    return [',
        '      ...this.earningsReports(security),',
        '      ...this.analystCoverageChanges(security),',
        '      ...this.regulatoryApprovals(security),',
        '      ...this.marketSentimentShifts(security)',
        '    ].filter(event => this.calculateSignificance(event) > this.threshold);',
        '  }',
        '',
        '  predictRecognitionWindow(events: Event[]): TimeWindow {',
        '    const projections = events.map(e => this.projectImpact(e));',
        '    return this.aggregateTimeframes(projections);',
        '  }',
        '}'
      ]
    }
  }
];

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

const typingAnimation = {
  hidden: { width: "0%" },
  visible: (i: number) => ({
    width: "100%",
    transition: { 
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeInOut"
    }
  })
};

const cursorBlink = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 1
    }
  }
};

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('value-investing');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, 30]);
  
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
          <h2 className="text-3xl md:text-4xl font-display mb-4">Investment Philosophy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arctean leverages a disciplined approach to value investing combined with advanced quantitative models to deliver exceptional returns.
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
                      className="absolute inset-0 bg-gradient-to-r from-sandgrey-500/10 to-sandgrey-600/5 rounded-lg"
                      layoutId="highlight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div 
                      className="w-10 h-10 bg-sandgrey-800/30 flex items-center justify-center rounded-full flex-shrink-0"
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
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(187,187,169,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
                      
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
                          className="w-full max-w-md bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-xl overflow-hidden"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
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
                            </div>
                            
                            <div className="text-xs text-gray-400 font-mono">
                              {feature.code.fileName}
                            </div>
                          </div>
                          
                          <div className="font-mono text-xs sm:text-sm space-y-1 overflow-hidden">
                            {feature.code.content.map((line, i) => (
                              <div key={i} className="flex">
                                <div className="text-gray-500 w-6 flex-shrink-0 text-right mr-2">
                                  {i + 1}
                                </div>
                                <motion.div 
                                  className="text-gray-300 overflow-hidden whitespace-nowrap relative"
                                  custom={i}
                                  variants={typingAnimation}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  {line.includes('//') ? (
                                    <>
                                      <span className="text-green-400">{line}</span>
                                    </>
                                  ) : line.includes('class') || line.includes('function') || line.includes('contract') ? (
                                    <>
                                      <span className="text-sandgrey-400">{line.split(' ')[0]}</span>
                                      <span className="text-white"> {line.split(' ').slice(1).join(' ')}</span>
                                    </>
                                  ) : line.includes('export') ? (
                                    <>
                                      <span className="text-blue-400">{line.split(' ')[0]}</span>
                                      <span className="text-sandgrey-400"> {line.split(' ')[1]}</span>
                                      <span className="text-white"> {line.split(' ').slice(2).join(' ')}</span>
                                    </>
                                  ) : line.includes('return') ? (
                                    <>
                                      <span className="text-red-400">return</span>
                                      <span className="text-white">{line.slice(6)}</span>
                                    </>
                                  ) : line.includes('await') ? (
                                    <>
                                      <span className="text-yellow-300">{line}</span>
                                    </>
                                  ) : line.includes('private') || line.includes('public') ? (
                                    <>
                                      <span className="text-blue-400">{line.split(' ')[0]}</span>
                                      <span className="text-white"> {line.split(' ').slice(1).join(' ')}</span>
                                    </>
                                  ) : (
                                    <span>{line}</span>
                                  )}
                                </motion.div>
                              </div>
                            ))}
                            
                            <div className="h-4 relative">
                              <motion.div 
                                className="absolute left-0 top-0 w-2 h-4 bg-white"
                                variants={cursorBlink}
                                initial="hidden"
                                animate="visible"
                              ></motion.div>
                            </div>
                          </div>
                          
                          <motion.div className="mt-4 flex justify-end">
                            <motion.button
                              className="text-xs bg-sandgrey-600/50 text-white px-3 py-1 rounded hover:bg-sandgrey-600/80 transition-colors font-mono"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Execute Function
                            </motion.button>
                          </motion.div>
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
