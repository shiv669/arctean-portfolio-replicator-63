
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Olive Press Museum</h3>
            <p className="text-green-100 mb-6">
              Step back to 1860 and discover the art of traditional olive oil production 
              in our beautifully preserved historic museum.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/museum" className="text-green-100 hover:text-white transition-colors">
                  Museum
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-green-100 hover:text-white transition-colors">
                  Tours & Experiences
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-green-100 hover:text-white transition-colors">
                  Book a Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-green-100">Monday - Friday</span>
                <span>9:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-green-100">Saturday</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-green-100">Sunday</span>
                <span>Closed</span>
              </li>
              <li className="mt-4 text-green-100">
                <em>Closed on public holidays</em>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-300 mt-1" />
                <span className="text-green-100">123 Olive Grove Road, Mediterranean Hills, 28001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-300" />
                <span className="text-green-100">+34 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-300" />
                <span className="text-green-100">info@olivemuseum.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-6 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Olive Press Museum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
