import React from 'react';
import ServiceCard from '../cards/ServiceCard';

const ServicesSection = () => {
  const services = [
    { title: 'Individual Counseling', description: 'One-on-one sessions tailored to your unique needs' },
    { title: 'Couples Therapy', description: 'Strengthen relationships and improve communication' },
    { title: 'Group Sessions', description: 'Connect with others facing similar challenges' },
    { title: 'Trauma Counseling', description: 'Specialized support for healing from trauma' }
  ];
  
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold mb-2">OUR SERVICES</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Empowering Minds Our Mental Health Consulting Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;