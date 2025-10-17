import React from "react";
import about from '../../assets/img/1.png';

const About = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className='px-6 py-10 bg-gradient-to-t from-[#efeeea] to-[#fdfbf3] font-poppins'>
        <div className="container">
          <h2 className='text-center text-primary text-3xl md:text-5xl font-semibold'>About Lemarks Industries</h2>
          <div className="mt-3 w-22 md:w-30 h-1 bg-primary mx-auto rounded-full"></div>
          <p className='text-gray-600 mt-6 md:px-43 md:text-center text-justify text-md'>Welcome to Lemarkz, your trusted destination for high-quality bakery and kitchen equipment. At Lemarkz, we are committed to delivering excellence in every product, ensuring that your culinary creations are powered by reliability and innovation.</p>
        </div>
      </div>

      <section className="w-full bg-white py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center font-poppins">
            <div className="relative flex flex-col items-center md:items-center space-y-4">
              <img
                src={about}
                alt="Mixer"
                className="h-110 object-cover"
              />
            </div>
            <div>
              <h3 className="text-primary font-bold text-2xl mt-4">Welcome To</h3>
              <h2 className="text-3xl md:text-4xl border-l-5 border-primary pl-3 text-black mt-1">
                Lemarkz Industries <br />
                Kitchen Equipments
              </h2>
              <p className="text-gray-950 mt-6 leading-relaxed">
                <span className="text-[#4d0a05] font-medium"> Geneva Enterprise Pvt. Ltd.</span> <span className="text-primary font-medium"> (Lemarkz Industries Kitchen Equipments,
                  Caterbell Industries & Noofast Impex) </span> was established almost two
                decades ago, and it is presently operating in Maharashtra, Gujarat,
                Karnataka & West Bengal State of India.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                The company firmly believes in{" "}
                <span className="font-semibold">"Quality First and Service Foremost"</span>
                and hence has profound selective management teams of technological
                experts, professional advisers, and sales team.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Geneva Enterprise Pvt. Ltd. (Lemarkz Industries Kitchen Equipments, Caterbell Industries & Noofast Impex) has wide ranges of bakery & kitchen equipments products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
