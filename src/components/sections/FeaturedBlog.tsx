import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import BlogCard from '../ui/BlogCard';

const FeaturedBlog: React.FC = () => {
  const blogPosts = [
    {
      slug: "how-ai-can-simplify-your-daily-routine",
      title: "How AI Can Simplify Your Daily Routine",
      excerpt: "Discover practical ways that artificial intelligence can help you manage everyday tasks more efficiently.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "June 15, 2023",
      readTime: "5 min read"
    },
    {
      slug: "ai-tools-for-staying-connected-with-family",
      title: "AI Tools for Staying Connected with Family",
      excerpt: "Learn about AI-powered apps and services that can help you stay in touch with loved ones near and far.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2023",
      readTime: "4 min read"
    },
    {
      slug: "overcoming-tech-anxiety-a-beginners-guide",
      title: "Overcoming Tech Anxiety: A Beginner's Guide",
      excerpt: "Feeling overwhelmed by new technology? This guide offers practical tips for building confidence with digital tools.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "May 10, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionHeading
          title="Latest from Our Blog"
          subtitle="Insights, tips, and stories about using AI in everyday life."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              readTime={post.readTime}
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
          <Link to="/blog" className="btn btn-primary">
            Read More Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
