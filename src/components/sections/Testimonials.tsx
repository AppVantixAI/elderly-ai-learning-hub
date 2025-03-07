import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials: React.FC = () => {
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
    }
  ];

  return (
    <section className="section bg-primary-50">
      <div className="container">
        <SectionHeading
          title="Success Stories"
          subtitle="Hear from people just like you who have embraced AI to simplify their lives."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  );
};

export default Testimonials;
