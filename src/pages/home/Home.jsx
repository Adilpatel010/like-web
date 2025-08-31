import React from "react";

export default function Home() {
    return (
        <div className="font-poppins">
            {/* Navbar */}
            <nav className="bg-[#AB2E26] text-white px-6 py-4 flex justify-between items-center shadow-md">
                <h1 className="text-xl font-bold">Lemarks</h1>
                <ul className="hidden md:flex space-x-6 font-medium">
                    <li><a href="/" className="hover:text-[#FFF2BF] transition">Home</a></li>
                    <li><a href="/about" className="hover:text-[#FFF2BF] transition">About</a></li>
                    <li><a href="/products" className="hover:text-[#FFF2BF] transition">Products</a></li>
                    <li><a href="/contact" className="hover:text-[#FFF2BF] transition">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="bg-gray-100 text-center py-20 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#AB2E26] mb-4">
                    Welcome to Lemarks Industries
                </h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
                    High-quality kitchen equipment designed to make your culinary journey easier.
                </p>
                <a
                    href="/Lemarks-Catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#AB2E26] text-white px-6 py-3 rounded-3xl hover:bg-[#FFF2BF] hover:text-[#AB2E26] transition font-medium"
                >
                    Download Catalogue
                </a>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 md:px-20">
                <h3 className="text-3xl font-semibold text-center text-[#AB2E26] mb-10">About Us</h3>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center">
                    At Lemarks, we specialize in premium kitchen equipment including ovens, mixers,
                    dough sheeters, and more. With years of expertise, we bring innovation and
                    reliability to your kitchen.
                </p>
            </section>

            {/* Footer */}
            <footer className="bg-[#AB2E26] text-white text-center py-6 mt-10">
                <p className="text-sm">&copy; {new Date().getFullYear()} Lemarks Industries. All rights reserved.</p>
            </footer>
        </div>
    );
}
