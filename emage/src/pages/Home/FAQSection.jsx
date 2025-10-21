import React, { useState } from 'react';

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: 'What is a mental health consultant?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus. A risus donec eget enim aliquet integer cursus et. Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat.'
    },
    {
      question: 'What services do you offer as a mental health consultant?',
      answer: ''
    },
    {
      question: 'How can I benefit from working with a mental health consultant?',
      answer: ''
    },
    {
      question: 'What types of issues can a mental health consultant help with?',
      answer: ''
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-[80px] justify-start items-center w-full lg:w-[70%] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col gap-3 lg:gap-[14px] justify-center items-center w-full">
            <h2 className="text-lg lg:text-[22px] font-bold leading-tight lg:leading-[31px] text-left text-black font-['Manrope']">
              Faq
            </h2>
            <h3 className="text-[32px] lg:text-[54px] font-bold leading-tight lg:leading-[73px] text-center text-black font-['Manrope'] w-full">
              Navigating Mental Health Consultation Commonly Asked Questions
            </h3>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col gap-8 lg:gap-[50px] w-full">
            {faqs?.map((faq, index) => (
              <div key={index} className="flex flex-col gap-6 lg:gap-[30px] justify-start items-center w-full">
                {/* Question Header */}
                <button 
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleExpanded(index)}
                  role="button"
                  aria-expanded={expandedIndex === index}
                >
                  <h4 className="text-xl lg:text-[28px] font-bold leading-tight lg:leading-[39px] text-center text-black font-['Manrope'] text-left">
                    {faq?.question}
                  </h4>
                  <img 
                    src={index === 2 ? "/images/img_stroke_1.svg" : "/images/img_arrow_down_2.svg"} 
                    alt={expandedIndex === index ? "Collapse" : "Expand"} 
                    className={`w-[30px] lg:w-[${index === 2 ? '30px' : '48px'}] h-[16px] lg:h-[${index === 2 ? '16px' : '48px'}] ${index === 2 ? 'mt-2 lg:mt-[14px] mr-2 lg:mr-[8px]' : ''} transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Answer Content */}
                {expandedIndex === index && faq?.answer && (
                  <div className="flex justify-start items-center w-full">
                    <p className="text-base lg:text-[18px] font-normal leading-tight lg:leading-[27px] text-left text-black font-['Poppins'] w-full lg:w-[86%]">
                      {faq?.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;