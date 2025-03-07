import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card flex flex-col h-full"
    >
      <div className="mb-6">
        <Quote className="h-10 w-10 text-primary-300" />
      </div>
      <p className="text-lg text-neutral-700 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-neutral-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
