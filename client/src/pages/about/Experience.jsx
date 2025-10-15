import React from 'react'
import { Package, Mail } from "lucide-react";
import { NavLink } from 'react-router-dom';

const Experience = () => {
    return (
        <section className="w-full py-11 px-6 md:px-12 lg:px-20 font-poppins">
            <div className="max-w-4xl mx-auto md:text-center bg-white shadow-lg rounded-2xl p-7 md:p-10 py-10">

                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Ready to Experience the Difference?
                </h2>

                {/* Subtext */}
                <p className="text-gray-600 mb-8 text-base md:text-lg text-justify md:text-center">
                    Join thousands of happy customers who have made{" "}
                    <span className="text-primary font-semibold">Lemarks</span> their go-to
                    choice for premium solutions. Discover the quality, innovation, and
                    care that set us apart.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                    <NavLink to="/products" className="w-full md:w-auto">
                        <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-primary text-white rounded-xl shadow-md hover:bg-[#901f1a] transition-all duration-500 cursor-pointer hover:scale-105">
                            <Package className="w-5 h-5" />
                            Explore Products
                        </button>
                    </NavLink>

                    <NavLink to="/contact" className="w-full md:w-auto">
                        <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 border-2 border-primary text-primary rounded-xl shadow-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                            <Mail className="w-5 h-5" />
                            Contact Us
                        </button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Experience
