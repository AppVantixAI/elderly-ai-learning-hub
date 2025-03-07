import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ResourceCard from '../ui/ResourceCard';

const FeaturedResources: React.FC = () => {
  const resources = [
    {
      title: "Beginner's Guide to AI",
      description: "A comprehensive guide that explains AI concepts in simple, everyday language.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "download" as const,
      url: "#"
    },
    {
      title: "AI for Email Management",
      description: "Learn how to use AI tools to organize your inbox and save hours every week.",
      image: "https://images.unsplash.com/photo-1526554850534-7c78330d5f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "video" as const,
      url: "#"
    },
    {
      title: "Smart Home Setup Guide",
      description: "Step-by-step instructions for setting up AI-powered smart home devices.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "link" as const,
      url: "#"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Featured Resources"
          subtitle="Explore our most popular guides and tutorials to start your AI journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              image={resource.image}
              type={resource.type}
              url={resource.url}
              delay={0.1 * index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link to="/resources" className="btn btn-primary">
            View All Resources
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedResources;
