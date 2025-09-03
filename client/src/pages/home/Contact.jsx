import React from 'react'
import { Phone, ArrowRight, Mail, MessageSquare, MessageCircle } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto text-center px-2">
                <div className='px-4 py-10 bg-white md:px-11 font-poppins'>
                    <h2 className='text-center text-2xl md:text-4xl font-bold text-[#AB2E26]'>Want to reach out to us?</h2>
                    <div className="mt-2 w-20 h-1 bg-[#AB2E26] mx-auto rounded-full"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:px-25">
                        <div className='bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300 hover:scale-105 border-2 border-[#f7bab5]'>
                            <div className='flex justify-center'>
                                <Phone className='w-20 h-8 text-[#AB2E26] ' />
                            </div>
                            <p className='text-center mt-3 font-semibold'>Quick Call</p>
                            <p className='text-center text-gray-700 mt-2 text-sm'>Talk to our experts directly</p>
                            <div className='flex justify-center hover:underline cursor-pointer'>
                                <a href="tel:+919136336005" className='text-center text-[#AB2E26] mt-2 font-medium'>Call Now</a>
                                <ArrowRight className='text-[#AB2E26] w-4 mt-2 ml-1' />
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300 hover:scale-105 border-2 border-[#f7bab5]'>
                            <div className='flex justify-center'>
                                <Mail className='w-20 h-8 text-[#AB2E26] ' />
                            </div>
                            <p className='text-center mt-3 font-semibold'>Email Us</p>
                            <p className='text-center text-gray-700 mt-2 text-sm'>Drop us a line anytime</p>
                            <div className='flex justify-center hover:underline cursor-pointer'>
                                <a href="mailto:info@lemarkzindustries.com" className='text-center text-[#AB2E26] mt-2 font-medium '>Email Us</a>
                                <ArrowRight className='text-[#AB2E26] w-4 mt-2 ml-1' />
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition duration-300 hover:scale-105 border-2 border-[#f7bab5]'>
                            <div className='flex justify-center'>
                                <MessageSquare className='w-20 h-8 text-[#AB2E26] ' />
                            </div>
                            <p className='text-center mt-3 font-semibold'> Meassage Box</p>
                            <p className='text-center text-gray-700 mt-2 text-sm'>Send us your sweet thoughts</p>
                            <div className='flex justify-center hover:underline cursor-pointer'>
                                <a href="sms:+919876543210?body=Hello%20Lemarkz%20Team" className='text-center text-[#AB2E26] mt-2 font-medium'>Message</a>
                                <ArrowRight className='text-[#AB2E26] w-4 mt-2 ml-1' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center space-y-6 px-4 py-10 font-poppins">
                    {/* Button */}
                    <NavLink to="/contact">
                        <button
                            className="flex items-center space-x-2 bg-[#AB2E26] text-white font-semibold 
                   px-8 py-4 rounded-3xl shadow-md hover:scale-105 
                   transition-all duration-300 -mt-8 cursor-pointer"
                        >
                            <MessageCircle size={20} />
                            <span>Inquire Now</span>
                            <ArrowRight className='text-white w-5 ml-1' />
                        </button>
                    </NavLink>
                    <div
                        className="w-full max-w-3xl text-center py-3 px-6 rounded-full 
                   bg-[#AB2E26]/10 text-[#AB2E26] font-medium text-sm md:text-base"
                    >
                        Quick Response Guaranteed — We reply within 24 hours with sweetness!
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
