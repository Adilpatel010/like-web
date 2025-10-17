import React from 'react'
import { Link } from 'react-router-dom';

const ViewOven = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <section className='w-full'>
            <div className='max-w-7xl mx-auto px-5 md:px-10 text-center'>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mt-5">
                        OVENS
                        <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </h2>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">

                    <Link to="/viewproduct">
                        <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <div
                                className="relative flex justify-center items-center h-64 
                  bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                  group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                  transition-all duration-700 ease-in-out"
                            >
                                <img
                                    src="https://lemarkzindustries.com/admin/images/1693813669oven.png"
                                    alt="Ovens"
                                    className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 transition-colors uppercase duration-500 group-hover:text-white">
                                   Electric Deck Ovens
                                </h3>
                                <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                    Premium quality equipment for efficient baking
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/viewmixer">
                        <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <div
                                className="relative flex justify-center items-center h-64 
                  bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                  group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                  transition-all duration-700 ease-in-out"
                            >
                                <img
                                    src="https://lemarkzindustries.com/admin/images/16939099693%20Deck%2012%20Tray%20Gas%20Oven.png"
                                    alt="Mixers"
                                    className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 transition-colors uppercase duration-500 group-hover:text-white">
                                   Gas Deck Ovens
                                </h3>
                                <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                    Premium quality equipment for efficient baking
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/viewsheeter">
                        <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <div
                                className="relative flex justify-center items-center h-64 
                  bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                  group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                  transition-all duration-700 ease-in-out"
                            >
                                <img
                                    src="https://lemarkzindustries.com/admin/images/1693909838WP1ST%201.png"
                                    alt="Dough Sheeter"
                                    className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 transition-colors uppercase duration-500 group-hover:text-white">
                                  Pizza Ovens
                                </h3>
                                <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                    Premium quality equipment for efficient baking
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/viewdoughseries">
                        <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <div
                                className="relative flex justify-center items-center h-64 
                  bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                  group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                  transition-all duration-700 ease-in-out"
                            >
                                <img
                                    src="https://lemarkzindustries.com/admin/images/1693909749Convection%20Oven%206%20Tray1.png"
                                    alt="Dough Series"
                                    className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 transition-colors uppercase duration-500 group-hover:text-white">
                                  Convection Ovens
                                </h3>
                                <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                    Premium quality equipment for efficient baking
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/viewdivider">
                        <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <div
                                className="relative flex justify-center items-center h-64 
                  bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                  group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                  transition-all duration-700 ease-in-out"
                            >
                                <img
                                    src="https://lemarkzindustries.com/admin/images/169441637632%20Tray%20Proofers.png"
                                    alt="Dough Divider"
                                    className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 transition-colors uppercase duration-500 group-hover:text-white">
                                   Proofers
                                </h3>
                                <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                    Premium quality equipment for efficient baking
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/viewproofer">
                        <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <div
                                className="relative flex justify-center items-center h-64 
                  bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                  group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                  transition-all duration-700 ease-in-out"
                            >
                                <img
                                    src="https://lemarkzindustries.com/admin/images/1694417459Rotary%20Oven.png"
                                    alt="Proofer"
                                    className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 transition-colors uppercase duration-500 group-hover:text-white">
                                  Rotary Oven
                                </h3>
                                <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                    Premium quality equipment for efficient baking
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default ViewOven
