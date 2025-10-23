import React from 'react';
import CaringImg from '../../assets/caring.png';

const CaringSection = () => {
  return (
    <section id="caring" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-emerald-600 font-semibold mb-2">CARING</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Caring for Your Mental Health Get to Know Our Services
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We offer comprehensive mental health support designed to meet you where you are. From initial consultations to ongoing therapy, our services are crafted with care and expertise.
          </p>
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full transition" style={{backgroundColor: '#FF7A59'}}>
            Learn More
          </button>
        </div>
        
        <div className="relative h-96  rounded-3xl overflow-hidden flex items-center justify-center">
          <img src={CaringImg} alt="caring" className="max-w-full max-h-full object-contain p-6" />
        </div>
      </div>
    </section>
  );
};

export default CaringSection;