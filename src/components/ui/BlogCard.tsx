import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, title, excerpt, image, date, readTime, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card overflow-hidden flex flex-col h-full"
    >
      <Link to={`/blog/${slug}`} className="block overflow-hidden rounded-xl mb-4 h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex-grow">
        <div className="flex items-center text-sm text-neutral-500 mb-2">
          <span className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </span>
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">{title}</h3>
        </Link>
        <p className="text-neutral-600 mb-4">{excerpt}</p>
      </div>
      <Link
        to={`/blog/${slug}`}
        className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
