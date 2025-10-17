import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Client = () => {
    return (
        <section className=" bg-gray-100 font-poppins py-10 lg:py-12">
            <div className="container text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                    What Our Clients Say
                    <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </h2>
                <p className="text-gray-600 mb-12">
                    Hear directly from our happy Lemarks customers
                </p>

                {/* Mobile Swiper */}
                <div className="block md:hidden">
                    <Swiper
                        key="test"
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {/* Card 1 */}
                        <SwiperSlide>
                            <div className="bg-white rounded-2xl p-6 text-left transition duration-300 pb-23">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src="/src/assets/img/pro.png"
                                        alt="Sanket Jain"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Sanket Jain</h3>
                                        <p className="text-sm text-gray-500">7 years ago</p>
                                    </div>
                                </div>
                                <div className="flex justify-start mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#FDC700] fill-[#FDC700]" />
                                    ))}
                                </div>
                                <p className="italic text-gray-700">
                                    "Good Quality Bakery Equipment products and Services......"
                                </p>
                                <p className="mt-4 text-sm font-semibold text-primary">
                                    GOOGLE REVIEW
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Card 2 */}
                        <SwiperSlide>
                            <div className="bg-white rounded-2xl p-6 text-left transition duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src="/src/assets/img/pro.png"
                                        alt="Adil Patel"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Adil Patel</h3>
                                        <p className="text-sm text-gray-500">1 year ago</p>
                                    </div>
                                </div>
                                <div className="flex justify-start mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#FDC700] fill-[#FDC700]" />
                                    ))}
                                </div>
                                <p className="italic text-gray-700">
                                    "Lemarks bakery ovens are incredibly reliable. Heat distribution is perfect, and results are always consistent. Perfect for professional bakeries."
                                </p>
                                <p className="mt-4 text-sm font-semibold text-primary">
                                    GOOGLE REVIEW
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Card 3 */}
                        <SwiperSlide>
                            <div className="bg-white rounded-2xl p-6 text-left transition duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src="/src/assets/img/pro.png"
                                        alt="Mohammad Balva"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Mohammad Balva</h3>
                                        <p className="text-sm text-gray-500">1 year ago</p>
                                    </div>
                                </div>
                                <div className="flex justify-start mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#FDC700] fill-[#FDC700]" />
                                    ))}
                                </div>
                                <p className="italic text-gray-700">
                                    "Lemarks Bakery Oven is durable, energy-efficient, and ensures<br /> even baking with precise temperature control. Perfect for daily bakery use."
                                </p>
                                <p className="mt-4 text-sm font-semibold text-primary">
                                    GOOGLE REVIEW
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300">
                        <div className="flex items-start gap-4 mb-4">
                            <img
                                src="/src/assets/img/pro.png"
                                alt="Sanket Jain"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Sanket Jain</h3>
                                <p className="text-sm text-gray-500">7 years ago</p>
                            </div>
                        </div>
                        <div className="flex justify-start mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#FDC700] fill-[#FDC700]" />
                            ))}
                        </div>
                        <p className="italic text-gray-700 pb-12">
                            "Good Quality Bakery Equipment products and Services......"
                        </p>
                        <p className="mt-4 text-sm font-semibold text-primary">
                            GOOGLE REVIEW
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/src/assets/img/pro.png"
                                alt="Adil Patel"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Adil Patel</h3>
                                <p className="text-sm text-gray-500">1 year ago</p>
                            </div>
                        </div>
                        <div className="flex justify-start mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#FDC700] fill-[#FDC700]" />
                            ))}
                        </div>
                        <p className="italic text-gray-700">
                            "Lemarks bakery ovens are incredibly reliable. Heat distribution is perfect, and results are always consistent. Perfect for professional bakeries."
                        </p>
                        <p className="mt-4 text-sm font-semibold text-primary">
                            GOOGLE REVIEW
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/src/assets/img/pro.png"
                                alt="Mohammad Balva"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Mohammad Balva</h3>
                                <p className="text-sm text-gray-500">1 year ago</p>
                            </div>
                        </div>
                        <div className="flex justify-start mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#FDC700] fill-[#FDC700]" />
                            ))}
                        </div>
                        <p className="italic text-gray-700">
                            "Lemarks Bakery Oven is durable, energy-efficient, and ensures even baking with precise temperature control. Perfect for daily bakery use."
                        </p>
                        <p className="mt-4 text-sm font-semibold text-primary">
                            GOOGLE REVIEW
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Client; 