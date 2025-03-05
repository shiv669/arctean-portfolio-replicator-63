
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/29c9a2ab-6227-4db5-be3a-b2266c33d8f3.png" 
            alt="Olive Mill Logo" 
            className="h-16 w-16 object-contain"
          />
          <h1 className="ml-3 text-2xl font-display font-bold text-green-700 hidden sm:block">
            Olive Mill <span className="text-gray-500">Museum</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-800 hover:text-green-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            to="/museum" 
            className="text-gray-800 hover:text-green-600 transition-colors font-medium"
          >
            Museum
          </Link>
          <Link 
            to="/tours" 
            className="text-gray-800 hover:text-green-600 transition-colors font-medium"
          >
            Tours
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-800 hover:text-green-600 transition-colors font-medium"
          >
            Contact
          </Link>
          <Link 
            to="/checkout" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-md transition-colors"
          >
            Book Visit
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
        >
          <div className="container-custom py-6 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/museum" 
              className="text-gray-800 hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Museum
            </Link>
            <Link 
              to="/tours" 
              className="text-gray-800 hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tours
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-green-600 py-2 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/checkout" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-md transition-colors inline-block w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Visit
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
