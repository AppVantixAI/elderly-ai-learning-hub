import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/ui/BlogCard';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch the blog post data based on the slug
  // For this example, we'll use mock data
  const post = {
    title: "How AI Can Simplify Your Daily Routine",
    date: "June 15, 2023",
    readTime: "5 min read",
    author: {
      name: "Jennifer Wilson",
      title: "AI Education Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    heroImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg mb-6">Artificial intelligence (AI) has become an increasingly important part of our digital world, but many people still think of it as something complex or futuristic. The truth is, AI is already all around us, and it can be an incredibly helpful tool for simplifying everyday tasks.</p>
      
      <h2 class="text-2xl font-bold mb-4">What is AI and How Does It Help?</h2>
      
      <p class="text-lg mb-6">At its core, AI refers to computer systems that can perform tasks that typically require human intelligence. These include things like recognizing speech, making decisions, and learning from experience. For those of us looking to simplify our lives, AI offers practical solutions to common challenges.</p>
      
      <p class="text-lg mb-6">Here are some ways AI can help streamline your daily routine:</p>
      
      <h3 class="text-xl font-bold mb-3">1. Managing Your Calendar and Appointments</h3>
      
      <p class="text-lg mb-6">AI-powered calendar apps can do much more than just record your appointments. They can analyze your schedule, suggest optimal meeting times, and even help you allocate time for personal activities and rest. Some can automatically schedule recurring events and send you reminders at just the right time.</p>
      
      <div class="bg-primary-50 rounded-xl p-6 mb-6">
        <h4 class="font-bold mb-2">Try This:</h4>
        <p>Ask your voice assistant: "Remind me to take my medication every day at 9 AM" or "Schedule a walking break every afternoon at 3 PM."</p>
      </div>
      
      <h3 class="text-xl font-bold mb-3">2. Simplifying Email Management</h3>
      
      <p class="text-lg mb-6">Email can quickly become overwhelming, but AI tools can help by automatically categorizing your messages, highlighting important emails, and even suggesting brief responses. Some email services can also identify and filter out spam and promotional content, keeping your inbox cleaner.</p>
      
      <h3 class="text-xl font-bold mb-3">3. Organizing Photos and Memories</h3>
      
      <p class="text-lg mb-6">If you have thousands of digital photos, AI can help organize them by recognizing faces, places, and even specific objects or events. This makes it much easier to find and share particular memories without manually sorting through everything.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Photo organization" class="rounded-xl w-full h-auto" />
        <p class="text-sm text-neutral-500 mt-2 text-center">AI can automatically organize thousands of photos, making it easy to find specific memories.</p>
      </div>
      
      <h3 class="text-xl font-bold mb-3">4. Smart Home Management</h3>
      
      <p class="text-lg mb-6">AI-powered smart home devices can learn your preferences and routines, automatically adjusting lighting, temperature, and even playing your favorite music at the right times. Voice assistants can help you control these devices with simple commands, eliminating the need to use multiple apps or remote controls.</p>
      
      <h3 class="text-xl font-bold mb-3">5. Health and Wellness Support</h3>
      
      <p class="text-lg mb-6">AI applications can help track health metrics, remind you to take medications, suggest appropriate exercises based on your abilities, and even monitor for potential health concerns. Some can provide personalized nutrition advice or help you maintain healthy sleep patterns.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Getting Started with AI: Simple Steps</h2>
      
      <p class="text-lg mb-6">If you're new to using AI in your daily life, here are some easy ways to begin:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li class="text-lg">Start with a voice assistant on your smartphone or consider a smart speaker for your home.</li>
        <li class="text-lg">Explore the AI features already built into services you use, like email or photo apps.</li>
        <li class="text-lg">Try one new AI-powered tool at a time, giving yourself time to get comfortable before adding more.</li>
        <li class="text-lg">Join our community workshops to learn alongside others and get personalized guidance.</li>
      </ol>
      
      <div class="bg-neutral-50 rounded-xl p-6 my-8">
        <h3 class="text-xl font-bold mb-3">Remember:</h3>
        <p class="text-lg">The goal of using AI is to make your life simpler, not more complicated. Choose tools that address your specific needs and preferences, and don't feel pressured to adopt every new technology that comes along.</p>
      </div>
      
      <p class="text-lg mb-6">By incorporating even a few AI-powered tools into your routine, you can save time, reduce stress, and focus more on the activities and people that bring you joy.</p>
    `
  };

  const relatedPosts = [
    {
      slug: "ai-tools-for-staying-connected-with-family",
      title: "AI Tools for Staying Connected with Family",
      excerpt: "Learn about AI-powered apps and services that can help you stay in touch with loved ones near and far.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2023",
      readTime: "4 min read"
    },
    {
      slug: "smart-home-devices-that-make-life-easier",
      title: "Smart Home Devices That Make Life Easier",
      excerpt: "Discover AI-powered smart home devices that can simplify everyday tasks and enhance your living environment.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "April 5, 2023",
      readTime: "5 min read"
    },
    {
      slug: "ai-for-photo-organization-and-preservation",
      title: "AI for Photo Organization and Preservation",
      excerpt: "Learn how AI can help you organize, enhance, and preserve your precious photo memories with minimal effort.",
      image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 18, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="pt-24">
      {/* Back to Blog */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Blog Post */}
      <article className="container mx-auto px-4 max-w-4xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-neutral-500 mb-8">
            <span className="flex items-center mr-6 mb-2">
              <Calendar className="h-5 w-5 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center mb-2">
              <Clock className="h-5 w-5 mr-2" />
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center mb-8">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="font-bold">{post.author.name}</h3>
              <p className="text-neutral-500 text-sm">{post.author.title}</p>
            </div>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-b border-neutral-200 py-6 my-8 flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <button className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors">
                <ThumbsUp className="h-5 w-5 mr-2" />
                Like
              </button>
              <button className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
              <button className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors">
                <Bookmark className="h-5 w-5 mr-2" />
                Save
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-neutral-600 mr-2">Share:</span>
              <div className="flex space-x-2">
                <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Related Articles"
            subtitle="You might also be interested in these articles"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
