import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    // For demo purposes, we'll just show a success message
    setIsSubmitted(true);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl p-8 md:p-12 shadow-soft">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Stay Updated with AI Tips
              </h2>
              <p className="text-neutral-600 text-center mb-8">
                Subscribe to our newsletter for the latest guides, resources, and tips on using AI in your daily life.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-grow px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-neutral-500 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Thank You for Subscribing!
              </h2>
              <p className="text-neutral-600 mb-6">
                You've successfully subscribed to our newsletter. We'll send you the latest AI tips and resources straight to your inbox.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Subscribe Another Email
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
