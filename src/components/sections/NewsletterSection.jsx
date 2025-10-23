import React from 'react';

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="py-20 px-6 bg-emerald-600">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Join To Our Community</h2>
        <p className="text-emerald-100 mb-8">
          Join our community to receive mental health tips, resources, and updates delivered to your inbox weekly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white bg-white"
          />
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full transition" style={{backgroundColor: '#FF7A59'}}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;