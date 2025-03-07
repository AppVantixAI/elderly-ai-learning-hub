import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Download, MessageSquare, Calendar, Mail } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FeatureCard from '../ui/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Easy-to-Follow Guides',
      description: 'Step-by-step instructions that break down complex AI concepts into simple, understandable terms.',
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Video Tutorials',
      description: 'Watch and learn with our collection of clear, concise video tutorials on using AI tools.',
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'Downloadable Resources',
      description: 'Get printable checklists, guides, and reference materials to help you remember what youve learned.',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Community Support',
      description: 'Connect with others who are learning about AI and share experiences and tips.',
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Live Workshops',
      description: 'Join our regular online workshops where experts answer your questions in real-time.',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Personalized Advice',
      description: 'Submit your questions and receive tailored guidance from our team of AI experts.',
    },
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionHeading
          title="How We Help You Embrace AI"
          subtitle="We've designed our resources specifically for those who want to understand and use AI without the technical jargon."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
