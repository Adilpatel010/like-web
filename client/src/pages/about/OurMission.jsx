{/* <section className="w-full bg-gradient-to-t from-[#fdfbf3] to-[#efeeea] py-12 font-poppins">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 uppercase">

          <div className="group bg-white shadow-lg rounded-2xl p-8 border-t-4 border-primary hover:shadow-xl hover:bg-primary transition-all duration-500">
            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-500">
              To deliver the best possible customer service, excellent quality &
              most advanced products.
            </p>
          </div>

          <div className="group bg-white shadow-lg rounded-2xl p-8 border-t-4 border-primary hover:shadow-xl hover:bg-primary transition-all duration-500">
            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-500">
              To pursue excellence in product development and support services.
            </p>
          </div>

        </div>
      </section> */}

import React from 'react';

const OurMission = () => {
  return (
    <section className="w-full py-20 container font-poppins space-y-7">

      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <div
          className="w-full h-65 md:h-66"
          style={{
            backgroundImage: "url('https://lemarkzindustries.com/images/background/bg-11.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-16 z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">Our Mission</h3>
          <p className="text-gray-100 uppercase text-base md:text-lg leading-relaxed max-w-4xl">
            To deliver the best possible customer service, excellent quality, and the most advanced
            products — ensuring lasting satisfaction for every customer we serve.
          </p>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <div
          className="w-full h-65 md:h-66"
          style={{
            backgroundImage: "url('https://lemarkzindustries.com/images/background/mission.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-16 z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">Our Vision</h3>
          <p className="text-gray-100 text-base md:text-lg uppercase leading-relaxed max-w-4xl">
            To pursue excellence in product development and support services — building a
            future where innovation, quality, and customer trust define our brand.
          </p>
        </div>
      </div>

    </section>
  );
};

export default OurMission;
