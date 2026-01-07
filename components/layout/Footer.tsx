import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cream-light text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🎉</div>
              <span className="font-bold text-lg">Party Gift Exchange</span>
            </div>
            <p className="text-gray-700">
              Making gift exchanges easy and fun since 2024.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#features" className="hover:text-gray-900 transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-smooth">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-gray-900 transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-gray-900 transition-smooth">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-smooth">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-smooth">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-small">
            © 2026 Party Gift Exchange. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-smooth">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-smooth">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-smooth">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
