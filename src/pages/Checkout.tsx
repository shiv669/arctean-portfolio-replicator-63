
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, CalendarDays, CheckCircle } from "lucide-react";
import Navbar from "@/components/museum/Navbar";
import Footer from "@/components/museum/Footer";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  // Sample booking details (in a real app, this would come from a context/state)
  const bookingDetails = {
    date: "June 15, 2023",
    time: "11:00 AM",
    visitors: 4,
    totalCost: "€40.00",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-center mb-8"
          >
            {submitted ? "Booking Confirmed" : "Complete Your Booking"}
          </motion.h1>

          {!submitted ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Booking Summary */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-1 bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-900">Booking Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="text-green-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">{bookingDetails.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="text-green-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-medium">{bookingDetails.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="text-green-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Visitors</p>
                      <p className="font-medium">{bookingDetails.visitors}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Cost:</span>
                    <span className="font-bold text-xl text-green-700">{bookingDetails.totalCost}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Includes all taxes and fees</p>
                </div>
              </motion.div>
              
              {/* Visitor Information Form */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-2 bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-900">Visitor Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your email"
                    />
                    <p className="text-sm text-gray-500 mt-1">We'll send the confirmation to this email</p>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition-colors"
                    >
                      Complete Booking
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-700 p-3 rounded-full">
                  <CheckCircle size={48} />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Successfully Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for booking your visit to the Olive Press Museum. A confirmation email has been sent to {formData.email}.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Booking Details</h3>
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{bookingDetails.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{bookingDetails.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Visitors</p>
                    <p className="font-medium">{bookingDetails.visitors}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Cost</p>
                    <p className="font-medium">{bookingDetails.totalCost}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/"
                  className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Return to Homepage
                </Link>
                <button
                  onClick={() => window.print()}
                  className="border border-green-700 text-green-700 hover:bg-green-50 font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Print Confirmation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
