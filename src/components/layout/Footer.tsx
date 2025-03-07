import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-serif font-bold text-white">AI for Life</span>
            </Link>
            <p className="text-neutral-300 mb-6">
              Empowering Baby Boomers to embrace AI and focus on what truly matters in life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/learn" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Learn AI Basics
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Tools & Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Community Stories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  AI Glossary
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Downloadable Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-400" />
                <a href="mailto:hello@aiforlife.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  hello@aiforlife.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-400" />
                <a href="tel:+18001234567" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  1-800-123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg text-neutral-800 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} AI for Life. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
