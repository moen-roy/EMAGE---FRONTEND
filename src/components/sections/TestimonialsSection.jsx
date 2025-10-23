import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Healing Words Testimonials from a Mental Health Consultant
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Working with this team has transformed my life. I've learned to manage my anxiety and find peace."
            author="Sarah M."
            featured={true}
          />
          
          <TestimonialCard
            quote="The compassionate support I received helped me through my darkest times. Forever grateful."
            author="Michael R."
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;