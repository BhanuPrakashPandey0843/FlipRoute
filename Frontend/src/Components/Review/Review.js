import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Review = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'center',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
    keenSliderNext?.addEventListener('click', () => keenSlider.next());

    return () => keenSlider.destroy();
  }, []);

  const reviews = [
    {
      name: "Bhanu Prakash Pandey ",
      company: "Logistics Manager, QuickShip",
      text: "FlipRoute has transformed our last-mile delivery planning. We reduced delivery times by 25% and saved thousands in fuel costs every month. The optimization is accurate and easy to implement across our fleet.",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jasika Kumari",
      company: "Operations Head, E-Mart",
      text: "We were struggling with inefficient routes for our e-commerce deliveries. FlipRoute’s AI-driven route optimization solved the problem instantly. It’s reliable, user-friendly, and integrates seamlessly with our system.",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vibhu",
      company: "CEO, LocalGo Logistics",
      text: "Managing multiple delivery vehicles was a nightmare before FlipRoute. Now we get optimal routes for all vehicles within seconds. Our on-time deliveries have improved dramatically!",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  return (
    <section className="bg-[#004f48] py-12 sm:py-16 lg:py-24 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-teal-100">
            Hear how FlipRoute is helping logistics and e-commerce companies save time, reduce costs, and deliver smarter.
          </p>
        </div>

        <div className="relative">
          <div id="keen-slider" className="keen-slider">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-opacity-80 bg-white/10 border border-white border-opacity-20 backdrop-blur-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={`${review.name} Avatar`}
                    className="rounded-full h-12 w-12 mr-4 border border-teal-300"
                  />
                  <div>
                    <p className="text-xl font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-teal-200">{review.company}</p>
                  </div>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center mb-4">
                  {[...Array(review.stars)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                      >
                        <path d="M12 17.27L18.18 21 16.54 14.43 22 9.24H15.81L12 3 8.19 9.24H2L7.46 14.43 5.82 21z" />
                      </svg>
                    </span>
                  ))}
                </div>

                <p className="text-teal-100 mt-4 text-center italic">
                  “{review.text}”
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="bg-teal-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="bg-teal-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
