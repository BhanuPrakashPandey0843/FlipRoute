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

    // Cleanup function to destroy the slider on component unmount
    return () => keenSlider.destroy();
  }, []);

  const reviews = [
    {
      name: "Grace M.",
      company: "Artiflow Design Agency",
      text: "As someone navigating my mental health journey, this website has been an incredible source of support and information. The resources available have provided me with valuable insights and coping strategies that I've been able to incorporate into my daily life...",
      stars: 5,
      avatar: "https://th.bing.com/th/id/OIP.lkekOYM6l_XDZ9ixKr8PGgHaJc?rs=1&pid=ImgDetMain", // Replace with actual image URL or path
    },
    {
      name: "Bhanu Prakash Pandey",
      company: "Developer",
      text: "The platform offers unparalleled resources that have helped me improve my mental well-being significantly. It's a wonderful tool for anyone looking to better their mental health journey.",
      stars: 4,
      avatar: "https://wallpapercave.com/wp/wp2058252.jpg", // Replace with actual image URL or path
    },
    {
      name: "Bhanu Prakash Pandey",
      company: "Developer",
      text: "The platform offers unparalleled resources that have helped me improve my mental well-being significantly. It's a wonderful tool for anyone looking to better their mental health journey.",
      stars: 5,
      avatar: "https://wallpapercave.com/wp/wp2058252.jpg", // Replace with actual image URL or path
    },
    // Add more reviews as needed
  ];

  return (
    <section className="bg-[#165b61] py-12 sm:py-16 lg:py-24 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Hear directly from our clients about their experiences. Our commitment to excellence shines through their testimonials.
          </p>
        </div>

        <div className="relative">
          <div id="keen-slider" className="keen-slider">
            {reviews.map((review, index) => (
              <div key={index} className="keen-slider__slide flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-opacity-80 bg-white/10 border border-white border-opacity-20 backdrop-blur-md">
                <div className="flex items-center mb-4">
                  <img src={review.avatar} alt={`${review.name} Avatar`} className="rounded-full h-12 w-12 mr-4" />
                  <div>
                    <p className="text-xl font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-green-200">{review.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(review.stars)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                        <path d="M12 17.27L18.18 21 16.54 14.43 22 9.24H15.81L12 3 8.19 9.24H2L7.46 14.43 5.82 21z"/>
                      </svg>
                    </span>
                  ))}
                </div>
                <p className="text-green-100 mt-4 text-center">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="bg-green-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="bg-green-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
