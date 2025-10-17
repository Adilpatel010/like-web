import React from "react";

const ContactSection = () => {
    return (
        <section className="w-full bg-[#eebdbb] my-8 relative overflow-hidden">
            <div className="container font-poppins relative z-10">
                <div className="py-7 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Get in Touch
                    </h2>
                    <div className="mt-2 w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
                        Have questions about our products or services? We'd love to hear from you.
                        Fill out the form below, and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="w-full font-poppins py-8 relative" aria-labelledby="contact-form-heading">
                    <div className="max-w-2xl mx-auto relative z-10">
                        <form
                            className="space-y-4"
                            aria-label="Contact form for inquiries and support"
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full rounded-tl-xl rounded-br-xl bg-white px-4 py-4 focus:outline-none focus:ring-0"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-tl-xl rounded-br-xl bg-white px-4 py-4 focus:outline-none focus:ring-0"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Enter your mobile number"
                                    className="w-full rounded-tl-xl rounded-br-xl bg-white px-4 py-4 focus:outline-none focus:ring-0"
                                />
                            </div>

                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message here..."
                                    className="w-full rounded-tl-xl rounded-br-xl bg-white px-4 py-4 focus:outline-none focus:ring-0 resize-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-primary border-2 border-primary hover:bg-transparent hover:text-primary cursor-pointer text-white font-semibold px-8 py-3 rounded-full transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="hidden md:block absolute left-[-10px] top-130 -translate-y-1/2 w-75 h-65 bg-no-repeat bg-contain opacity-80"
                    style={{
                        backgroundImage: "url('https://www.forollyfood.com/images/hand-left-bottom.webp')",
                    }}
                ></div>

                <div
                    className="hidden md:block absolute right-[-10px] top-80 -translate-y-1/2 w-75 h-65 bg-no-repeat bg-contain opacity-80"
                    style={{
                        backgroundImage: "url('https://www.forollyfood.com/images/hand-right-top.webp')",
                    }}
                ></div>
            </div>
        </section>
    );
};

export default ContactSection;
