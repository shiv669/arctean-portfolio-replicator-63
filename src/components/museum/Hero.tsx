
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-green-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1633504584634-325a61013b3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Historic Olive Press Museum"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      <div className="container-custom relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-20">
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white w-full lg:w-1/2"
        >
          <h1 className="h1 mb-4 text-white">
            Experience The Historic<br />
            <span className="text-green-300">Olive Press</span> Museum
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-xl">
            Step back to 1860 and discover the art of traditional olive oil production 
            in our beautifully preserved historic museum.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/checkout" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center gap-2"
            >
              Book Your Visit <ChevronRight size={16} />
            </Link>
            <Link
              to="/museum"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium px-6 py-3 rounded-md transition-colors"
            >
              Explore Museum
            </Link>
          </div>
        </motion.div>

        {/* Booking Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-5/12 bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-6 bg-green-700 text-white">
            <h2 className="text-xl font-bold">Book Your Visit</h2>
            <p className="text-white/80">Select a date, time and number of visitors</p>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Select Date</label>
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Select Time</label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>9:00 AM</option>
                <option>11:00 AM</option>
                <option>1:00 PM</option>
                <option>3:00 PM</option>
                <option>5:00 PM</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Number of Visitors</label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>1-5 people (€10 per person)</option>
                <option>6-10 people (€8 per person)</option>
                <option>11-20 people (€7 per person)</option>
                <option>21-30 people (€6 per person)</option>
              </select>
            </div>
            
            <div className="mt-6">
              <Link 
                to="/checkout" 
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition-colors text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
