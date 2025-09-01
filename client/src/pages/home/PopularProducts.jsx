// import React from "react";

// const products = [
//     {
//         id: 1,
//         name: "OVENS",
//         img: "/src/assets/img/1.png",
//     },
//     {
//         id: 2,
//         name: "MIXERS",
//         img: "/src/assets/img/mixer.png",
//     },
//     {
//         id: 3,
//         name: "DOUGH SHEETER",
//         img: "/src/assets/img/DoughSheeter.png",
//     },
//     {
//         id: 4,
//         name: "DOUGH SERIES",
//         img: "/src/assets/img/DoughRounder.png",
//     },
// ];

// export default function PopularProducts() {
//     return (
//         <section className="py-12 bg-white">
//             <div className="max-w-7xl md:px-20 mx-auto px-4 text-center">
//                 {/* Heading */}
//                 <h2 className="text-3xl md:text-5xl font-bold text-[#AB2E26]">
//                     Popular Products
//                 </h2>
//                 <p className="mt-3 text-gray-600 md:text-xl">
//                     Our best-selling oven loved by everyone!
//                 </p>

//                 {/* Product Grid */}
//                 <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                     {products.map((product) => (
//                         <div
//                             key={product.id}
//                             className="group border-gray-200 rounded-md border overflow-hidden bg-white hover:shadow-xl transition-all duration-500"
//                         >
//                             <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
//                                 <div className="absolute bottom-[-100%] left-0 w-full h-full bg-[#AB2E26] rounded-t-[100px] transition-transform duration-700 ease-in-out group-hover:translate-y-[-60%]" />
//                             </div>
//                             {/* Image with half background */}
//                             <div className="relative flex justify-center items-end h-64">
//                                 {/* Half background (bottom 50%) */}
//                                 <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-t-4xl bg-white transition-colors duration-500 group-hover:bg-[#AB2E26]" />

//                                 {/* Product image */}
//                                 <img
//                                     src={product.img}
//                                     alt={product.name}
//                                     className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-105"
//                                 />
//                             </div>

//                             {/* Text Section */}
//                             <div className="p-4 bg-white transition-colors duration-500 group-hover:bg-[#AB2E26] border-t-1 border-gray-200">
//                                 <h3 className="text-sm font-semibold text-gray-800 transition-colors duration-500 group-hover:text-white">
//                                     {product.name}
//                                 </h3>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const products = [
//     { id: 1, name: "OVENS", img: "/src/assets/img/oven.png" },
//     { id: 2, name: "MIXERS", img: "/src/assets/img/mixer.png" },
//     { id: 3, name: "DOUGH SHEETER", img: "/src/assets/img/DoughSheeter.png" },
//     { id: 4, name: "DOUGH SERIES", img: "/src/assets/img/DoughRounder.png" },
//     { id: 5, name: "DOUGH SERIES", img: "/src/assets/img/DoughRounder.png" },

// ];

// export default function PopularProducts() {
//     return (
//         <section className="py-20 bg-white">
//             <div className="max-w-7xl mx-auto px-4 md:px-20 text-center cursor-pointer">
//                 {/* Title */}
//                 <h2 className="text-3xl md:text-5xl font-bold text-[#AB2E26]">
//                     Popular Products
//                 </h2>
//                 <p className="mt-3 text-gray-600 md:text-xl">
//                     Our best-selling products loved by everyone!
//                 </p>

//                 {/* Swiper */}
//                 <div className="mt-10 relative">
//                     <Swiper
//                         modules={[Navigation]}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         breakpoints={{
//                             640: { slidesPerView: 2 },
//                             1024: { slidesPerView: 4 },
//                         }}
//                         navigation={{
//                             prevEl: ".custom-prev",
//                             nextEl: ".custom-next",
//                         }}
//                         className="pb-16"
//                     >
//                         {products.map((product) => (
//                             <SwiperSlide key={product.id}>
//                                 {/* Same card design from first code */}
//                                 <div className="group border-gray-200 rounded-md border overflow-hidden bg-white hover:shadow-xl transition-all duration-500 relative">

//                                     {/* Image with half background */}
//                                     <div className="relative flex justify-center items-end h-64 bg-amber-100">
//                                         <img
//                                             src={product.img}
//                                             alt={product.name}
//                                             className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-105"
//                                         />
//                                     </div>

//                                     {/* Text Section */}
//                                     <div className="p-4 bg-white transition-colors duration-500 group-hover:bg-[#AB2E26] border-t border-gray-200 relative z-10">
//                                         <h3 className="text-sm font-semibold text-gray-800 transition-colors duration-500 group-hover:text-white">
//                                             {product.name}
//                                         </h3>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Custom Nav Buttons */}
//                     <div className="flex gap-3 absolute left-1/2 -translate-x-1/2 mt-5 ">
//                         <button className="custom-prev bg-[#AB2E26] text-white px-4 py-3 hover:bg-[#8c251e] rounded-md cursor-pointer">
//                             ‹
//                         </button>
//                         <button className="custom-next bg-[#AB2E26] text-white px-4 py-3 hover:bg-[#8c251e] rounded-md cursor-pointer">
//                             ›
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const products = [
//     { id: 1, name: "OVENS", img: "/src/assets/img/oven.png" },
//     { id: 2, name: "MIXERS", img: "/src/assets/img/mixer.png" },
//     { id: 3, name: "DOUGH SHEETER", img: "/src/assets/img/DoughSheeter.png" },
//     { id: 4, name: "DOUGH SERIES", img: "/src/assets/img/DoughRounder.png" },
//     { id: 5, name: "DOUGH SERIES", img: "/src/assets/img/DoughRounder.png" },
// ];

// export default function PopularProducts() {
//     return (
//         <section className="py-20 bg-white font-poppins">
//             <div className="max-w-7xl mx-auto px-5 md:px-20 text-center">
//                 {/* Title */}
//                 <h2 className="text-3xl md:text-5xl font-bold text-[#AB2E26]">
//                     Popular Products
//                 </h2>
//                 <p className="mt-3 text-gray-600 md:text-xl">
//                     Our best-selling products loved by everyone!
//                 </p>

//                 {/* Swiper */}
//                 <div className="mt-10 relative">
//                     <Swiper
//                         modules={[Navigation]}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         breakpoints={{
//                             640: { slidesPerView: 2 },
//                             1024: { slidesPerView: 4 },
//                         }}
//                         navigation={{
//                             prevEl: ".custom-prev",
//                             nextEl: ".custom-next",
//                         }}
//                         className="pb-16"
//                     >
//                         {products.map((product) => (
//                             <SwiperSlide key={product.id}>
//                                 {/* Product Card */}
//                                 <div className="group border-gray-200 rounded-md border overflow-hidden bg-white hover:shadow-xl transition-all duration-500 relative cursor-pointer">
//                                     {/* Image with gradient background */}
//                                     <div className="relative flex justify-center items-end h-64 
//                                         bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
//                                         group-hover:bg-gradient-to-t group-hover:from-[#f8f1d8] group-hover:to-[#fcfaf3] 
//                                         transition-all duration-900 ease-in-out">
//                                         <img
//                                             src={product.img}
//                                             alt={product.name}
//                                             className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-105"
//                                         />
//                                     </div>

//                                     {/* Text Section */}
//                                     <div className="p-4 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-[#AB2E26] border-t border-gray-200 relative z-10">
//                                         <h3 className="text-sm font-semibold text-gray-800 transition-colors duration-500 group-hover:text-white">
//                                             {product.name}
//                                         </h3>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Custom Nav Buttons */}
//                     <div className="flex gap-3 absolute left-1/2 -translate-x-1/2 mt-5">
//                         <button className="custom-prev bg-[#AB2E26] text-white px-4 py-3 hover:bg-[#8c251e] rounded-md cursor-pointer">
//                             ‹
//                         </button>
//                         <button className="custom-next bg-[#AB2E26] text-white px-4 py-3 hover:bg-[#8c251e] rounded-md cursor-pointer">
//                             ›
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  { id: 1, name: "OVENS", img: "/src/assets/img/oven.png" },
  { id: 2, name: "MIXERS", img: "/src/assets/img/mixer.png" },
  { id: 3, name: "DOUGH SHEETER", img: "/src/assets/img/DoughSheeter.png" },
  { id: 4, name: "DOUGH SERIES", img: "/src/assets/img/DoughRounder.png" },
  { id: 5, name: "DOUGH DIVIDER", img: "/src/assets/img/DoughRounder.png" },
];

export default function PopularProducts() {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-5 md:px-20 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#AB2E26]">
          Popular Products
          <div className="mt-2 w-20 h-1 bg-[#AB2E26] mx-auto rounded-full"></div>
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                {/* Product Card */}
                <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  {/* Image with gradient background */}
                  <div className="relative flex justify-center items-center h-64 
                      bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                      group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                      transition-all duration-700 ease-in-out">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-[#AB2E26] border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      {product.name}
                    </h3>
                    <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      Premium quality equipment for efficient baking
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Nav Buttons */}
          <div className="flex gap-4 absolute left-1/2 -translate-x-1/2 mt-6">
            <button className="custom-prev bg-[#AB2E26] text-white w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#8c251e] transition cursor-pointer">
              ‹
            </button>
            <button className="custom-next bg-[#AB2E26] text-white w-12 h-12 flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#8c251e] transition cursor-pointer">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
