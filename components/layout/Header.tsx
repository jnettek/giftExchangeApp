'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full glass z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🎉</div>
            <span className="text-xl font-bold">Party Gift Exchange</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-smooth">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-smooth">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-smooth">Testimonials</a>
            <Link href="/sign-in">
              <Button variant="ghost" className="text-gray-600">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="btn-coral">Register</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-smooth">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-smooth">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-smooth">Testimonials</a>
              <Link href="/sign-in">
                <Button variant="ghost" className="text-gray-600 w-full">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="btn-coral w-full">Register</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
