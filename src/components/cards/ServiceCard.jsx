import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-2xl hover:bg-gray-800 transition">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full transition text-sm" style={{backgroundColor: '#FF7A59'}}>
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;