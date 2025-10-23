import React, { useState } from 'react';
import FAQItem from '../cards/FAQItem';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "What is a mental health consultant?",
      answer: "A mental health consultant is a trained professional who provides guidance, support, and therapeutic interventions to help individuals manage mental health challenges and improve their overall wellbeing."
    },
    {
      question: "What can you do as a life coach or a mental health consultant?",
      answer: "We help you identify goals, overcome obstacles, develop coping strategies, and create actionable plans for personal growth and mental wellness."
    },
    {
      question: "How can I benefit from working with a mental health consultant?",
      answer: "You'll gain professional support, learn effective coping strategies, develop better self-awareness, and work towards improved mental health and life satisfaction."
    },
    {
      question: "What types of issues can a mental health consultant help with?",
      answer: "We address anxiety, depression, stress management, relationship issues, life transitions, trauma, and personal development challenges."
    }
  ];
  
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold mb-2">FAQ</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Navigating Mental Health Consultation Commonly Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;