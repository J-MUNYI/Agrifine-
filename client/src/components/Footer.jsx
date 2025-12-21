import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brown-800 dark:bg-gray-900 text-white mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Agrifine Consulting</h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              Connecting Kenyan Farmers to the World — Premium Coffee & Horticultural Exports, Sustainably Sourced.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 dark:text-gray-400 hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li>
                <span className="block">📍 Old Mutual Building</span>
                <span className="block">Kimathi Street, Nairobi</span>
                <span className="block">1799-00100, Kenya</span>
              </li>
              <li>
                📞 <a href="tel:+254721329314/+254722446735" className="hover:text-green-400">0721329314/0722446735</a>
              </li>
              <li>
                📧 <a href="mailto:info@agrifineconsulting.com" className="hover:text-green-400">
                  info@agrifineconsulting.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social/Additional */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-300 dark:text-gray-400 text-sm mb-4">
              Stay connected with us for updates on sustainable agriculture and premium exports.
            </p>
            <div className="flex space-x-4">
              {/* Add social media icons here if needed */}
            </div>
          </div>
        </div>

        <div className="border-t border-brown-700 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Agrifine Consulting Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

