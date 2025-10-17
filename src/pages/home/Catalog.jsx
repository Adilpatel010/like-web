import React from 'react'

const Catalog = () => {
    return (
        <div>
            {/* Catalogue Download */}
            <div className="px-4 py-20 bg-[#ab4b44] font-poppins">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 px-7">
                    {/* Title */}
                    <h2 className="text-white text-2xl font-medium md:text-4xl text-center md:text-left md:-mr-20">
                        Download Our Products Catalog
                    </h2>

                    {/* Button (visible on all screens, auto adjust position) */}
                    <div className="flex md:justify-end justify-center md:ml-28">
                        <a
                            href="/Lemarks-Catalogue.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="relative overflow-hidden group text-sm cursor-pointer 
            text-white px-6 py-3 rounded-3xl uppercase font-semibold 
            bg-primary border-white border-2 hover:border-[#FFF2BF] hover:text-primary"
                            >
                                <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-pribg-primary tracking-wide">
                                    Download Catalogue
                                </span>
                                <span
                                    className="absolute left-0 top-0 h-full w-0 bg-[#FFF2BF] 
              transition-all duration-500 ease-in-out group-hover:w-full outline-none"
                                />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog
