import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Video, ExternalLink, Filter } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ResourceCard from '../components/ui/ResourceCard';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const resources = [
    {
      title: "Beginner's Guide to AI",
      description: "A comprehensive guide that explains AI concepts in simple, everyday language.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "download" as const,
      url: "#",
      category: "guide"
    },
    {
      title: "AI for Email Management",
      description: "Learn how to use AI tools to organize your inbox and save hours every week.",
      image: "https://images.unsplash.com/photo-1526554850534-7c78330d5f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "video" as const,
      url: "#",
      category: "tutorial"
    },
    {
      title: "Smart Home Setup Guide",
      description: "Step-by-step instructions for setting up AI-powered smart home devices.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "link" as const,
      url: "#",
      category: "guide"
    },
    {
      title: "AI Voice Assistant Comparison",
      description: "Compare popular voice assistants to find the one that best suits your needs.",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "download" as const,
      url: "#",
      category: "comparison"
    },
    {
      title: "Photo Organization with AI",
      description: "Watch how to use AI to automatically organize and tag your digital photos.",
      image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "video" as const,
      url: "#",
      category: "tutorial"
    },
    {
      title: "AI Health Tracking Apps",
      description: "A curated list of the best AI-powered health tracking applications.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "link" as const,
      url: "#",
      category: "list"
    },
    {
      title: "AI Safety and Privacy Guide",
      description: "Learn how to use AI tools while protecting your personal information.",
      image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "download" as const,
      url: "#",
      category: "guide"
    },
    {
      title: "Video Calling for Beginners",
      description: "A step-by-step tutorial on setting up and using video calling apps.",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "video" as const,
      url: "#",
      category: "tutorial"
    },
    {
      title: "AI Tools for Travel Planning",
      description: "Discover how AI can help you plan trips, find deals, and navigate new places.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      type: "link" as const,
      url: "#",
      category: "list"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
                          (activeFilter === 'download' && resource.type === 'download') ||
                          (activeFilter === 'video' && resource.type === 'video') ||
                          (activeFilter === 'link' && resource.type === 'link') ||
                          (activeFilter === resource.category);
    
    return matchesSearch && matchesFilter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Resources' },
    { value: 'guide', label: 'Guides' },
    { value: 'tutorial', label: 'Tutorials' },
    { value: 'download', label: 'Downloads' },
    { value: 'video', label: 'Videos' },
    { value: 'list', label: 'Lists & Comparisons' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Tools & Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-neutral-600 mb-8"
            >
              Discover practical guides, tutorials, and tools to help you use AI in your everyday life.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-4 pr-12 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                  <Search className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-primary-600 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === option.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  image={resource.image}
                  type={resource.type}
                  url={resource.url}
                  delay={0.05 * index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No resources found</h3>
              <p className="text-neutral-600 mb-8">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Request Resources Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Can't Find What You Need?</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let us know what resources would be helpful for you, and we'll work on creating them.
            </p>
            <button className="btn btn-primary">
              Request a Resource
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
