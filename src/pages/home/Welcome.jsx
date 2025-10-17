import React from "react";
import { ArrowUpRight } from "lucide-react";
import about from '../../assets/img/about_img.png';
import { NavLink } from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <section className="w-full bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center font-poppins">
                        {/* Left Content */}
                        <div>
                            <h3 className="text-primary font-bold text-2xl mt-4">Welcome To</h3>
                            <h2 className="text-3xl md:text-4xl border-l-5 border-primary pl-3 text-black mt-1">
                                Lemarkz Industries <br />
                                Kitchen Equipments
                            </h2>
                            <p className="text-gray-950 mt-6 leading-relaxed">
                                <span className="text-[#4d0a05] font-medium"> Geneva Enterprise Pvt. Ltd.</span> <span className="text-primary font-medium"> (Lemarkz Industries Kitchen Equipments,
                                    Caterbell Industries & Noofast Impex) </span> was established almost two
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
                                Geneva Enterprise Pvt. Ltd. (Lemarkz Industries Kitchen Equipments, Caterbell Industries & Noofast Impex) has wide ranges of bakery & kitchen equipments products.
                            </p>

                            {/* Button */}
                            <button>
                                <NavLink to="/about">
                                    <div className="cursor-pointer font-medium mt-6 group relative flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full overflow-hidden transition-colors duration-300 hover:bg-[#FFF2BF] hover:text-primary">

                                        <span className="tracking-wider transform transition-transform duration-300 group-hover:translate-x-5">
                                            READ MORE
                                        </span>
                                        <ArrowUpRight
                                            className="w-5 h-5 transform -translate-x-1 transition-all duration-300 group-hover:-translate-x-28 group-hover:opacity-100"
                                        />
                                    </div>
                                </NavLink>
                            </button>
                        </div>

                        {/* Right Images */}
                        <div className="relative flex flex-col items-center md:items-center space-y-4">
                            {/* Top Image */}
                            <img
                                src={about}
                                alt="Mixer"
                                className="h-100 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
export default Welcome;