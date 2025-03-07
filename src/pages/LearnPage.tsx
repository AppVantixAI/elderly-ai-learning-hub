import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Download, MessageSquare, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const LearnPage: React.FC = () => {
  const modules = [
    {
      title: "Introduction to AI",
      description: "Learn the basics of artificial intelligence and how it can help in everyday life.",
      icon: <BookOpen className="h-8 w-8" />,
      lessons: [
        "What is Artificial Intelligence?",
        "How AI is Used in Everyday Life",
        "Common Misconceptions About AI",
        "Benefits of AI for Baby Boomers"
      ]
    },
    {
      title: "AI for Communication",
      description: "Discover how AI can help you stay connected with friends and family.",
      icon: <MessageSquare className="h-8 w-8" />,
      lessons: [
        "Using AI to Simplify Email",
        "Video Calling with AI Assistance",
        "Voice Assistants for Communication",
        "AI Translation Tools"
      ]
    },
    {
      title: "AI for Organization",
      description: "Learn how AI can help you organize your digital life and manage tasks.",
      icon: <Download className="h-8 w-8" />,
      lessons: [
        "AI Calendar Management",
        "Smart To-Do Lists",
        "Photo Organization with AI",
        "Document Management and Search"
      ]
    },
    {
      title: "AI for Health & Wellness",
      description: "Explore how AI can support your health and wellness goals.",
      icon: <Video className="h-8 w-8" />,
      lessons: [
        "Health Tracking with AI",
        "AI-Powered Exercise Recommendations",
        "Medication Reminders and Management",
        "Mental Wellness Applications"
      ]
    }
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
              Learn AI Basics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-neutral-600 mb-8"
            >
              Our easy-to-follow learning modules will help you understand AI concepts and how they can benefit your daily life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Learning Modules"
            subtitle="Start with these foundational modules to build your AI knowledge."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:translate-y-[-5px]"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                    <p className="text-neutral-600">{module.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {module.lessons.map((lesson, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-full">Start Learning</button>
              </motion.div>
            ))}
          </div>

          {/* Video Tutorial Preview */}
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-soft mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Featured Video Tutorial</h3>
                <p className="text-lg text-neutral-600 mb-6">
                  Watch our most popular tutorial on getting started with voice assistants to simplify everyday tasks.
                </p>
                <button className="btn btn-primary">
                  <Video className="h-5 w-5 mr-2" />
                  Watch Tutorial
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-medium"
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Video tutorial preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-80 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Learning Path */}
          <SectionHeading
            title="Your Learning Path"
            subtitle="Follow this recommended path to build your AI knowledge step by step."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform md:translate-x-[-50%] hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {[
                {
                  title: "Start with the Basics",
                  description: "Begin with our Introduction to AI module to understand fundamental concepts.",
                  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Explore Practical Applications",
                  description: "Learn how AI can help with specific tasks like email management and photo organization.",
                  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Join Live Workshops",
                  description: "Participate in our interactive workshops to get personalized guidance and answers.",
                  image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "Apply What You've Learned",
                  description: "Use our step-by-step guides to implement AI tools in your daily routine.",
                  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 relative"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute top-8 right-0 md:right-auto md:left-0 w-5 h-5 rounded-full bg-primary-600 border-4 border-white shadow-md transform translate-x-10 md:translate-x-0 md:translate-x-[-50%]"></div>
                    
                    <div className={`card ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl shadow-medium w-full h-64 object-cover"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Begin your AI journey today with our beginner-friendly modules.
            </p>
            <button className="btn bg-white text-primary-600 hover:bg-primary-50">
              Start Your First Module
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnPage;
