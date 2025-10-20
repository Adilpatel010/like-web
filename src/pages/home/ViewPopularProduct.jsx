import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductCategory from "../../data/ProductCategory";

export default function ViewPopularProduct() {
    const { category } = useParams();
    window.scrollTo({ top: 0, behavior: "smooth" });

    const filteredProducts = ProductCategory.filter(
        (item) => item.category === category
    );

    return (
        <section className="py-10 bg-[#f9f6ec] font-poppins">
            <div className="container mx-auto text-center">
                <h2 className="inline-block text-3xl font-semibold text-white bg-primary py-2 px-6 rounded-tl-2xl rounded-br-2xl capitalize">
                    {category.replace(/-/g, " ")} Products
                </h2>


                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <Link key={item.id} to={`/viewproduct/${item.id}`}>
                                <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                                    <div
                                        className="relative flex justify-center items-center h-64 
                    bg-gradient-to-t from-[#faf3dd] to-[#fdfbf3] 
                    group-hover:from-[#f8e9b6] group-hover:to-[#fff9e6] 
                    transition-all duration-700 ease-in-out"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="relative z-10 h-52 object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-5 bg-[#fbeec0] transition-colors duration-500 group-hover:bg-primary border-t border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900 uppercase transition-colors duration-500 group-hover:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs mt-1 text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500 mt-6">No products found for this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
