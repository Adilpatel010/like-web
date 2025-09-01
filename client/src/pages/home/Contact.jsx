import React from 'react'
import { Phone, ArrowRight, Mail, MessageSquare, MessageCircle } from 'lucide-react'

const Contact = () => {
    return (
        <div className='px-4 py-10 bg-white md:px-20 font-poppins'>
            <h2 className='text-center text-2xl md:text-5xl font-bold text-[#AB2E26]'>Want to reach out to us?</h2>
            <div className="mt-2 w-20 h-1 bg-[#AB2E26] mx-auto rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 md:px-25">
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
    )
}

export default Contact
