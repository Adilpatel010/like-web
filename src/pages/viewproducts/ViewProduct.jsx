// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useParams } from "react-router-dom";
// import ProductCategory from "../../data/ProductCategory";

// const ViewProduct = () => {
//     const { id } = useParams();
//     const product = ProductCategory.find(
//         (item) => item.id === Number(id)
//     ) || ProductCategory[0];

//     const [activeTab, setActiveTab] = useState("features");
//     const [activeImg, setActiveImg] = useState(product.images[0]);

//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     }, [id]);

//     return (
//         <>
//             {/* first block */}
//             <section className="w-full py-11 font-poppins">
//                 <div className="container">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//                         {/* LEFT SIDE - IMAGES */}
//                         <div className="flex flex-col items-center">
//                             {/* Main Image */}
//                             <div className="border border-primary rounded-2xl overflow-hidden flex justify-center items-center bg-white p-6 transition-shadow duration-300 w-full">
//                                 <motion.img
//                                     key={activeImg}
//                                     src={activeImg}
//                                     alt={product.modelName}
//                                     className="h-85 w-auto object-contain select-none"
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ duration: 0.4, ease: "easeOut" }}
//                                 />
//                             </div>

//                             {/* Thumbnails */}
//                             <div className="w-full overflow-x-auto py-1 overflow-y-hidden mt-4 scroll-hidden">
//                                 <div className="flex gap-3 flex-nowrap w-max px-2">
//                                     {product.images.map((img, index) => (
//                                         <motion.div
//                                             key={index}
//                                             onMouseEnter={() => setActiveImg(img)}
//                                             onClick={() => setActiveImg(img)}
//                                             className={`flex-shrink-0 w-20 h-20 border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activeImg === img
//                                                 ? "border-[#AB2E26] scale-105"
//                                                 : "border-gray-200 hover:scale-105"
//                                                 }`}
//                                             whileHover={{ scale: 1.05 }}
//                                         >
//                                             <img
//                                                 src={img}
//                                                 alt={`View ${index + 1}`}
//                                                 className="w-full h-full object-contain bg-white p-2"
//                                             />
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-2xl p-4 border border-primary flex flex-col h-[500px]">
//                             <div className="flex mb-6 bg-[#F6EFD3] rounded-full p-1 flex-wrap sm:flex-nowrap">
//                                 {[
//                                     { id: "features", label: "Features" },
//                                     { id: "technical", label: "Technical Parameters" },
//                                 ].map((tab) => (
//                                     <button
//                                         key={tab.id}
//                                         onClick={() => setActiveTab(tab.id)}
//                                         className={`relative flex-1 py-2 sm:py-2.5 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeTab === tab.id
//                                             ? "bg-[#AB2E26] text-white shadow-md cursor-pointer"
//                                             : "text-gray-700 hover:text-[#AB2E26] cursor-pointer"
//                                             }`}
//                                     >
//                                         {activeTab === tab.id && (
//                                             <motion.div
//                                                 layoutId="activeTab"
//                                                 className="absolute inset-0 bg-[#AB2E26] rounded-full z-0"
//                                                 transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                                             />
//                                         )}
//                                         <span className="relative z-10">{tab.label}</span>
//                                     </button>
//                                 ))}
//                             </div>

//                             {/* Tab Content */}
//                             <div className="text-gray-800 text-sm md:text-base flex-1 overflow-y-auto scroll-hidden">
//                                 <AnimatePresence mode="wait">
//                                     {activeTab === "features" && (
//                                         <motion.div
//                                             key="features"
//                                             initial={{ opacity: 0, y: 10 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             exit={{ opacity: 0, y: -10 }}
//                                             transition={{ duration: 0.4 }}
//                                             className="space-y-4 pr-2"
//                                         >
//                                             <p>
//                                                 <span className="font-semibold">Model Name:</span>{" "}
//                                                 {product.modelName}
//                                             </p>
//                                             <p>
//                                                 <span className="font-semibold">Model No:</span>{" "}
//                                                 {product.modelNo}
//                                             </p>
//                                             <p>{product.desc}</p>

//                                             {product.features.map((f, i) => (
//                                                 <div key={i}>
//                                                     <p className="font-semibold">{f.title}:</p>
//                                                     <p>{f.text}</p>
//                                                 </div>
//                                             ))}
//                                         </motion.div>
//                                     )}

//                                     {activeTab === "technical" && (
//                                         <motion.div
//                                             key="technical"
//                                             initial={{ opacity: 0, y: 10 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             exit={{ opacity: 0, y: -10 }}
//                                             transition={{ duration: 0.4 }}
//                                             className="space-y-2 pr-2"
//                                         >
//                                             {Object.entries(product.technical).map(([key, value]) => (
//                                                 <p key={key}>
//                                                     <span className="font-semibold">{key}:</span> {value}
//                                                 </p>
//                                             ))}
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>

//     );
// };

// export default ViewProduct;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import ProductCategory from "../../data/ProductCategory";

const ViewProduct = () => {
    const { id } = useParams();

    const categoryData =
        ProductCategory.find((item) => item.id === Number(id)) || ProductCategory[0];

    const [selectedProduct, setSelectedProduct] = useState(
        categoryData?.products?.[0] || null
    );

    const [activeTab, setActiveTab] = useState("features");
    const [activeImg, setActiveImg] = useState(
        selectedProduct?.images?.[0] || ""
    );

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    useEffect(() => {
        if (selectedProduct?.images?.length) {
            setActiveImg(selectedProduct.images[0]);
        }
    }, [selectedProduct]);

    if (!selectedProduct) {
        return (
            <div className="text-center py-20 text-gray-500 text-lg">
                Product not found.
            </div>
        );
    }
    return (
        <section className="w-full py-11 font-poppins">
            <div className="container">
                {/* <div className="w-full overflow-x-auto scrollbar-hidden mb-10">
                    <div className="flex flex-nowrap justify-center gap-4 px-3 min-w-max">
                        {categoryData.products.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedProduct(p)}
                                className={`px-4 py-2 rounded-full border font-semibold text-sm sm:text-base whitespace-nowrap transition-all ${selectedProduct.modelNo === p.modelNo
                                    ? "bg-[#AB2E26] cursor-pointer text-white border-[#AB2E26]"
                                    : "bg-white cursor-pointer text-gray-700 border-gray-300 hover:border-[#AB2E26]"
                                    }`}
                            >
                                {p.modelName}
                            </button>
                        ))}
                    </div>
                </div> */}

                <div className="w-full bg-secondary sm:bg-white p-4 rounded-full mb-10 overflow-x-auto sm:overflow-x-visible scrollbar-hidden">
                    <div className="flex flex-nowrap sm:flex-wrap justify-center gap-4 px-3 min-w-max sm:min-w-0">
                        {categoryData.products.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedProduct(p)}
                                className={`px-4 py-2 rounded-full border font-semibold text-sm sm:text-base whitespace-nowrap transition-all ${selectedProduct.modelNo === p.modelNo
                                    ? "bg-[#AB2E26] cursor-pointer text-white border-[#AB2E26]"
                                    : "bg-white cursor-pointer text-gray-700 border-gray-300 hover:border-[#AB2E26]"
                                    }`}
                            >
                                {p.modelName}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="flex flex-col items-center">
                        <div className="border border-primary rounded-2xl overflow-hidden flex justify-center items-center bg-white p-6 transition-shadow duration-300 w-full">
                            <motion.img
                                key={activeImg}
                                src={activeImg}
                                alt={selectedProduct.modelName}
                                className="h-85 w-auto object-contain select-none"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </div>

                        <div className="w-full overflow-x-auto py-1 overflow-y-hidden mt-4 scrollbar-hidden">
                            <div className="flex gap-3 flex-nowrap w-max px-2">
                                {selectedProduct.images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        onMouseEnter={() => setActiveImg(img)}
                                        onClick={() => setActiveImg(img)}
                                        className={`flex-shrink-0 w-20 h-20 border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activeImg === img
                                            ? "border-[#AB2E26] scale-105"
                                            : "border-gray-200 hover:scale-105"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={img}
                                            alt={`View ${index + 1}`}
                                            className="w-full h-full object-contain bg-white p-2"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Tabs */}
                    <div className="bg-white rounded-2xl p-3 border border-primary flex flex-col h-[500px] overflow-x-auto scrollbar-hidden">
                        <div className="flex flex-col sm:flex-row mb-6 bg-white sm:bg-[#F6EFD3] rounded-2xl sm:rounded-full p-1 gap-2 sm:gap-0">
                            {[
                                { id: "features", label: "Features" },
                                { id: "technical", label: "Technical Parameters" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex-1 py-2 sm:py-2.5 px-4 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-primary text-white shadow-md cursor-pointer "
                                        : "text-gray-700 hover:text-primary cursor-pointer border border-primary sm:border-0"
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

                        {/* Tab Content */}
                        <div className="text-gray-800 text-sm md:text-base flex-1 overflow-y-auto scroll-hidden">
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
                                            <span className="font-semibold">Model Name:</span>{" "}
                                            {selectedProduct.modelName}
                                        </p>
                                        <p>
                                            <span className="font-semibold">Model No:</span>{" "}
                                            {selectedProduct.modelNo}
                                        </p>
                                        <p className="text-gray-950">{selectedProduct.desc}</p>

                                        <ol className="list-decimal ml-5 space-y-3">
                                            {selectedProduct.features.map((f, i) => (
                                                <li key={i} className="font-semibold text-gray-900">
                                                    {f.title}:
                                                    <ul className="ml-1 mt-1 space-y-1 text-gray-900 font-normal">
                                                        {Array.isArray(f.text) ? (
                                                            f.text.map((line, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="flex items-start gap-2 before:content-['○'] before:text-sm before:text-black"
                                                                >
                                                                    {line}
                                                                </li>
                                                            ))
                                                        ) : (
                                                            <li className="flex items-start gap-2 before:content-['○'] before:text-sm before:text-black">
                                                                {f.text}
                                                            </li>
                                                        )}
                                                    </ul>

                                                </li>
                                            ))}
                                        </ol>
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
                                        <ul className="ml-1 mt-1 space-y-2 text-gray-800 font-normal">
                                            {Object.entries(selectedProduct.technical).map(([key, value]) => (
                                                <li
                                                    key={key}
                                                    className="flex items-start gap-2 before:content-['○'] before:text-sm before:text-black"
                                                >
                                                    <span className="font-semibold">{key}:</span> {value}
                                                </li>
                                            ))}
                                        </ul>
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
