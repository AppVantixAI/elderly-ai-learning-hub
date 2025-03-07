import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, Menu, X, BookOpen, LifeBuoy, Users, BookText } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Learn AI Basics', path: '/learn', icon: <BookOpen className="w-6 h-6 mr-2" /> },
    { name: 'Tools & Resources', path: '/resources', icon: <LifeBuoy className="w-6 h-6 mr-2" /> },
    { name: 'Community Stories', path: '/community', icon: <Users className="w-6 h-6 mr-2" /> },
    { name: 'Blog', path: '/blog', icon: <BookText className="w-6 h-6 mr-2" /> },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Lightbulb className="h-10 w-10 text-primary-600" />
          <span className="ml-2 text-2xl font-serif font-bold text-primary-800">AI for Life</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-neutral-600 hover:text-primary-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button className="btn btn-primary">Get Started</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center text-xl p-3 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
              <button className="btn btn-primary w-full mt-4">Get Started</button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
