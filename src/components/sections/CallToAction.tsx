import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="section bg-primary-600 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Simplify Your Life with AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            Join thousands of others who are using AI to save time and focus on what truly matters.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/learn"
              className="btn bg-white text-primary-600 hover:bg-primary-50 shadow-soft hover:shadow-medium"
            >
              Get Started Today
            </Link>
            <Link
              to="/community"
              className="btn border-2 border-white text-white hover:bg-primary-700"
            >
              Join Our Community
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
