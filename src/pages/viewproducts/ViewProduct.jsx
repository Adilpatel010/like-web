import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ViewProduct = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const [activeTab, setActiveTab] = useState("features");
    const images = [
        "http://localhost:5173/src/assets/img/oven.png",
        "https://lemarkzindustries.com/admin/images/1693912872DKL-20.png",
        "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
        "https://lemarkzindustries.com/admin/images/1693911153DKL-101.png",
        "https://lemarkzindustries.com/admin/images/1694244367DKL-26.png",
    ];

    const [activeImg, setActiveImg] = useState(images[0]);

    return (
        <section className="w-full py-14">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left Image */}
                    <div className="flex flex-col items-center">
                        {/* Main Image */}
                        <div className="border border-primary rounded-2xl overflow-hidden flex justify-center items-center bg-white p-6 transition-shadow duration-300 w-full">
                            <motion.img
                                key={activeImg} 
                                src={activeImg}
                                alt="Oven"
                                className="h-85 w-auto object-contain select-none"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex justify-center gap-3 mt-4">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    onMouseEnter={() => setActiveImg(img)}
                                    onClick={() => setActiveImg(img)}
                                    className={`border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activeImg === img ? "border-[#AB2E26] scale-105" : "border-gray-200 hover:scale-105"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img
                                        src={img}
                                        alt={`Oven view ${index + 1}`}
                                        className="h-20 w-20 object-contain bg-white p-2"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Tabs */}
                    <div className="bg-white rounded-2xl p-4 border border-primary flex flex-col h-[500px]">
                        {/* Tab Buttons */}
                        <div className="flex mb-6 bg-[#F6EFD3] rounded-full p-1">
                            {[
                                { id: "features", label: "Features" },
                                { id: "technical", label: "Technical Parameters" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex-1 py-2.5 font-semibold rounded-full transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-[#AB2E26] text-white shadow-md cursor-pointer"
                                        : "text-gray-700 hover:text-[#AB2E26] cursor-pointer"
                                        }`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-[#AB2E26] rounded-full z-0"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Smooth Animated Tab Content */}
                        <div className="text-gray-800 text-sm md:text-base flex-1 overflow-y-auto custom-scrollbar">
                            <AnimatePresence mode="wait">
                                {activeTab === "features" && (
                                    <motion.div
                                        key="features"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-4 pr-2"
                                    >
                                        <p>
                                            <span className="font-semibold">Model Name:</span> 1 Deck 1 Tray Electric Oven
                                        </p>
                                        <p>
                                            <span className="font-semibold">Model No:</span> DKL-101
                                        </p>
                                        <p>
                                            A 1 Deck 1 Tray Electric Oven is a kitchen appliance designed for baking,
                                            roasting, and cooking a variety of dishes using electricity as the primary
                                            source of heat. Its compact size and electric heating make it suitable for
                                            small-scale cooking applications.
                                        </p>
                                        <p className="font-semibold">Applications:</p>
                                        <p>
                                            Used in bakeries, cafes, restaurants, and homes for baking cakes, cookies,
                                            pastries, and small roasts.
                                        </p>
                                        <p className="font-semibold">Maintenance:</p>
                                        <p>
                                            Regular cleaning and maintenance ensure the oven remains efficient and hygienic.
                                        </p>
                                        <p>
                                            Cleaning the trays after every use prevents residue buildup. Always unplug the
                                            oven before cleaning to avoid electric shock. For long-term durability, ensure
                                            ventilation around the oven and avoid overloading.
                                        </p>
                                        <p>
                                            Replacement parts like heating coils, thermostats, and door gaskets are easily
                                            available, making it a convenient appliance for long-term use.
                                        </p>
                                    </motion.div>
                                )}

                                {activeTab === "technical" && (
                                    <motion.div
                                        key="technical"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-2 pr-2"
                                    >
                                        <p>
                                            <span className="font-semibold">Voltage:</span> 220V 50Hz
                                        </p>
                                        <p>
                                            <span className="font-semibold">Power:</span> 3.2 kW/h
                                        </p>
                                        <p>
                                            <span className="font-semibold">Dimension (L×W×H):</span> 645×510×155 mm
                                        </p>
                                        <p>
                                            <span className="font-semibold">Net Weight:</span> 70 KGS
                                        </p>
                                        <p>
                                            <span className="font-semibold">Temperature Range:</span> 50°C – 300°C
                                        </p>
                                        <p>
                                            <span className="font-semibold">Tray Size:</span> 400×600 mm
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewProduct;
