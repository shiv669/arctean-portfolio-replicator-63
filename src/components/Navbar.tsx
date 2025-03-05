import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/5af96ee3-a533-4620-bfc9-3fdc4c84965d.png" alt="Olive Press Museum" className="h-12" />
            <span className="ml-2 font-display font-bold text-xl text-green-800">Olive Press Museum</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-green-800 hover:text-green-600 font-medium transition-colors"
            >
              Home
            </Link>
            <a 
              href="/#museum" 
              className="text-green-800 hover:text-green-600 font-medium transition-colors"
            >
              Museum
            </a>
            <a 
              href="/#process" 
              className="text-green-800 hover:text-green-600 font-medium transition-colors"
            >
              Process
            </a>
            <a 
              href="/#tours" 
              className="text-green-800 hover:text-green-600 font-medium transition-colors"
            >
              Tours
            </a>
            <a 
              href="/#testimonials" 
              className="text-green-800 hover:text-green-600 font-medium transition-colors"
            >
              Testimonials
            </a>
            <Link 
              to="/contact" 
              className="text-green-800 hover:text-green-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Book Now
            </Button>
          </nav>
          
          <button 
            className="md:hidden text-green-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-100">
          <div className="container-custom py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-green-800 hover:text-green-600 font-medium"
            >
              Home
            </Link>
            <a 
              href="/#museum" 
              className="block py-2 text-green-800 hover:text-green-600 font-medium"
            >
              Museum
            </a>
            <a 
              href="/#process" 
              className="block py-2 text-green-800 hover:text-green-600 font-medium"
            >
              Process
            </a>
            <a 
              href="/#tours" 
              className="block py-2 text-green-800 hover:text-green-600 font-medium"
            >
              Tours
            </a>
            <a 
              href="/#testimonials" 
              className="block py-2 text-green-800 hover:text-green-600 font-medium"
            >
              Testimonials
            </a>
            <Link 
              to="/contact" 
              className="block py-2 text-green-800 hover:text-green-600 font-medium"
            >
              Contact
            </Link>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
