import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  type: 'download' | 'link' | 'video';
  url: string;
  delay?: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, image, type, url, delay = 0 }) => {
  const getIcon = () => {
    switch (type) {
      case 'download':
        return <Download className="h-5 w-5 mr-2" />;
      case 'link':
        return <ExternalLink className="h-5 w-5 mr-2" />;
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        );
      default:
        return <ExternalLink className="h-5 w-5 mr-2" />;
    }
  };

  const getButtonText = () => {
    switch (type) {
      case 'download':
        return 'Download';
      case 'link':
        return 'View Resource';
      case 'video':
        return 'Watch Video';
      default:
        return 'View Resource';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden rounded-xl mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary inline-flex self-start"
      >
        {getIcon()}
        {getButtonText()}
      </a>
    </motion.div>
  );
};

export default ResourceCard;
