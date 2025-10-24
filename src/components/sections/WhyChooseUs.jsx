import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';
import FeatureCard from '../cards/FeatureCard';

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold mb-2">ABOUT</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Why Our Mental Health Consultants are the Best Choice
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Award className="w-12 h-12" />}
            title="Holistic Approach"
            description="We address mind, body, and spirit for comprehensive mental wellness and lasting transformation."
          />
          
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Experienced Team"
            description="Our certified consultants bring years of expertise and proven therapeutic techniques."
            featured={true}
          />
          
          <FeatureCard
            icon={<TrendingUp className="w-12 h-12" />}
            title="Accessibility"
            description="Flexible scheduling and online consultations make mental health support accessible to all."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;