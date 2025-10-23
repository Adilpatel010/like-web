import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const Contact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <div className='py-10 font-poppins'>
            <div className="container">
                <h2 className="text-xl md:w-130 flex justify-center items-center md:text-3xl font-medium text-white p-3 rounded-tl-2xl rounded-br-2xl bg-primary mb-17">
                    Kadiwala Group Of Companies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
                        <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
                            Other Office
                        </span>

                        <div className="flex items-center mb-4 mt-2">
                            <h3 className="text-xl md:text-2xl font-bold text-primary">
                                GENEVA ENTERPRISE PVT. LTD.
                            </h3>
                        </div>

                        <h3 className="text-lg font-bold text-[#3b0603] mb-4">
                            Mumbai, India
                        </h3>

                        {/* Address */}
                        <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
                        <div className="flex items-start mb-4 text-gray-700">
                            <MapPin className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                            <p>
                                Plot No.D-339, T.T.C. Industrial Area, (Maharashtra Industrial Development Corporation), Thane Belapur Road, Turbhe, Navi Mumbai, Maharashtra - 400 705 (India)
                            </p>
                        </div>

                        {/* Email */}
                        <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
                        <div className="flex items-center mb-4">
                            <Mail className="w-4 h-4 text-primary mr-2" />
                            <a
                                href="mailto:info@lemarkzindustries.com"
                                className="text-gray-700 hover:text-primary"
                            >
                                info@lemarkzindustries.com
                            </a>
                        </div>

                        {/* Phone */}
                        <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 text-primary mr-2" />
                                <a
                                    href="tel:+919773233149"
                                    className="text-gray-700 hover:text-primary"
                                >
                                    +91-97732 33149
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 text-primary mr-2" />
                                <a
                                    href="tel:+917208658838"
                                    className="text-gray-700 hover:text-primary"
                                >
                                    +91-72086 58838
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden border-1 hover:border-primary">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7211716367692!2d73.02031643875095!3d19.068806955884128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1696c68e417%3A0xcae0f45a8bccb2ff!2sLemarkz%20Industries%20Kitchen%20Equipments!5e0!3m2!1sen!2sin!4v1756831968670!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            className="w-full h-[350px] rounded-xl"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
