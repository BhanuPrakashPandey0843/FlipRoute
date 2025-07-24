import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: 'What is FlipRoute and how does it work?',
    answer:
      'FlipRoute is an AI-powered last-mile delivery route optimization tool that calculates the most efficient delivery paths. It analyzes customer locations, generates a distance matrix, and uses advanced algorithms like Travelling Salesman Problem (TSP) and Vehicle Routing Problem (VRP) to minimize time, cost, and fuel consumption.',
  },
  {
    question: 'How does FlipRoute help in reducing delivery costs?',
    answer:
      'By finding the shortest possible route that visits all customer locations only once, FlipRoute reduces unnecessary travel distance. This directly lowers fuel expenses, improves delivery time, and increases the number of deliveries per vehicle, resulting in overall cost savings.',
  },
  {
    question: 'Can FlipRoute handle multiple delivery vehicles?',
    answer:
      'Yes! FlipRoute supports multiple vehicles. It can assign delivery points across different vehicles while ensuring that each vehicle takes the most optimal route, balancing workload and improving fleet efficiency.',
  },
  {
    question: 'Does FlipRoute integrate with real-time traffic data?',
    answer:
      'FlipRoute can be integrated with Google Maps API to consider real-time traffic conditions, road closures, and delays. This ensures that the route remains optimal even during unexpected traffic conditions.',
  },
  {
    question: 'Who can use FlipRoute?',
    answer:
      'FlipRoute is designed for e-commerce companies, courier services, food delivery businesses, and any logistics operation that needs optimized last-mile delivery routes. It is user-friendly and can also be used by small businesses to improve delivery efficiency.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <section className="faq-section">
        <div className="faq-wrapper">
       
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Here are answers to some common questions about FlipRoute. If you have more queries, feel free to contact us.
          </p>

          
          <div className="faq-items">
            {faqData.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleCollapse(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-content-${i}`}
                >
                  <span>{item.question}</span>
                  <span
                    className={`faq-icon ${
                      openIndex === i ? 'rotate' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                
                <div
                  id={`faq-content-${i}`}
                  className={`faq-content ${
                    openIndex === i ? 'open' : ''
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
