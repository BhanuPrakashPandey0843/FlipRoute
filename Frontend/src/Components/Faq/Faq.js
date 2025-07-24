import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file for styles and animations

const faqData = [
  { question: 'What is AmbuLINK and how does it work?', answer: 'AmbuLINK is a cutting-edge emergency medical response system designed to optimize ambulance routes and improve patient care. By utilizing real-time traffic data, AmbuLINK provides the fastest routes for ambulances, offers live tracking for emergency services, and integrates with hospital booking systems to ensure patients are taken to the most suitable facilities based on current capacity and medical needs.' },
  { question: 'How does AmbuLINK optimize ambulance routes?', answer: 'AmbuLINK uses advanced algorithms to analyze real-time traffic conditions, road closures, and other factors that might impact travel time. By processing this data instantly, the system recommends the quickest and most efficient routes for ambulances to reach patients and hospitals, reducing response times in critical situations.' },
  { question: 'Can I track an ambulance in real-time with AmbuLINK?', answer: 'Yes, AmbuLINK provides real-time tracking of ambulances, allowing emergency operators, hospitals, and even family members to monitor the exact location and estimated arrival time of an ambulance. This feature enhances coordination and provides peace of mind by keeping everyone informed throughout the emergency response.' },
  { question: 'How does the hospital booking system work with AmbuLINK?', answer: ' The hospital booking system in AmbuLINK allows for seamless coordination with hospitals by providing real-time updates on bed availability, specialties, and emergency room capacities. Ambulances can book a slot at the nearest suitable hospital in advance, ensuring that the hospital staff is prepared for the patients arrival, reducing waiting times, and improving patient care.' },
  { question: 'Who can use AmbuLINK, and is it available for public use?', answer: 'AmbuLINK is primarily designed for use by emergency medical services, hospitals, and healthcare professionals to improve response times and coordination during emergencies. However, the platform also provides a user-friendly interface for the public to request emergency services, track ambulances, and stay updated on the status of their request, ensuring timely medical assistance in critical situations.' }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <section className="bg-photo bg-cover bg-center text-black py-10">
        <div className="container px-6 mx-auto">
          <h1 className="text-3xl font-bold text-center lg:text-4xl mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg mb-10">
            Find answers to the most commonly asked questions below. If you have any other questions, feel free to reach out to us.
          </p>
          <div className="space-y-6">
            {faqData.map((item, i) => (
              <div key={i} className="faq-item bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500">
                <button
                  className="flex items-center justify-between w-full px-8 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => toggleCollapse(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-content-${i}`}
                >
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.question}
                  </h2>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={openIndex === i ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'}
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-content-${i}`}
                  className={`faq-content px-8 py-4 text-gray-700 transition-max-height duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-screen' : 'max-h-0'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <hr className="border-gray-300 mb-4" />
                  <p className="text-sm">
                    {item.answer}
                  </p>
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
