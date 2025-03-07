import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, LifeBuoy, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight"
            >
              Empower Your Time: Discover How AI Can Help You Focus on What Truly Matters
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-neutral-600 mb-8"
            >
              A friendly guide to understanding and using artificial intelligence to simplify your life, save time, and focus on the things you love.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/learn" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/resources" className="btn btn-outline">
                Explore Resources
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Senior couple using technology together"
              className="rounded-2xl shadow-medium w-full"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-soft flex items-start"
          >
            <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Learn AI Basics</h3>
              <p className="text-neutral-600">Understand AI in simple terms with our easy-to-follow guides.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-soft flex items-start"
          >
            <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
              <LifeBuoy className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Tools & Resources</h3>
              <p className="text-neutral-600">Discover practical AI tools that can simplify your daily tasks.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-soft flex items-start"
          >
            <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Community Stories</h3>
              <p className="text-neutral-600">Read inspiring stories from people just like you who are using AI.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
