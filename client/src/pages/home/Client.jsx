import { Star } from "lucide-react";

export default function ClientReviews() {
    return (
        <section className="py-16 px-4 lg:px-20 bg-gray-50 font-poppins">
            <div className="max-w-6xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#AB2E26]">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 mb-12">
                    Hear directly from our happy Lemarks customers
                </p>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/src/assets/img/pro.png"
                                alt=""
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Sanket Jain</h3>
                                <p className="text-sm text-gray-500">7 years ago</p>
                            </div>
                        </div>
                        <div className="flex text-[#FDC700] mb-3">
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                        </div>
                        <p className="italic text-gray-700">
                            "Lemarks bakery ovens are incredibly reliable. Heat distribution is
                            perfect, and the results are always consistent."
                        </p>
                        <p className="mt-4 text-sm font-semibold text-[#AB2E26]">
                            GOOGLE REVIEW
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/src/assets/img/pro.png"
                                alt=""
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Adil Patel</h3>
                                <p className="text-sm text-gray-500">1 year ago</p>
                            </div>
                        </div>
                        <div className="flex text-[#FDC700] mb-3">
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                        </div>
                        <p className="italic text-gray-700">
                            "Amazing experience! The ovens are durable, hygienic, and easy to
                            maintain. Perfect for bakeries of all sizes."
                        </p>
                        <p className="mt-4 text-sm font-semibold text-[#AB2E26]">
                            GOOGLE REVIEW
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/src/assets/img/pro.png"
                                alt=""
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Mohammad Balva</h3>
                                <p className="text-sm text-gray-500">1 year ago</p>
                            </div>
                        </div>
                        <div className="flex text-[#FDC700] mb-3">
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                            <Star className="w-5 h-5 fill-[#FDC700]" />
                        </div>
                        <p className="italic text-gray-700">
                            "The Lemarks bakery oven is truly a masterpiece. Energy-efficient
                            and reliable – my production has become smoother than ever!"
                        </p>
                        <p className="mt-4 text-sm font-semibold text-[#AB2E26]">
                            GOOGLE REVIEW
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
