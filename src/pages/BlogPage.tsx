import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/ui/BlogCard';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      slug: "how-ai-can-simplify-your-daily-routine",
      title: "How AI Can Simplify Your Daily Routine",
      excerpt: "Discover practical ways that artificial intelligence can help you manage everyday tasks more efficiently.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "June 15, 2023",
      readTime: "5 min read",
      category: "productivity"
    },
    {
      slug: "ai-tools-for-staying-connected-with-family",
      title: "AI Tools for Staying Connected with Family",
      excerpt: "Learn about AI-powered apps and services that can help you stay in touch with loved ones near and far.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2023",
      readTime: "4 min read",
      category: "communication"
    },
    {
      slug: "overcoming-tech-anxiety-a-beginners-guide",
      title: "Overcoming Tech Anxiety: A Beginner's Guide",
      excerpt: "Feeling overwhelmed by new technology? This guide offers practical tips for building confidence with digital tools.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "May 10, 2023",
      readTime: "6 min read",
      category: "beginners"
    },
    {
      slug: "ai-powered-health-tracking-for-seniors",
      title: "AI-Powered Health Tracking for Seniors",
      excerpt: "Explore how artificial intelligence is making health monitoring easier and more accessible for older adults.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "April 22, 2023",
      readTime: "7 min read",
      category: "health"
    },
    {
      slug: "smart-home-devices-that-make-life-easier",
      title: "Smart Home Devices That Make Life Easier",
      excerpt: "Discover AI-powered smart home devices that can simplify everyday tasks and enhance your living environment.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "April 5, 2023",
      readTime: "5 min read",
      category: "smart-home"
    },
    {
      slug: "ai-for-photo-organization-and-preservation",
      title: "AI for Photo Organization and Preservation",
      excerpt: "Learn how AI can help you organize, enhance, and preserve your precious photo memories with minimal effort.",
      image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 18, 2023",
      readTime: "6 min read",
      category: "productivity"
    },
    {
      slug: "voice-assistants-a-comprehensive-comparison",
      title: "Voice Assistants: A Comprehensive Comparison",
      excerpt: "Compare the features, benefits, and limitations of popular voice assistants to find the right one for you.",
      image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 2, 2023",
      readTime: "8 min read",
      category: "comparison"
    },
    {
      slug: "ai-for-travel-planning-and-navigation",
      title: "AI for Travel Planning and Navigation",
      excerpt: "Discover how AI tools can help you plan trips, find the best deals, and navigate unfamiliar destinations with ease.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "February 15, 2023",
      readTime: "5 min read",
      category: "travel"
    },
    {
      slug: "protecting-your-privacy-while-using-ai",
      title: "Protecting Your Privacy While Using AI",
      excerpt: "Learn important strategies for maintaining your privacy and security when using AI-powered tools and services.",
      image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "January 28, 2023",
      readTime: "7 min read",
      category: "privacy"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'beginners', label: 'For Beginners' },
    { value: 'productivity', label: 'Productivity' },
    { value: 'communication', label: 'Communication' },
    { value: 'health', label: 'Health & Wellness' },
    { value: 'smart-home', label: 'Smart Home' },
    { value: 'travel', label: 'Travel' },
    { value: 'privacy', label: 'Privacy & Security' },
    { value: 'comparison', label: 'Comparisons' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

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
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-neutral-600 mb-8"
            >
              Insights, tips, and stories about using AI in everyday life.
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
                  placeholder="Search articles..."
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

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  readTime={post.readTime}
                  delay={0.05 * index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-neutral-600 mb-8">
                Try adjusting your search or category selection to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Get the latest articles, tips, and resources delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                />
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
