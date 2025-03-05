
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const museumImages = [
  "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1591330709570-3e09fcc06495?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605437038954-d1d3f97c166c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1577372970039-2bf3cb56a3fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const MuseumPresentation = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === museumImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? museumImages.length - 1 : prev - 1));
  };

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h2 mb-4 text-gray-900"
          >
            Our Historic Museum
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-green-600 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            Established in 1860, our olive press museum preserves the traditional techniques 
            of olive oil production. It stands as a testimony to the agricultural heritage 
            and the importance of olive oil in Mediterranean culture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0">
              <motion.img
                key={currentImage}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                src={museumImages[currentImage]}
                alt="Museum Gallery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button 
                onClick={prevImage} 
                className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage} 
                className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Pagination dots */}
            <div className="absolute bottom-4 left-4 flex gap-1.5">
              {museumImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index ? "bg-white scale-125" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Historical Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900">A Legacy of Tradition</h3>
            <p className="text-gray-600">
              Our museum houses one of the best-preserved traditional olive oil presses in the region. 
              The massive stone wheels, wooden presses, and original tools offer a glimpse into 
              the arduous process of olive oil extraction before the advent of modern technology.
            </p>
            <p className="text-gray-600">
              The building itself, with its characteristic architecture, has been carefully 
              restored to maintain its historical authenticity while providing visitors with 
              a comfortable and educational experience.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-display font-bold text-gray-900 mb-4">Available Tours</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-700 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">Guided Tour</span>
                    <p className="text-sm text-gray-600">A comprehensive 1-hour walk through the history of olive oil production.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-700 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">Tasting Experience</span>
                    <p className="text-sm text-gray-600">Sample various grades of olive oil and learn about their characteristics.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-700 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">Live Demonstration</span>
                    <p className="text-sm text-gray-600">Watch as our experts demonstrate the traditional olive pressing process.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MuseumPresentation;
