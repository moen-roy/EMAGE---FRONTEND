import React from 'react';
import { useState, useEffect } from 'react';

const SelfCareQuote = () => {
  const [quote, setQuote] = useState(null);
  
  useEffect(() => {
    // Fixed: Added CORS proxy and removed extra space in URL
    fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/quotes')
      .then(response => response.json())
      .then(data => {
              const randomQuote = data[Math.floor(Math.random() * data.length)];
              setQuote(randomQuote);
            })
      .catch(error => console.error('Error:', error));
  }, []);

  if (!quote) return (
    <section id="selfcare" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl text-gray-400">Loading quote...</p>
      </div>
    </section>
  );

  return (
    <section id="selfcare" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl md:text-4xl font-light leading-relaxed">
          <p className="mb-4">"{quote.q}"</p>
          <footer className="text-xl text-gray-400">— {quote.a}</footer>      
        </blockquote>
      </div>
    </section>
  );
}; 

export default SelfCareQuote;