import React from "react";

export default function Welcome() {
    return (
        <section className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h3 className="text-red-600 font-semibold text-xl">Welcome To</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
                        Lemarkz Industries <br />
                        Kitchen Equipments
                    </h2>
                    <p className="text-gray-700 mt-6 leading-relaxed">
                        Geneva Enterprise Pvt. Ltd. (Lemarkz Industries Kitchen Equipments,
                        Caterbell Industries & Noofasi Impex) was established almost two
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
                        Geneva Enterprise Pvt. Ltd. has wide ranges of bakery & kitchen
                        equipment products.
                    </p>

                    {/* Button */}
                    <button className="mt-6 bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium tracking-wide 
            transition-all duration-300 hover:bg-red-800 hover:scale-105 shadow-lg">
                        READ MORE →
                    </button>
                </div>

                {/* Right Images */}
                <div className="relative flex flex-col items-center md:items-end space-y-4">
                    {/* Top Image */}
                    <img
                        src="src/assets/img/about_img.png"
                        alt="Mixer"
                        className="w-72 h-160 object-cover rounded-lg shadow-md"
                    />


                    {/* Since 1994 Tag */}
                    <div className="absolute bottom-4 left-4 bg-white shadow-xl px-4 py-2 rounded-md">
                        <h3 className="text-red-700 text-2xl font-bold">Since</h3>
                        <h2 className="text-red-700 text-4xl font-extrabold">1994</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
