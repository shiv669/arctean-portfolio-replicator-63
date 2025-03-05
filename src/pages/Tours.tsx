
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/museum/Navbar";
import Footer from "@/components/museum/Footer";
import { Calendar, Clock, Users, ChevronRight } from "lucide-react";

const Tours = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-center mb-3"
          >
            Our Tours & Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Discover the fascinating world of traditional olive oil production through our immersive tours.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518548419970-58cd00f857af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Standard Museum Tour" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Standard Tour</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">€10</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Our most popular option takes you through the museum with a knowledgeable guide who will explain the history
                  and process of traditional olive oil production.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} className="text-green-600" />
                    <span className="text-sm">Duration: 60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={16} className="text-green-600" />
                    <span className="text-sm">Suitable for all ages</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-green-600" />
                    <span className="text-sm">Available daily at 10:00, 12:00, 14:00, 16:00</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-colors text-center"
                >
                  Book This Tour
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558611848-9a820cf7bc28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Premium Experience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Premium Experience</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">€15</span>
                </div>
                <p className="text-gray-700 mb-4">
                  An extended tour including a comprehensive olive oil tasting session where you'll learn 
                  to identify different qualities and flavor profiles.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} className="text-green-600" />
                    <span className="text-sm">Duration: 90 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={16} className="text-green-600" />
                    <span className="text-sm">Includes olive oil tasting</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-green-600" />
                    <span className="text-sm">Available daily at 11:00 and 15:00</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-colors text-center"
                >
                  Book This Tour
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="School Group Tours" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900">School Group</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">€7</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Educational tours specifically designed for school groups with interactive elements
                  and age-appropriate information about olive oil history.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} className="text-green-600" />
                    <span className="text-sm">Duration: 60-75 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={16} className="text-green-600" />
                    <span className="text-sm">Minimum 10 students, price per student</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} className="text-green-600" />
                    <span className="text-sm">Available weekdays, booking required</span>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition-colors text-center"
                >
                  Contact for Booking
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-green-50 rounded-lg p-8 border border-green-100 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-gray-900">Private & Custom Tours</h2>
            <p className="text-gray-700 mb-6">
              Looking for a more personalized experience? We offer private tours for families, 
              corporate events, and special occasions. Our team can customize the tour to suit your specific interests.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Inquire About Private Tours <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tours;
