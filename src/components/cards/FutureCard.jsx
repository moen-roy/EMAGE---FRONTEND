import React from 'react';

const FeatureCard = ({ icon, title, description, featured = false }) => {
  return (
    <div className={`p-8 rounded-2xl ${featured ? 'bg-emerald-600 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className={`mb-4 ${featured ? 'text-white' : 'text-emerald-600'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={featured ? 'text-emerald-50' : 'text-gray-600'}>{description}</p>
    </div>
  );
};

export default FeatureCard;