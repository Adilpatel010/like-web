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

import React, { useEffect, useState } from "react";
import { FaAward, FaCalendar, FaDownload } from "react-icons/fa";
// import { Award, CalendarDays, Download } from "lucide-react";

const HeroSection = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  
  const heroCards = [
    {
      badge: "Hydraluxe Aquastar",
      title: (
        <>
          Premium HydraFacial device<br /> master in{" "}
          <span className="text-[var(--color-primary)]">Skin science</span>
        </>
      ),
      subtitle: "Best premium HydraFacial device.",
      desc: `Premium HydraFacial device redefines skincare. Featuring an advanced analyzer for
      real-time results, high-quality probes for anti-aging and brightening treatment, and superior
      exfoliation, it delivers the best HydraFacial treatment for a radiant, healthy complexion.`,
      img: "./image/hero-machine-1.webp",
    },
    {
      badge: "Epiglow",
      title: (
        <>
          premium Diode <span className="text-[var(--color-primary)]">Diode & Pico</span> combination laser
        </>
      ),
      subtitle: "Best Pico + diode laser, Pico + diode supplier...",
      desc: `Introducing Epiglow laser, the best pico and diode combination laser available. Engineered
      with a powerful short pulse width and an advanced cooling system, this versatile platform delivers
      exceptional results across more than 13 key skin and hair treatments.`,
      img: "./image/hero-machine-2.webp",
    },
    {
      badge: "Your Clinic partner",
      title: (
        <>
          Your Trusted Partner: Complete Aesthetic{" "}
          <span className="text-[var(--color-primary)]">Devices & Consumables</span>
        </>
      ),
      subtitle:
        "Best aesthetic products suppliers, best laser equipments supplier, best aesthetic machines supplier.",
      desc: `Unilog provide a complete array of aesthetic devices and essential consumables. We pride
      ourselves on being the best aesthetic products suppliers and a one-stop solution for new clinic
      start-ups.`,
      img: "./image/hero-machine-3.webp",
    },
    {
      badge: "FDA Approved Technology",
      title: (
        <>
          India’s Most Advanced{" "}
          <span className="text-[var(--color-primary)]">PicoSecond Laser</span> is Here
        </>
      ),
      subtitle: "Faster. Safer. More Effective.",
      desc: `Boost your clinic's results with cutting-edge laser technology trusted by global dermatologists.`,
      img: "./image/hero-machine-4.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="home-hero-section relative max-w-[2000px] mx-auto mt-[10px]"
      style={{
        "--color-primary": "#AB2E26",
        "--color-secondary": "#FBF4DB",
        "--color-third": "#FFFBE9",
      }}
    >
      <div className="hero-content flex h-[calc(100vh-135px)] gap-3 p-1">
        {heroCards.map((card, index) => (
          <div
            key={index}
            className={`hero-card flex items-center justify-center rounded-lg cursor-pointer transition-all duration-500 ease-in-out bg-secondary overflow-hidden ${activeIndex === index ? "flex-[9] p-8" : "flex-1"
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className={`hero-left flex flex-col justify-center items-start transition-all duration-500 ${activeIndex === index ? "flex-1 gap-4" : "items-center justify-center"
                }`}
            >
              <div
                className={`badge bg-white text-black font-semibold px-4 py-2 rounded-full text-sm uppercase tracking-wider flex items-center gap-2 shadow-sm transition-transform duration-500 ${activeIndex === index ? "rotate-0 mb-3" : "-rotate-90"
                  }`}
              >
                <FaAward /> {card.badge}
              </div>

              {activeIndex === index && (
                <>
                  <h2 className="title text-4xl font-bold text-black leading-snug">
                    {card.title}
                  </h2>
                  <p className="subtitle font-semibold mb-2">{card.subtitle}</p>
                  <p className="desc text-gray-700 mb-6">{card.desc}</p>

                  <div className="hero-buttons flex gap-4">
                    <a
                      href="#book-demo"
                      className="btn primary flex items-center gap-2 bg-[var(--color-primary)] border-2 border-[var(--color-primary)] text-white font-semibold py-3 px-5 rounded-md text-sm hover:bg-transparent hover:text-[var(--color-primary)] transition-all"
                    >
                      <FaCalendar /> Book a Free Demo
                    </a>
                    <a
                      href="./brochure.pdf"
                      className="btn secondary flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold py-3 px-5 rounded-md text-sm hover:bg-[var(--color-primary)] hover:text-white transition-all"
                    >
                      <FaDownload /> Download Brochure
                    </a>
                  </div>
                </>
              )}
            </div>

            {activeIndex === index && (
              <div className="hero-right flex items-center justify-center">
                <img
                  src={card.img}
                  alt={card.badge}
                  className="max-w-[550px] h-auto animate-float"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
