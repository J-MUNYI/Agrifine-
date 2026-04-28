import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  const products = ['Coffee', 'Tea', 'Hass Avocados', 'Macadamia Nuts'];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Green accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-green-500 via-green-400 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-7 h-7 text-green-400" viewBox="0 0 32 32" fill="none">
                <path d="M16 3C10 3 5 8 5 14c0 4.5 2.5 8.4 6.2 10.4L16 29l4.8-4.6C24.5 22.4 27 18.5 27 14c0-6-5-11-11-11z" fill="currentColor" opacity="0.2" />
                <path d="M16 6c-3 0-7 3-7 8m7-8c3 0 7 3 7 8M16 6v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 22l-4 4M16 22l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <div>
                <span className="font-extrabold text-white text-lg">Agrifine</span>
                <span className="text-green-400 font-semibold text-sm ml-1">Consulting</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting Kenyan Farmers to the World — Premium Coffee & Horticultural Exports, Sustainably Sourced.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Products</h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}>
                  <Link
                    to="/products"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="text-green-400 mt-0.5">📍</span>
                <span>
                  Old Mutual Building, Kimathi Street,<br />
                  Nairobi 1799-00100, Kenya
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">📞</span>
                <a href="tel:+254721329314" className="hover:text-green-400 transition-colors">
                  0721 329 314 / 0722 446 735
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">📧</span>
                <a href="mailto:info@agrifineconsulting.com" className="hover:text-green-400 transition-colors break-all">
                  info@agrifineconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <div className="text-center sm:text-left">
            <p>© {currentYear} Agrifine Consulting Ltd. All rights reserved.</p>
            <p className="mt-4 text-gray-400">A Muny1verse creation 🤍.</p>
          </div>
          <p className="text-green-600 font-medium">🌿 Sustainably Sourced · Ethically Traded</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
