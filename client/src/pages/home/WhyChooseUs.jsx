import React from "react";
import {
    ShieldCheck,
    Package,
    DollarSign,
    Cpu,
    Settings,
    Users,
    Headphones,
    BadgeCheck,
    AlertTriangle,
} from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="py-15 bg-gradient-to-b from-[#f8f4ea] via-[#f6f1e1] to-[#f8efde] mt-4 font-poppins">
            <div className="container text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary -mt-3">
                    Why Choose Us
                </h2>
                <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 md:text-lg">
                    Here’s what sets us apart from others in the industry
                </p>

                {/* Feature Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <ShieldCheck className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Quality, Durability, Reliability
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>Crafted with precision using top-notch materials and advanced processes.</li>
                            <li>Built to last, reducing replacements and saving costs.</li>
                            <li>Consistently delivers excellent results for smooth bakery operations.</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <Package className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Wide Product Range
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>From ovens and mixers to proofers, dough sheeters, and more — all under one roof.</li>
                            <li>Equipment tailored to your bakery’s size, from artisanal to large-scale facilities.</li>
                            <li>Seamless expansion and upgrades as your bakery grows.</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <DollarSign className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Competitive Pricing
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>Excellent long-term value without compromising on quality.</li>
                            <li>Our equipment provides excellent long-term value, reducing costs over time.</li>
                            <li>Bundle deals, discounts, and reduced shipping for cost savings.</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <Cpu className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Innovative Technology
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>Stay ahead with the latest advancements in bakery equipment.</li>
                            <li>Access solutions designed to enhance efficiency and operations.</li>
                        </ul>
                    </div>

                    {/* Card 5 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <Settings className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Customizations
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>Tailor-made equipment to fit your unique bakery requirements.</li>
                            <li>Perfect alignment with your workflows and production needs.</li>
                        </ul>
                    </div>

                    {/* Card 6 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <Users className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Expertise
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>A knowledgeable team across a wide spectrum of bakery equipment.</li>
                            <li>Guidance and recommendations for the best equipment choices.</li>
                        </ul>
                    </div>

                    {/* Card 7 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <Headphones className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Customer Support & Service
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>Dedicated assistance with queries, maintenance, and technical issues.</li>
                            <li>Commitment to providing exceptional after-sales support.</li>
                        </ul>
                    </div>

                    {/* Card 8 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <BadgeCheck className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Warranty & Guarantee
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>Comprehensive warranties on all products.</li>
                            <li>Added confidence and security in your investment.</li>
                        </ul>
                    </div>

                    {/* Card 9 */}
                    <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-300 text-left hover:bg-primary hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex justify-center items-center w-14 h-14 bg-primary/10 rounded-xl transition group-hover:bg-white/20">
                                <AlertTriangle className="w-20 h-8 text-primary transition group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                Safety
                            </h3>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm transition group-hover:text-white">
                            <li>Designed and built to meet or exceed industry safety standards.</li>
                            <li>Peace of mind for both you and your staff.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
