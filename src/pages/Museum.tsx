
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/museum/Navbar";
import Footer from "@/components/museum/Footer";
import { ArrowRight, ChevronRight, Info, Clock, Users } from "lucide-react";

const Museum = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 relative min-h-[70vh] flex items-center bg-green-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618983558534-99e9300f42a9?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Historic olive press machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <h1 className="h1 mb-4">Our Historic Olive Press</h1>
            <p className="text-xl mb-8 text-white/90">
              Step back in time and explore our beautifully preserved olive press from 1860, 
              showcasing traditional methods of olive oil production that have been used for generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/checkout" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                Book A Visit <ChevronRight size={16} />
              </Link>
              <a 
                href="#exhibits" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium px-6 py-3 rounded-md transition-colors"
              >
                View Exhibits
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Museum Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                A Journey Through Olive Oil History
              </h2>
              <p className="text-gray-700 mb-4">
                The Olive Mill Museum showcases the traditional methods of olive oil production 
                that have been the cornerstone of Mediterranean culture for centuries. Our preserved 
                1860 mill demonstrates the entire process from olive to oil.
              </p>
              <p className="text-gray-700 mb-6">
                Each visit offers an immersive experience into the cultural and historical significance 
                of olive oil production, with demonstrations of traditional equipment and techniques.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-green-100 text-green-600 rounded-full">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Opening Hours</h3>
                    <p className="text-sm text-gray-600">
                      Monday - Saturday: 9:00 - 17:00<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-green-100 text-green-600 rounded-full">
                    <Info size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Guided Tours</h3>
                    <p className="text-sm text-gray-600">
                      Available daily at 10:00, 12:00, 14:00, and 16:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1639152361436-d5d5bd1d1db8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Historic olive press" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1597497279158-aca0a367fa84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Olive oil bottles" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1558022094-d3ff7d45a86a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Freshly harvested olives" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1593462433300-6504d6f16531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Olive tree" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Exhibits Section */}
      <section id="exhibits" className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">Our Exhibits</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our collection of preserved equipment and learn about traditional olive oil production methods.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602185682740-8684e3c4c8b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Original Stone Mill" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Original Stone Mill</h3>
                <p className="text-gray-700 mb-4">
                  The heart of our museum, this 19th-century stone mill was used to crush olives into paste,
                  the first step in traditional oil extraction.
                </p>
                <a 
                  href="#" 
                  className="text-green-600 font-medium flex items-center gap-1 hover:text-green-700 transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600692957860-536fa617e3f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Pressing Equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Pressing Equipment</h3>
                <p className="text-gray-700 mb-4">
                  Explore our collection of traditional pressing equipment used to extract oil from olive paste
                  through centuries-old techniques.
                </p>
                <a 
                  href="#" 
                  className="text-green-600 font-medium flex items-center gap-1 hover:text-green-700 transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Vintage Containers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Vintage Containers</h3>
                <p className="text-gray-700 mb-4">
                  View our collection of historical vessels used for storing and transporting olive oil,
                  from ancient amphorae to 19th-century tins.
                </p>
                <a 
                  href="#" 
                  className="text-green-600 font-medium flex items-center gap-1 hover:text-green-700 transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link 
              to="/checkout" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Book Your Museum Visit <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Tour Information */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Guided Tours & Experiences</h2>
              <p className="text-white/90 mb-4">
                Our knowledgeable guides bring the history of olive oil production to life with engaging
                tours that cover the entire process from harvesting to bottling.
              </p>
              <p className="text-white/90 mb-6">
                Each tour includes a tasting session where you'll learn to identify different qualities
                and characteristics of authentic extra virgin olive oil.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-md">
                  <Users size={24} />
                  <div>
                    <h3 className="font-medium">Standard Tour</h3>
                    <p className="text-sm text-white/80">
                      60 minutes, includes museum tour and basic tasting
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-md">
                  <Users size={24} />
                  <div>
                    <h3 className="font-medium">Premium Experience</h3>
                    <p className="text-sm text-white/80">
                      90 minutes, includes extended tour, comprehensive tasting, and gift shop discount
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-md">
                  <Users size={24} />
                  <div>
                    <h3 className="font-medium">School Groups</h3>
                    <p className="text-sm text-white/80">
                      Customized educational experiences for students of all ages
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-6 bg-green-800 text-white">
                <h3 className="text-xl font-bold">Book Your Experience</h3>
                <p className="text-white/80">Select a tour type and schedule your visit</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Tour Type</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800">
                    <option>Standard Tour (€10 per person)</option>
                    <option>Premium Experience (€15 per person)</option>
                    <option>School Group (€7 per student)</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Select Date</label>
                  <input 
                    type="date" 
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">Select Time</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800">
                    <option>10:00 AM</option>
                    <option>12:00 PM</option>
                    <option>2:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
                
                <div className="mt-6">
                  <Link 
                    to="/checkout" 
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition-colors text-center"
                  >
                    Continue to Booking
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Museum;
