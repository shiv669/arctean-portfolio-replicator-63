
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const [loadingState, setLoadingState] = useState('••##••');
  
  useEffect(() => {
    if (!isLoading) return;
    
    const states = [
      '••##••',
      '•##•••',
      '##••••',
      '#••••#',
      '••••##',
      '•••##•'
    ];
    
    let currentIndex = 0;
    // Fast animation (100ms) for a snappy loading effect
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % states.length;
      setLoadingState(states[currentIndex]);
    }, 100);
    
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Arctean</h1>
            <p className="text-lg text-gray-300 font-mono tracking-widest">{loadingState}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
