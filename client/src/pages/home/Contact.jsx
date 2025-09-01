import React from 'react'
import { Phone, ArrowRight, Mail, MessageSquare, MessageCircle } from 'lucide-react'

const Contact = () => {
    return (
        <>
            <div className='px-4 py-10 bg-white md:px-20 font-poppins'>
                <h2 className='text-center text-2xl md:text-4xl font-bold text-[#AB2E26]'>Want to reach out to us?</h2>
                <div className="mt-2 w-20 h-1 bg-[#AB2E26] mx-auto rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:px-25">
                    <div className='bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300 hover:scale-105 border-2 border-[#f7bab5]'>
                        <div className='flex justify-center'>
                            <Phone className='w-20 h-8 text-[#AB2E26] ' />
                        </div>
                        <p className='text-center mt-3 font-semibold'>Quick Call</p>
                        <p className='text-center text-gray-700 mt-2 text-sm'>Talk to our experts directly</p>
                        <div className='flex justify-center hover:underline'>
                            <a href="" className='text-center text-[#AB2E26] mt-2 font-medium'>Call Now</a>
                            <ArrowRight className='text-[#AB2E26] w-4 mt-2 ml-1' />
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300 hover:scale-105 border-2 border-[#f7bab5]'>
                        <div className='flex justify-center'>
                            <Mail className='w-20 h-8 text-[#AB2E26] ' />
                        </div>
                        <p className='text-center mt-3 font-semibold'>Quick Call</p>
                        <p className='text-center text-gray-700 mt-2 text-sm'>Drop us a line anytime</p>
                        <div className='flex justify-center hover:underline'>
                            <a href="" className='text-center text-[#AB2E26] mt-2 font-medium '>Email Us</a>
                            <ArrowRight className='text-[#AB2E26] w-4 mt-2 ml-1' />
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300 hover:scale-105 border-2 border-[#f7bab5]'>
                        <div className='flex justify-center'>
                            <MessageSquare className='w-20 h-8 text-[#AB2E26] ' />
                        </div>
                        <p className='text-center mt-3 font-semibold'> Meassage Box</p>
                        <p className='text-center text-gray-700 mt-2 text-sm'>Send us your sweet thoughts</p>
                        <div className='flex justify-center hover:underline'>
                            <a href="" className='text-center text-[#AB2E26] mt-2 font-medium'>Message</a>
                            <ArrowRight className='text-[#AB2E26] w-4 mt-2 ml-1' />
                        </div>
                    </div>
                </div>
            </div>

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
            bg-[#AB2E26] border-white border-2 hover:border-[#FFF2BF]"
                            >
                                <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-[#AB2E26] tracking-wide">
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
        </>
    )
}

export default Contact
