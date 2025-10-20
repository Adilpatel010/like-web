// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// export default function HeroSection() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     const slides = [
//         "/src/assets/img/banner/sd.jpg",
//         "/src/assets/img/banner/ws.jpg",
//         "/src/assets/img/banner/rr.jpg",
//         "/src/assets/img/banner/bb.jpg",
//         "/src/assets/img/banner/jj.jpg",
//     ];

//     return (
//         <div className="w-full mx-auto">
//             <Swiper
//                 modules={[Autoplay, Pagination]}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 pagination={{ clickable: true }}
//                 loop={true}
//                 speed={1000}
//                 className="object-cover"
//             >
//                 {slides.map((src, i) => (
//                     <SwiperSlide key={i}>
//                         <img
//                             src={src}
//                             alt={`slide-${i}`}
//                             className="w-full h-[175px] md:h-[470px] object-contain md:object-fill"
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }



import React, { useState, useEffect } from 'react';
import { Award, Calendar, Download } from 'lucide-react';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const heroCards = [
  //   {
  //     badge: 'Hydraluxe Aquastar',
  //     title: 'Premium HydraFacial device master in',
  //     highlight: 'Skin science',
  //     subtitle: 'Best premium HydraFacial device.',
  //     desc: 'Premium HydraFacial device redefines skincare. Featuring an advanced analyzer for real-time results, high-quality probes for anti-aging and brightening treatment, and superior exfoliation, it delivers the best HydraFacial treatment for a radiant, healthy complexion.',
  //     image: 'https://lemarkzindustries.com/admin/images/1735985028RQL-90.png',
  //     gradient: 'from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]'
  //   },
  //   {
  //     badge: 'Epiglow',
  //     title: 'Premium Diode',
  //     highlight: 'Diode & Pico',
  //     subtitle: 'Best Pico + diode laser, Pico + diode supplier...',
  //     desc: 'Introducing Epiglow laser, the best pico and diode combination laser available. Engineered with a powerful short pulse width and an advanced cooling system, this versatile platform delivers exceptional results across more than 13 key skin and hair treatments.',
  //     image: 'https://lemarkzindustries.com/admin/images/1694000762Spiral%20Mixer.png',
  //     gradient: 'from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]'
  //   },
  //   {
  //     badge: 'Your Clinic partner',
  //     title: 'Your Trusted Partner: Complete Aesthetic',
  //     highlight: 'Devices & Consumables',
  //     subtitle: 'Best aesthetic products suppliers, best laser equipments supplier.',
  //     desc: 'Unilog provide a complete array of aesthetic devices and essential consumables. We pride ourselves on being the best aesthetic products suppliers and a one-stop solution for new clinic start-ups, ensuring you have premium tools and supplies to deliver exceptional client experiences.',
  //     image: 'https://lemarkzindustries.com/admin/images/1694431200Floor%20Model%20Sheeter%20650.png',
  //     gradient: 'from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]'
  //   },
  //   {
  //     badge: 'FDA Approved Technology',
  //     title: "India's Most Advanced",
  //     highlight: 'PicoSecond Laser',
  //     subtitle: 'Faster. Safer. More Effective.',
  //     desc: "Boost your clinic's results with cutting-edge laser technology trusted by global dermatologists.",
  //     image: 'https://lemarkzindustries.com/admin/images/1694005155Dough%20Rounder.png',
  //     gradient: 'from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]'
  //   }
  // ];

  const heroCards = [
    {
      badge: "Professional Baking",
      title: "High-Performance Convection",
      highlight: "Ovens",
      subtitle: "Designed for perfect heat distribution and consistent results.",
      desc: "Lemarkz convection ovens are built for professional bakeries seeking top-tier performance. With precise temperature control, uniform air circulation, and energy efficiency, they deliver flawless baking results batch after batch.",
      image: "https://lemarkzindustries.com/admin/images/1735985028RQL-90.png",
      gradient: "from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]",
    },
    {
      badge: "Advanced Technology",
      title: "Heavy-Duty Rotary Rack",
      highlight: "Ovens",
      subtitle: "Reliable, efficient, and ideal for large-scale baking production.",
      desc: "Our rotary rack ovens combine durability and performance. Engineered for high-volume operations, they ensure even baking, easy maintenance, and exceptional output quality — trusted by bakeries across the country.",
      image: "https://lemarkzindustries.com/admin/images/1694000762Spiral%20Mixer.png",
      gradient: "from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]",
    },
    {
      badge: "Crafted for Perfection",
      title: "Electric & Gas Deck",
      highlight: "Ovens",
      subtitle: "Perfect choice for artisan bread, pastries, and pizzas.",
      desc: "Lemarkz deck ovens bring artisan craftsmanship to every bake. Featuring independent deck controls and stone baking surfaces, they ensure authentic flavor, golden crusts, and perfect textures every time.",
      image: "https://lemarkzindustries.com/admin/images/1694431200Floor%20Model%20Sheeter%20650.png",
      gradient: "from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]",
    },
    {
      badge: "Smart & Compact",
      title: "Mini Electric",
      highlight: "Ovens",
      subtitle: "Small footprint, powerful performance.",
      desc: "Our mini ovens are designed for compact kitchens without compromising performance. With fast heating, precise controls, and durable construction, they are the perfect choice for cafés, startups, and boutique bakeries.",
      image: "https://lemarkzindustries.com/admin/images/1694005155Dough%20Rounder.png",
      gradient: "from-[#FBF4DB] via-[#f5ead0] to-[#ebe0c5]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroCards.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full font-poppins max-w-[2000px] mx-auto mt-2">
      <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 h-[calc(100vh-70px)] sm:h-[calc(100vh-90px)] md:h-[calc(100vh-100px)] overflow-hidden p-2">
        {heroCards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleCardClick(index)}
            className={`
              relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer
              transition-all duration-700 ease-in-out
              bg-gradient-to-br ${card.gradient}
              ${activeIndex === index
                ? 'flex-[9] p-4 sm:p-6 md:p-8'
                : 'flex-[1] hover:flex-[1.2]'
              }
            `}
          >
            {/* Badge */}
            <div className={`
              inline-flex items-center gap-1 sm:gap-2 bg-white px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full
              font-semibold text-[10px] sm:text-xs md:text-sm text-gray-800 uppercase tracking-wider
              transition-all duration-500 ease-in-out shadow-md
              ${activeIndex === index
                ? 'rotate-0 mb-2 sm:mb-3 md:mb-4 opacity-100 scale-100'
                : 'rotate-[-90deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 scale-90'
              }
            `}>
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#AB2E26]" />
              <span className="whitespace-nowrap">{card.badge}</span>
            </div>

            {/* Content - Only visible when active */}
            {activeIndex === index && (
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 h-full animate-fadeIn">
                {/* Content Section - Wider on desktop */}
                <div className="flex-1 lg:flex-[1.8] flex flex-col justify-center lg:justify-start 2xl:justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 order-1 lg:order-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-gray-900 animate-slideInLeft">
                    {card.title}
                    <span className="text-[#AB2E26]"> {card.highlight}</span>
                  </h2>

                  <div className="space-y-2 sm:space-y-3 animate-slideInLeft animation-delay-100">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800">
                      {card.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                      {card.desc}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mt-1 sm:mt-2 animate-slideInLeft animation-delay-200">
                    <a
                      href="#book-demo"
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 
                        bg-[#AB2E26] text-white font-semibold rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base
                        border-2 border-[#AB2E26] transition-all duration-300
                        hover:bg-transparent hover:text-[#AB2E26] hover:scale-105 active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="whitespace-nowrap">Book Free Demo</span>
                    </a>
                    <a
                      href="./brochure.pdf"
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6
                        bg-transparent text-[#AB2E26] font-semibold rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base
                        border-2 border-[#AB2E26] transition-all duration-300
                        hover:bg-[#AB2E26] hover:text-white hover:scale-105 active:scale-95"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="whitespace-nowrap">Download Brochure</span>
                    </a>
                  </div>
                </div>

                {/* Image Section - Narrower on desktop */}
                <div className="flex-1 lg:flex-[1.2] flex flex-col items-center justify-start 2xl:justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-auto order-2 lg:order-2 animate-fadeInUp animation-delay-300">
                  <img
                    src={card.image}
                    alt={card.badge}
                    className="w-full h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[300px] lg:max-h-[450px] xl:max-h-[550px] object-contain animate-float"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;