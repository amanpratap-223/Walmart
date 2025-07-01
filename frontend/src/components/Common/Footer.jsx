import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-12">
      {/* Newsletter */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-blue-800 pb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-blue-100 mb-2">
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm rounded-l-md text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 px-6 py-3 text-sm font-semibold rounded-r-md hover:bg-yellow-300 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-blue-100">
            <li><a href="#" className="hover:text-yellow-400">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-400">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-yellow-400">Order Tracking</a></li>
            <li><a href="#" className="hover:text-yellow-400">Shipping Info</a></li>
            <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Walmart</h3>
          <ul className="space-y-2 text-blue-100">
            <li><a href="#" className="hover:text-yellow-400">Our Story</a></li>
            <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Press</a></li>
            <li><a href="#" className="hover:text-yellow-400">Sustainability</a></li>
            <li><a href="#" className="hover:text-yellow-400">Investor Relations</a></li>
          </ul>
        </div>

        {/* Contact & Trust */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact & Trust</h3>
          <ul className="space-y-2 text-blue-100">
            <li>
              <span className="block">Customer Support: <a href="tel:1800123456" className="hover:text-yellow-400">1800-123-456</a></span>
            </li>
            <li>
              <span className="block">Email: <a href="mailto:support@walmart.in" className="hover:text-yellow-400">support@walmart.in</a></span>
            </li>
            <li className="flex items-center space-x-2 mt-2">
              <span className="bg-white text-blue-900 px-2 py-1 rounded text-xs font-bold">100% Secure</span>
              <span className="bg-white text-blue-900 px-2 py-1 rounded text-xs font-bold">Genuine Products</span>
            </li>
          </ul>
          {/* Social Media Section */}
          <div className="mt-6">
            <span className="block mb-2 font-semibold text-white">Follow us on:</span>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-yellow-400 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white hover:text-yellow-400 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-yellow-400 text-xl"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Secondary Links */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm text-blue-200">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-yellow-400">Terms of Use</a>
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400">Accessibility</a>
          <a href="#" className="hover:text-yellow-400">AdChoices</a>
          <a href="#" className="hover:text-yellow-400">Sitemap</a>
        </div>
        <div className="text-center">
          <span>&copy; {new Date().getFullYear()} Walmart India. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;