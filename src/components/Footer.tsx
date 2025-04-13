
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="disclaimer" className="bg-black py-16 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-6">
            <div className="flex space-x-4 mb-6">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:border-white/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@arctean.com">info@arctean.com</a>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>Austin, Texas</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  {['Home', 'About Us', 'Philosophy', 'Investments', 'Disclaimers', 'Privacy Policy'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6 md:mb-0">
            <span className="bg-black text-white px-1 py-0.5">ARCTEAN</span>
          </div>
          
          <div className="text-xs text-gray-400">
            <p>© 2023 Arctean. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-black/30 border border-white/10 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Disclaimers</h3>
          <div className="text-sm text-gray-400 space-y-4">
            <p>
              This information is for informational purposes only and does not constitute an offer to sell or a solicitation to buy any securities.
            </p>
            <p>
              This site may contain forward-looking statements which are subject to risks and uncertainties. Actual results may differ materially from those projected.
            </p>
            <p>
              The fund is not registered under the Investment Company Act of 1940, and interests in the fund are exempt from registration under the Securities Act of 1933.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
