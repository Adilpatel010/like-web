import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const slides = [
        "/src/assets/img/banner/sd.jpg",
        "/src/assets/img/banner/ws.jpg",
        "/src/assets/img/banner/rr.jpg",
        "/src/assets/img/banner/bb.jpg",
        "/src/assets/img/banner/jj.jpg",
    ];

    return (
        <div className="w-full mx-auto">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                speed={1000}
                className="object-cover"
            >
                {slides.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={src}
                            alt={`slide-${i}`}
                            className="w-full h-[400px] md:h-[470px]"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
