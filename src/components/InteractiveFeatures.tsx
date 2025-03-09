
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
    preview: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'typescript',
      fileName: 'secure-vault.ts',
      content: [
        '// AES-256 Encryption Implementation',
        'export class SecureVault {',
        '  private encryptionKey: CryptoKey;',
        '',
        '  async encrypt(data: Asset): Promise<EncryptedAsset> {',
        '    const iv = crypto.getRandomValues(new Uint8Array(16));',
        '    const encrypted = await crypto.subtle.encrypt(',
        '      { name: "AES-GCM", iv },',
        '      this.encryptionKey,',
        '      new TextEncoder().encode(JSON.stringify(data))',
        '    );',
        '    return { data: encrypted, iv, signature: await this.sign(data) };',
        '  }',
        '}'
      ]
    }
  },
  {
    id: 'fraud-prevention',
    title: 'Advanced Fraud Prevention',
    description: 'Our proprietary Asset DNA™ technology creates a unique signature for each asset that makes forgery virtually impossible.',
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    color: 'from-blue-500/20 to-purple-500/10',
    preview: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'typescript',
      fileName: 'asset-dna.ts',
      content: [
        '// Asset DNA Generation Algorithm',
        'export class AssetDNA {',
        '  generateFingerprint(asset: Asset): string {',
        '    const dataPoints = [',
        '      asset.metadata,',
        '      asset.transactionHistory,',
        '      asset.ownershipRecords',
        '    ];',
        '    ',
        '    return this.hashingFunction(',
        '      this.combineDataPoints(dataPoints)',
        '    );',
        '  }',
        '}'
      ]
    }
  },
  {
    id: 'blockchain-integration',
    title: 'Blockchain Integration',
    description: 'Assets are verified and recorded on multiple blockchain networks, creating an immutable record of ownership that stands up to legal scrutiny.',
    icon: <Database className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-500/20 to-indigo-500/10',
    preview: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'solidity',
      fileName: 'AssetRegistry.sol',
      content: [
        '// SPDX-License-Identifier: MIT',
        'pragma solidity ^0.8.0;',
        '',
        'contract AssetRegistry {',
        '    mapping(bytes32 => Asset) private assets;',
        '    ',
        '    function registerAsset(',
        '        bytes32 dnaFingerprint,',
        '        address owner',
        '    ) public returns (bool) {',
        '        assets[dnaFingerprint] = Asset({',
        '            owner: owner,',
        '            timestamp: block.timestamp,',
        '            verified: true',
        '        });',
        '        emit AssetRegistered(dnaFingerprint, owner);',
        '        return true;',
        '    }',
        '}'
      ]
    }
  },
  {
    id: 'smart-inheritance',
    title: 'Smart Inheritance System',
    description: 'Define rules for asset transfer that execute automatically under conditions you set, ensuring your wealth passes to the right hands.',
    icon: <Link className="w-6 h-6 text-purple-400" />,
    color: 'from-indigo-500/20 to-purple-500/10',
    preview: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    code: {
      language: 'typescript',
      fileName: 'inheritance-rules.ts',
      content: [
        '// Smart Inheritance Rules Engine',
        'export class InheritanceRules {',
        '  createRule(options: {',
        '    assets: Asset[],',
        '    beneficiaries: Person[],',
        '    conditions: Condition[],',
        '    timelock?: number',
        '  }) {',
        '    return new SmartRule({',
        '      ...options,',
        '      executionTrigger: this.buildTriggerFromConditions(',
        '        options.conditions',
        '      ),',
        '      verification: this.createMultiSigVerification(',
        '        options.beneficiaries',
        '      )',
        '    });',
        '  }',
        '}'
      ]
    }
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
                                      <span className="text-purple-400">{line.split(' ')[0]}</span>
                                      <span className="text-white"> {line.split(' ').slice(1).join(' ')}</span>
                                    </>
                                  ) : line.includes('export') ? (
                                    <>
                                      <span className="text-blue-400">{line.split(' ')[0]}</span>
                                      <span className="text-purple-400"> {line.split(' ')[1]}</span>
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
                              className="text-xs bg-purple-500/50 text-white px-3 py-1 rounded hover:bg-purple-500/80 transition-colors font-mono"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Execute {feature.id === 'blockchain-integration' ? 'Contract' : 'Function'}
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

