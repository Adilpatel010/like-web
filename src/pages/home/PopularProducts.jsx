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


import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PopularProductData from '../../data/PopularProductData'
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PopularProducts() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;

    // Custom autoplay logic
    const autoplay = setInterval(() => {
      if (isReverse) {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }

      // When swiper reaches end → reverse direction
      if (swiper.isEnd) {
        setIsReverse(true);
      }
      // When swiper reaches beginning → normal direction
      if (swiper.isBeginning) {
        setIsReverse(false);
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [isReverse]);

  return (
    <section className="py-10 pb-25 font-poppins">
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
            modules={[Navigation, Autoplay]}
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={false} // important — we’re handling direction manually
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="pb-16"
          >
            {PopularProductData.map((popular) => (
              <SwiperSlide key={popular.id}>
                <Link to={`/viewpopularproduct/${popular.category}`}>
                  <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div
                      className="relative flex justify-center items-center h-64 
                  bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                  group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                  transition-all duration-700 ease-in-out"
                    >
                      <img
                        src={popular.img}
                        alt={popular.title}
                        className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                        {popular.title}
                      </h3>
                      <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                        {popular.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Nav Buttons */}
          <div className="flex gap-3 absolute left-1/2 -translate-x-1/2 mt-6">
            <button
              className={`custom-prev w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md transition-all duration-300
            ${isBeginning
                  ? "cursor-not-allowed border text-white border-primary bg-[#DCA9A6]"
                  : "cursor-pointer text-white border border-primary bg-primary hover:bg-transparent hover:text-primary"
                }`}
            >
              <ArrowLeft />
            </button>
            <button
              className={`custom-next w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md transition-all duration-300
            ${isEnd
                  ? "cursor-not-allowed border text-white border-primary bg-[#DCA9A6]"
                  : "cursor-pointer text-white border border-primary bg-primary hover:bg-transparent hover:text-primary"
                }`}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
