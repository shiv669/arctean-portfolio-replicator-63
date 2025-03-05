
import { Mail, Phone, MapPin, Clock, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-800 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Olive Press Museum</h3>
            <p className="text-green-100 mb-6">
              Step back in time and discover the traditional methods of olive oil production at our beautifully preserved 19th century museum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Visit Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Visit Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-green-100">
                  123 Countryside Road<br />
                  Olive Village, OV 12345<br />
                  Greece
                </span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-green-100">
                  Open daily: 9:00 AM - 5:00 PM<br />
                  Closed on Mondays
                </span>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <a href="tel:+301234567890" className="text-green-100 hover:text-white">
                  +30 123 456 7890
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@olivemuseum.com" className="text-green-100 hover:text-white">
                  info@olivemuseum.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="text-white hover:text-green-200 underline">
                Send us a message
              </Link>
            </div>
          </div>
          
          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#museum" className="text-green-100 hover:text-white transition-colors">
                  About the Museum
                </a>
              </li>
              <li>
                <a href="/#tours" className="text-green-100 hover:text-white transition-colors">
                  Tours & Experiences
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-green-100 hover:text-white transition-colors">
                  Visitor Testimonials
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; {currentYear} Olive Press Museum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
