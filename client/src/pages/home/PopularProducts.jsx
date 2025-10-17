// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Link } from "react-router-dom";

// const products = [
//   { id: 1, name: "OVENS", img: "/src/assets/img/oven.png" },
//   { id: 2, name: "MIXERS", img: "/src/assets/img/mixer.png" },
//   { id: 3, name: "DOUGH SHEETER", img: "/src/assets/img/DoughSheeter.png" },
//   { id: 4, name: "DOUGH SERIES", img: "/src/assets/img/DoughRounder.png" },
//   { id: 5, name: "DOUGH DIVIDER", img: "/src/assets/img/DoughRounder.png" },
// ];

// export default function PopularProducts() {
//   return (
//     <section className="py-20 bg-white font-poppins">
//       <div className="max-w-7xl mx-auto px-5 md:px-20 text-center">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-primary">
//           Popular Products
//           <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
//         </h2>
//         <p className="mt-3 text-gray-600 md:text-xl">
//           Our best-selling products loved by bakeries worldwide!
//         </p>

//         {/* Swiper */}
//         <div className="mt-12 relative">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={24}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 4 },
//             }}
//             navigation={{
//               prevEl: ".custom-prev",
//               nextEl: ".custom-next",
//             }}
//             className="pb-16"
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.id}>
//                 {/* Product Card */}
//                 <Link to="/viewproduct">
//                   <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
//                     {/* Image with gradient background */}
//                     <div className="relative flex justify-center items-center h-64 
//                       bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
//                       group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
//                       transition-all duration-700 ease-in-out">
//                       <img
//                         src={product.img}
//                         alt={product.name}
//                         className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
//                       />
//                     </div>

//                     {/* Text Section */}
//                     <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
//                       <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
//                         {product.name}
//                       </h3>
//                       <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
//                         Premium quality equipment for efficient baking
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Nav Buttons */}
//           <div className="flex gap-4 absolute left-1/2 -translate-x-1/2 mt-6">
//             <button className="custom-prev bg-primary text-white w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#8c251e] transition cursor-pointer">
//               ‹
//             </button>
//             <button className="custom-next bg-primary text-white w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#8c251e] transition cursor-pointer">
//               ›
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function PopularProducts() {
  return (
    <section className="bg-white py-18 font-poppins">
      <div className="container text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Popular Products
          <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </h2>
        <p className="mt-3 text-gray-600 md:text-xl">
          Our best-selling products loved by bakeries worldwide!
        </p>

        {/* Swiper */}
        <div className="mt-12 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="pb-16"
          >
            {/* Oven */}
            <SwiperSlide>
              <Link to="/viewoven">
                <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div
                    className="relative flex justify-center items-center h-64 
                      bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                      group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                      transition-all duration-700 ease-in-out"
                  >
                    <img
                      src="/src/assets/img/oven.png"
                      alt="Ovens"
                      className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      OVENS
                    </h3>
                    <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      Premium quality equipment for efficient baking
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            {/* Mixer */}
            <SwiperSlide>
              <Link to="/viewmixer">
                <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div
                    className="relative flex justify-center items-center h-64 
                      bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                      group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                      transition-all duration-700 ease-in-out"
                  >
                    <img
                      src="/src/assets/img/mixer.png"
                      alt="Mixers"
                      className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      MIXERS
                    </h3>
                    <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      Premium quality equipment for efficient baking
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            {/* Dough Sheeter */}
            <SwiperSlide>
              <Link to="/viewsheeter">
                <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div
                    className="relative flex justify-center items-center h-64 
                      bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                      group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                      transition-all duration-700 ease-in-out"
                  >
                    <img
                      src="/src/assets/img/DoughSheeter.png"
                      alt="Dough Sheeter"
                      className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      DOUGH SHEETER
                    </h3>
                    <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      Premium quality equipment for efficient baking
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            {/* Dough Series */}
            <SwiperSlide>
              <Link to="/viewdoughseries">
                <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div
                    className="relative flex justify-center items-center h-64 
                      bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                      group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                      transition-all duration-700 ease-in-out"
                  >
                    <img
                      src="/src/assets/img/DoughRounder.png"
                      alt="Dough Series"
                      className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      DOUGH SERIES
                    </h3>
                    <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      Premium quality equipment for efficient baking
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            {/* Dough Divider */}
            <SwiperSlide>
              <Link to="/viewdivider">
                <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div
                    className="relative flex justify-center items-center h-64 
                      bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                      group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                      transition-all duration-700 ease-in-out"
                  >
                    <img
                      src="/src/assets/img/DoughRounder.png"
                      alt="Dough Divider"
                      className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      DOUGH DIVIDER
                    </h3>
                    <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      Premium quality equipment for efficient baking
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>

          {/* Custom Nav Buttons */}
          <div className="flex gap-4 absolute left-1/2 -translate-x-1/2 mt-6">
            <button className="custom-prev bg-primary text-white w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#8c251e] transition cursor-pointer">
              ‹
            </button>
            <button className="custom-next bg-primary text-white w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#8c251e] transition cursor-pointer">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
