import React from 'react';
import Bhanuimgg from './smith.gif';

const Documentation = () => {
  return (
    <div className="bg-white text-black">
      <section className="w-full overflow-hidden">
        <div className="w-full mx-auto">
          {/* User Cover IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem] object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* User Profile Image */}
          <div className="w-full mx-auto flex justify-center -mt-16 md:-mt-20 lg:-mt-24">
            <img
              src={Bhanuimgg}
              alt="User Profile"
              className="rounded-full object-cover xl:w-[14rem] xl:h-[14rem] lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] outline outline-4 outline-white shadow-lg transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="xl:w-[80%] lg:w-[85%] md:w-[90%] sm:w-[95%] mx-auto flex flex-col items-center mt-6 space-y-4">
            {/* FullName */}
            <h1 className="text-center text-4xl font-serif font-bold transition-opacity duration-500 hover:opacity-80">
              Bhanu Prakash Pandey
            </h1>
            {/* About */}
            <p className="text-center text-lg md:text-base sm:text-sm leading-relaxed px-6 lg:px-12 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore consectetur
              voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente repellendus asperiores
              explicabo, eligendi odit, dolore similique fugiat dolor, doloremque eveniet. Odit, consequatur.
              Ratione voluptate exercitationem hic eligendi vitae animi nam in, est earum culpa illum aliquam.
              Atque aperiam et voluptatum voluptate distinctio, nostrum hic voluptatibus nisi. Eligendi
              voluptatibus numquam maxime voluptatem labore similique qui illo est magnam adipisci autem quisquam,
              quia incidunt excepturi, possimus odit praesentium?
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 text-gray-500">
              <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/" className="hover:text-blue-600">
                <svg
                  className="w-8 h-8 transition-transform duration-500 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
              <a href="https://twitter.com/Samuel7Abera7" className="hover:text-blue-400">
                <svg
                  className="w-8 h-8 transition-transform duration-500 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
                  />
                </svg>
              </a>
              <a href="/" className="hover:text-blue-500">
                <svg
                  className="w-8 h-8 transition-transform duration-500 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/@silentcoder7" className="hover:text-red-600">
                <svg
                  className="w-8 h-8 transition-transform duration-500 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.07v1.44c0 1.048.067 2.09.2 3.122.19.723.59 1.38 1.143 1.88a2.913 2.913 0 0 0 1.828.837c2.557.19 6.735.24 6.735.24s4.16 0 6.926-.2a2.84 2.84 0 0 0 1.984-.838 4.23 4.23 0 0 0 .789-1.964c.17-1.034.253-2.08.25-3.126.003-1.042-.08-2.083-.247-3.12Zm-12.336 5.43v-6.59l5.656 3.297-5.656 3.293Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
