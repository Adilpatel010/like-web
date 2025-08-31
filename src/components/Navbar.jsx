import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/img/lemarks_logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 lg:px-15">
                    {/* Logo */}
                    <img src={logo} className="w-25 md:w-32" alt="Logo" />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center space-x-10 items-center">

                        {/* Home */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? "text-[#AB2E26]" : "text-[#b14e47] hover:text-[#AB2E26]"
                                }`
                            }
                        >
                            Home
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        </NavLink>

                        {/* About */}
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? "text-[#AB2E26]" : "text-[#b14e47] hover:text-[#AB2E26]"
                                }`
                            }
                        >
                            About Us
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        </NavLink>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button className="relative flex items-center text-[#b14e47] font-medium uppercase tracking-wider hover:text-[#AB2E26] cursor-pointer group">
                                Products
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                                        }`}
                                />
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                            </button>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md"
                                    >
                                        <NavLink
                                            to="/products/ovens"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Ovens
                                        </NavLink>
                                        <NavLink
                                            to="/products/mixers"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Mixers
                                        </NavLink>
                                        <NavLink
                                            to="/products/dough-sheeter"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Dough Sheeter
                                        </NavLink>
                                        <NavLink
                                            to="/products/dough-series"
                                            className="block px-4 py-2 text-[#b14e47]  hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Dough Series
                                        </NavLink>
                                        <NavLink
                                            to="/products/kitchen-equipments"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Kitchen Equipments
                                        </NavLink>
                                        <NavLink
                                            to="/products/showcases"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Showcases
                                        </NavLink>
                                        <NavLink
                                            to="/products/all-accessories"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            All Accessories
                                        </NavLink>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Contact */}
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? "text-[#AB2E26]" : "text-[#b14e47] hover:text-[#AB2E26]"
                                }`
                            }
                        >
                            Contact Us
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        </NavLink>
                    </div>

                    {/* Catalogue Button (Desktop only) */}
                    {/* <div className="hidden md:block">
                        <a
                            href="/Lemarks-Catalogue.pdf"
                             target="_blank"
                             rel="noopener noreferrer">
                            <button className="bg-[#AB2E26] text-sm cursor-pointer text-white px-6 py-3 rounded-4xl hover:bg-[#FFF2BF] hover:text-[#AB2E26] transition-colors duration-100 uppercase font-medium">
                                Download Catalogue
                            </button></a>
                    </div> */}

                    <div className="hidden md:block">
                        <a
                            href="/Lemarks-Catalogue.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="relative overflow-hidden group text-sm cursor-pointer 
                 text-white px-6 py-3 rounded-3xl uppercase font-medium 
                 bg-[#AB2E26]">

                                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#AB2E26] tracking-wide">
                                    Download Catalogue
                                </span>
                                <span className="absolute left-0 top-0 h-full w-0 bg-[#FFF2BF] 
                   transition-all duration-500 ease-in-out group-hover:w-full outline-none"/>
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-950 focus:outline-none">
                            {isOpen ? <X className="w-7 h-7 mt-1.5" /> : <Menu className="w-7 h-7 mt-1.5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-md overflow-hidden"
                    >
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 mx-3 text-[#777777] font-bold uppercase tracking-[.10em] hover:text-[#AB2E26] hover:bg-gray-100 transition border-b-1 border-gray-200 border-t-1"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 mx-3 text-[#777777] font-bold uppercase tracking-[.10em] hover:text-[#AB2E26] hover:bg-gray-100 transition border-b-1 border-gray-200"
                        >
                            About Us
                        </NavLink>

                        {/* Mobile Dropdown */}
                        <div>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full flex justify-between items-center px-3 py-3 mx-3 text-[#777777] font-bold uppercase tracking-[.10em] hover:text-[#AB2E26] hover:bg-gray-100 transition border-b-1 border-gray-200"
                            >
                                Products
                                <ChevronDown
                                    className={`ml-2 w-4 h-4 mr-3 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="pl-1 mx-3 overflow-hidden bg-[#F9F9F9]"
                                    >
                                        <NavLink
                                            to="/products/ovens"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Ovens
                                        </NavLink>
                                        <NavLink
                                            to="/products/mixers"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Mixers
                                        </NavLink>
                                        <NavLink
                                            to="/products/dough-sheeter"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Dough Sheeter
                                        </NavLink>
                                        <NavLink
                                            to="/products/dough-series"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Dough Series
                                        </NavLink>
                                        <NavLink
                                            to="/products/kitchen-equipments"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Kitchen Equipments
                                        </NavLink>
                                        <NavLink
                                            to="/products/showcases"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            Showcases
                                        </NavLink>
                                        <NavLink
                                            to="/products/all-accessories"
                                            className="block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition"
                                        >
                                            All Accessories
                                        </NavLink>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink
                            to="/contact"
                            className="block px-3 py-3 mx-3 text-[#777777] font-bold uppercase tracking-[.10em] hover:text-[#AB2E26] hover:bg-gray-100 transition"
                        >
                            Contact Us
                        </NavLink>
                        {/* Catalogue Btn (Mobile) */}
                        <div className="px-3 py-3">
                            <a
                                href="/Lemarks-Catalogue.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="relative w-52 overflow-hidden group text-sm cursor-pointer
                 text-white px-4 py-3 rounded-4xl uppercase font-medium 
                 bg-[#AB2E26]"
                                >
                                    {/* Button Text */}
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-[#AB2E26]">
                                        Download Catalogue
                                    </span>

                                    {/* Sliding overlay effect */}
                                    <span
                                        className="absolute left-0 top-0 h-full w-0 bg-[#FFF2BF] 
                   transition-all duration-500 ease-in-out 
                   group-hover:w-full"
                                    />
                                </button>

                            </a>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}


