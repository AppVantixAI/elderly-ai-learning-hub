import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageSquare, Award } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import TestimonialCard from '../components/ui/TestimonialCard';

const CommunityPage: React.FC = () => {
  const testimonials = [
    {
      quote: "I never thought I'd be comfortable using AI tools, but this website made it so easy to understand. Now I use AI to manage my calendar and it's saved me hours every week!",
      name: "Margaret Johnson",
      title: "Retired Teacher",
      image: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The video tutorials were exactly what I needed. They walked me through each step, and now I'm using AI to help organize my photos and even write emails to my grandkids.",
      name: "Robert Williams",
      title: "Retired Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "I was skeptical at first, but the community here is so supportive. I've learned how to use AI to help with my small business, and it's made a world of difference.",
      name: "Patricia Davis",
      title: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The workshops are fantastic! I've attended three so far, and each one has taught me something new about using AI in my daily life.",
      name: "James Wilson",
      title: "Retired Accountant",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "I love how everything is explained in plain English. No technical jargon, just clear instructions that anyone can follow.",
      name: "Susan Thompson",
      title: "Retired Nurse",
      image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Thanks to this community, I've connected with other people my age who are also learning about AI. It's been wonderful to share experiences and tips.",
      name: "David Martinez",
      title: "Retired Professor",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI for Photo Organization Workshop",
      date: "June 15, 2023",
      time: "2:00 PM - 3:30 PM EST",
      description: "Learn how to use AI tools to organize and manage your digital photo collection."
    },
    {
      title: "Getting Started with Voice Assistants",
      date: "June 22, 2023",
      time: "1:00 PM - 2:30 PM EST",
      description: "A beginner-friendly introduction to using voice assistants like Alexa, Google Assistant, and Siri."
    },
    {
      title: "AI for Travel Planning Q&A Session",
      date: "July 5, 2023",
      time: "3:00 PM - 4:00 PM EST",
      description: "Ask our experts about using AI tools to plan trips, find deals, and navigate new places."
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
              Community Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-neutral-600 mb-8"
            >
              Connect with others who are learning about AI and share experiences, tips, and success stories.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Join Our Community?"
            subtitle="Being part of our community offers many benefits to enhance your AI learning journey."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Connect with Peers",
                description: "Meet others who are also learning about AI and share experiences."
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Live Workshops",
                description: "Participate in regular online workshops led by AI experts."
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Ask Questions",
                description: "Get answers to your specific questions about using AI tools."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Share Success Stories",
                description: "Celebrate your achievements and inspire others with your journey."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:translate-y-[-5px]"
              >
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Success Stories"
            subtitle="Hear from people just like you who have embraced AI to simplify their lives."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Join our live workshops and Q&A sessions to learn directly from our experts."
          />

          <div className="space-y-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:translate-y-[-5px]"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-primary-50 text-primary-800 px-4 py-2 rounded-lg inline-block">
                      <div className="text-sm font-medium">{event.date}</div>
                      <div className="text-xs text-primary-600">{event.time}</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-neutral-600 mb-4">{event.description}</p>
                    <button className="btn btn-primary">Register Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn btn-outline">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
            <p className="text-xl text-primary-100 mb-8">
              Connect with others, share experiences, and learn together in a supportive environment.
            </p>
            <button className="btn bg-white text-primary-600 hover:bg-primary-50">
              Sign Up for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
