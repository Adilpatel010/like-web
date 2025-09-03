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
                    <NavLink to="/"><img src={logo} className="w-25 md:w-32" alt="Logo" />
                    </NavLink>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center space-x-10 items-center">

                        {/* Home */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? "font-semibold text-[#AB2E26]" : "text-[#b14e47] hover:text-[#AB2E26]"
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
                                `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? "font-semibold text-[#AB2E26]" : "text-[#b14e47] hover:text-[#AB2E26]"
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
                            {/* Parent Products Link */}
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `relative flex items-center font-poppins font-medium uppercase tracking-wider cursor-pointer group ${isActive ? "font-semibold text-[#AB2E26]" : "text-[#b14e47] hover:text-[#AB2E26]"
                                    }`
                                }
                            >
                                <span>Products</span>
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                                        }`}
                                />
                                {/* underline effect */}
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                            </NavLink>

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
                                            className={({ isActive }) =>
                                                `block px-4 py-2 transition ${isActive
                                                    ? "bg-[#FFFBE6] text-[#AB2E26] font-semibold"
                                                    : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
                                                }`
                                            }
                                        >
                                            Ovens
                                        </NavLink>
                                        <NavLink
                                            to="/products/mixers"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 transition ${isActive
                                                    ? "bg-[#FFFBE6] text-[#AB2E26] font-semibold"
                                                    : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
                                                }`
                                            }
                                        >
                                            Mixers
                                        </NavLink>
                                        <NavLink
                                            to="/products/dough-sheeter"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 transition ${isActive
                                                    ? "bg-[#FFFBE6] text-[#AB2E26] font-semibold"
                                                    : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
                                                }`
                                            }
                                        >
                                            Dough Sheeter
                                        </NavLink>
                                        <NavLink
                                            to="/products/dough-series"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 transition ${isActive
                                                    ? "bg-[#FFFBE6] text-[#AB2E26] font-semibold"
                                                    : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
                                                }`
                                            }
                                        >
                                            Dough Series
                                        </NavLink>
                                        <NavLink
                                            to="/products/kitchen-equipments"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 transition ${isActive
                                                    ? "bg-[#FFFBE6] text-[#AB2E26] font-semibold"
                                                    : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
                                                }`
                                            }
                                        >
                                            Kitchen Equipments
                                        </NavLink>
                                        <NavLink
                                            to="/products/showcases"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 transition ${isActive
                                                    ? "bg-[#FFFBE6] text-[#AB2E26] font-semibold"
                                                    : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
                                                }`
                                            }
                                        >
                                            Showcases
                                        </NavLink>
                                        <NavLink
                                            to="/products/all-accessories"
                                            className={({ isActive }) =>
                                                `block px-4 py-2 transition ${isActive
                                                    ? "bg-[#FFFBE6] text-[#AB2E26] font-semibold"
                                                    : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
                                                }`
                                            }
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
                                `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? "font-semibold text-[#AB2E26]" : "text-[#b14e47] hover:text-[#AB2E26]"
                                }`
                            }
                        >
                            Contact Us
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                        </NavLink>
                    </div>

                    {/* Catalogue Button (Desktop only) */}
                    <div className="hidden md:block">
                        <a
                            href="/Lemarks-Catalogue.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="relative overflow-hidden group text-sm cursor-pointer 
                 text-white px-6 py-3 rounded-3xl uppercase font-medium 
                 bg-[#AB2E26]">

                                <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-[#AB2E26] tracking-wide">
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
                            className={({ isActive }) =>
                                `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-[.10em] border-b-1 border-gray-200 border-t-1 transition ${isActive ? "font-semibold text-[#AB2E26]" : "text-[#777777] hover:text-[#AB2E26] hover:bg-gray-100"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-[.10em] border-b-1 border-gray-200 transition ${isActive ? "font-semibold text-[#AB2E26]" : "text-[#777777] hover:text-[#AB2E26] hover:bg-gray-100"
                                }`
                            }
                        >
                            About Us
                        </NavLink>

                        {/* Mobile Dropdown */}
                        <div>
                            <div className="flex justify-between items-center border-b border-gray-200">
                                <NavLink
                                    to="/products"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setDropdownOpen(false);
                                    }}
                                    className={({ isActive }) =>
                                        `font-poppins flex-1 px-3 py-3 mx-3 text-[#777777] font-medium uppercase tracking-[.10em] hover:text-[#AB2E26] hover:bg-gray-100 transition ${isActive ? "text-[#AB2E26] font-semibold" : ""
                                        }`
                                    }
                                >
                                    Products
                                </NavLink>

                                {/* Chevron (arrow toggle) */}
                                <button
                                    type="button"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="px-3 py-3 mr-3 text-[#777777] hover:text-[#AB2E26] transition"
                                >
                                    <ChevronDown
                                        className={`w-4 h-4 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-[#AB2E26]" : ""
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Submenu */}
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
                                            onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-[#AB2E26]" : ""
                                                }`
                                            }
                                        >
                                            Ovens
                                        </NavLink>

                                        <NavLink
                                            to="/products/mixers"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-[#AB2E26]" : ""
                                                }`
                                            }
                                        >
                                            Mixers
                                        </NavLink>

                                        <NavLink
                                            to="/products/dough-sheeter"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-[#AB2E26]" : ""
                                                }`
                                            }
                                        >
                                            Dough Sheeter
                                        </NavLink>

                                        <NavLink
                                            to="/products/dough-series"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-[#AB2E26]" : ""
                                                }`
                                            }
                                        >
                                            Dough Series
                                        </NavLink>

                                        <NavLink
                                            to="/products/kitchen-equipments"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-[#AB2E26]" : ""
                                                }`
                                            }
                                        >
                                            Kitchen Equipments
                                        </NavLink>

                                        <NavLink
                                            to="/products/showcases"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-[#AB2E26]" : ""
                                                }`
                                            }
                                        >
                                            Showcases
                                        </NavLink>

                                        <NavLink
                                            to="/products/all-accessories"
                                            onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-[#AB2E26]" : ""
                                                }`
                                            }
                                        >
                                            All Accessories
                                        </NavLink>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-[.10em] transition ${isActive ? "font-semibold text-[#AB2E26]" : "text-[#777777] hover:text-[#AB2E26] hover:bg-gray-100"
                                }`
                            }
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
                 text-white px-4 py-3 mb-4 rounded-4xl uppercase font-medium 
                 bg-[#AB2E26]"
                                >
                                    {/* Button Text */}
                                    <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-[#AB2E26]">
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


