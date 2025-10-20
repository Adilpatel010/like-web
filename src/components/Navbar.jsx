// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import logo from "../assets/img/lemarks_logo1.png";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="container">
//         {/* Navbar container */}
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <NavLink to="/">
//             <img src={logo} className="w-25 md:w-28" alt="Logo" />
//           </NavLink>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex flex-1 justify-center space-x-10 items-center">
//             {/* Home */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive
//                   ? " text-primary"
//                   : "text-primary hover:text-primary"
//                 }`
//               }
//             >
//               Home
//               <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
//             </NavLink>

//             {/* About */}
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive
//                   ? "font-semibold text-primary"
//                   : "text-[#b14e47] hover:text-primary"
//                 }`
//               }
//             >
//               About Us
//               <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
//             </NavLink>

//             {/* Products Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setProductsOpen(true)}
//               onMouseLeave={() => setProductsOpen(false)}
//             >
//               <NavLink
//                 to="/products"
//                 className={({ isActive }) =>
//                   `relative flex items-center font-poppins font-medium uppercase tracking-wider cursor-pointer group ${isActive
//                     ? "font-semibold text-primary"
//                     : "text-[#b14e47] hover:text-primary"
//                   }`
//                 }
//               >
//                 <span>Products</span>
//                 <ChevronDown
//                   className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
//                     }`}
//                 />
//                 <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
//               </NavLink>

//               {/* Dropdown Menu */}
//               <AnimatePresence>
//                 {productsOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md"
//                   >
//                     {[
//                       "ovens",
//                       "mixers",
//                       "dough-sheeter",
//                       "dough-series",
//                       "kitchen-equipments",
//                       "showcases",
//                       "all-accessories",
//                     ].map((item) => (
//                       <NavLink
//                         key={item}
//                         to={`/products/${item}`}
//                         className={({ isActive }) =>
//                           `block px-4 py-2 transition ${isActive
//                             ? "bg-[#FFFBE6] text-primary font-semibold"
//                             : "text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6]"
//                           }`
//                         }
//                       >
//                         {item
//                           .split("-")
//                           .map(
//                             (word) =>
//                               word.charAt(0).toUpperCase() + word.slice(1)
//                           )
//                           .join(" ")}
//                       </NavLink>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Contact */}
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive
//                   ? "font-semibold text-primary"
//                   : "text-[#b14e47] hover:text-primary"
//                 }`
//               }
//             >
//               Contact Us
//               <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
//             </NavLink>
//           </div>

//           {/* Catalogue Button (Desktop) */}
//           <div className="hidden lg:block">
//             <a
//               href="/Lemarks-Catalogue.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="relative overflow-hidden group text-sm cursor-pointer text-white px-6 py-3 rounded-3xl uppercase font-medium bg-primary">
//                 <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-primary tracking-wide">
//                   Download Catalogue
//                 </span>
//                 <span className="absolute left-0 top-0 h-full w-0 bg-[#FFF2BF] transition-all duration-500 ease-in-out group-hover:w-full outline-none" />
//               </button>
//             </a>
//           </div>

//           {/* Hamburger Menu (Mobile & Tablet ≤768px) */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-950 focus:outline-none"
//             >
//               {isOpen ? (
//                 <X className="w-7 h-7 mt-1.5" />
//               ) : (
//                 <Menu className="w-7 h-7 mt-1.5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Animated) */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-white shadow-md overflow-hidden"
//           >
//             {[
//               { name: "Home", link: "/" },
//               { name: "About Us", link: "/about" },
//             ].map((item) => (
//               <NavLink
//                 key={item.link}
//                 to={item.link}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-wider border-b border-gray-200 transition ${isActive
//                     ? "font-semibold text-primary"
//                     : "text-[#777777] hover:text-primary hover:bg-gray-100"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             {/* Mobile Dropdown */}
//             <div>
//               <div className="flex justify-between items-center border-b border-gray-200">
//                 <NavLink
//                   to="/products"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setDropdownOpen(false);
//                   }}
//                   className={({ isActive }) =>
//                     `font-poppins flex-1 px-3 py-3 mx-3 text-[#777777] font-medium uppercase tracking-wider hover:text-primary hover:bg-gray-100 transition ${isActive ? "text-primary font-semibold" : ""
//                     }`
//                   }
//                 >
//                   Products
//                 </NavLink>

//                 <button
//                   type="button"
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="px-3 py-3 mr-3 text-[#777777] hover:text-primary transition"
//                 >
//                   <ChevronDown
//                     className={`w-4 h-4 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-primary" : ""
//                       }`}
//                   />
//                 </button>
//               </div>

//               {/* Submenu */}
//               <AnimatePresence>
//                 {dropdownOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="pl-1 mx-3 overflow-hidden bg-[#F9F9F9]"
//                   >
//                     {[
//                       "ovens",
//                       "mixers",
//                       "dough-sheeter",
//                       "dough-series",
//                       "kitchen-equipments",
//                       "showcases",
//                       "all-accessories",
//                     ].map((item) => (
//                       <NavLink
//                         key={item}
//                         to={`/products/${item}`}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setDropdownOpen(false);
//                         }}
//                         className={({ isActive }) =>
//                           `block px-4 py-2 text-[#b14e47] hover:text-gray-900 hover:bg-[#FFFBE6] transition ${isActive ? "font-semibold text-primary" : ""
//                           }`
//                         }
//                       >
//                         {item
//                           .split("-")
//                           .map(
//                             (word) =>
//                               word.charAt(0).toUpperCase() + word.slice(1)
//                           )
//                           .join(" ")}
//                       </NavLink>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Contact */}
//             <NavLink
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-wider transition ${isActive
//                   ? "font-semibold text-primary"
//                   : "text-[#777777] hover:text-primary hover:bg-gray-100"
//                 }`
//               }
//             >
//               Contact Us
//             </NavLink>

//             {/* Catalogue Btn (Mobile) */}
//             <div className="px-3 py-3">
//               <a
//                 href="/Lemarks-Catalogue.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="relative w-52 overflow-hidden group text-sm cursor-pointer text-white px-4 py-3 mb-4 rounded-4xl uppercase font-medium bg-primary">
//                   <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-primary">
//                     Download Catalogue
//                   </span>
//                   <span className="absolute left-0 top-0 h-full w-0 bg-[#FFF2BF] transition-all duration-500 ease-in-out group-hover:w-full" />
//                 </button>
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }



import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/img/lemarks_logo1.png";
// import { FaWhatsapp } from "react-icons/fa6";
import PopularProductData from "../data/PopularProductData";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDropdownOpen(false);
    }
  };
  return (
    <>
      <header className="fixed z-50 w-full">
        <div className="bg-primary w-full">
          <div className="container">
            <div className="flex flex-row justify-between items-center h-10 sm:h-12 py-2 sm:py-0 gap-2 sm:gap-0">

              {/* Email */}
              <div>
                <Link
                  to="mailto:info@lemarkzindustries.com"
                  className="text-white text-sm sm:text-base transition-all duration-300 hover:text-secondary flex items-center gap-2"
                >
                  <span className="font-medium tracking-wide">info@lemarkzindustries.com</span>
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 sm:gap-5 text-white text-lg sm:text-xl">
                <Link
                  to="#"
                  onClick={() => window.open("https://www.instagram.com/lema_rkz", "_blank")}
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  <FaInstagram />
                </Link>


                <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
                  <FaLinkedin />
                </Link>

                <Link
                  to="#"
                  onClick={() =>
                    window.open("https://wa.me/9773233149", "_blank")
                  }
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  <FaWhatsapp />
                </Link>

              </div>
            </div>
          </div>
        </div>

        <nav className="bg-white shadow-md">
          <div className="container">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <NavLink to="/">
                <img src={logo} className="w-25 md:w-28" alt="Logo" />
              </NavLink>

              {/* Desktop Menu */}
              <div className="hidden lg:flex flex-1 justify-center space-x-10 items-center">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? "text-primary" : "text-black hover:text-primary transition-all duration-200"
                    }`
                  }
                >
                  Home
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? " text-primary" : "text-black hover:text-primary transition-all duration-200"
                    }`
                  }
                >
                  About Us
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </NavLink>

                {/* Products Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `relative flex items-center font-poppins font-medium uppercase tracking-wider cursor-pointer group select-none transition duration-300 ${isActive ? "text-primary" : "text-black hover:text-primary transition-all duration-200"
                      }`
                    }
                  >
                    Products

                    <ChevronDown
                      className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${productsOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </NavLink>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-md overflow-hidden transform transition-all duration-300 ease-in-out ${productsOpen
                      ? "opacity-100 scale-100 translate-y-0 visible"
                      : "opacity-0 scale-95 -translate-y-2 invisible"
                      }`}
                  >
                    {PopularProductData.map((popular) => (
                      <NavLink
                        key={popular.id}
                        onClick={() => setProductsOpen(false)}
                        to={`/viewpopularproduct/${popular.category}`}
                        className={({ isActive }) =>
                          `block px-4 py-2 transition-all duration-200 ${isActive
                            ? "bg-[#FFFBE6] text-primary"
                            : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                          }`
                        }
                      >
                        {popular.dropdown}
                      </NavLink>
                    ))}

                    {/* <NavLink
                      to="/products/mixers"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition-all duration-200 ${isActive
                          ? "bg-[#FFFBE6] text-primary "
                          : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                        }`
                      }
                    >
                      Mixers
                    </NavLink>

                    <NavLink
                      to="/products/dough-sheeter"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition-all duration-200 ${isActive
                          ? "bg-[#FFFBE6] text-primary "
                          : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                        }`
                      }
                    >
                      Dough Sheeter
                    </NavLink>

                    <NavLink
                      to="/products/dough-series"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition-all duration-200 ${isActive
                          ? "bg-[#FFFBE6] text-primary "
                          : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                        }`
                      }
                    >
                      Dough Series
                    </NavLink>

                    <NavLink
                      to="/products/kitchen-equipments"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition-all duration-200 ${isActive
                          ? "bg-[#FFFBE6] text-primary "
                          : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                        }`
                      }
                    >
                      Kitchen Equipments
                    </NavLink>

                    <NavLink
                      to="/products/showcases"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition-all duration-200 ${isActive
                          ? "bg-[#FFFBE6] text-primary "
                          : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                        }`
                      }
                    >
                      Showcases
                    </NavLink>

                    <NavLink
                      to="/products/all-accessories"
                      className={({ isActive }) =>
                        `block px-4 py-2 transition-all duration-200 ${isActive
                          ? "bg-[#FFFBE6] text-primary "
                          : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                        }`
                      }
                    >
                      All Accessories
                    </NavLink> */}
                  </div>
                </div>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-poppins relative font-medium uppercase tracking-wider transition duration-300 group ${isActive ? " text-primary" : "text-black hover:text-primary"
                    }`
                  }
                >
                  Contact Us
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </NavLink>
              </div>

              {/* Catalogue Button */}
              <div className="hidden lg:block">
                <a href="/Lemarks-Catalogue.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="relative overflow-hidden group text-sm cursor-pointer text-white px-6 py-3 rounded-3xl uppercase font-medium bg-primary">
                    <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-primary tracking-wide">
                      Download Catalogue
                    </span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-[#FFF2BF] transition-all duration-500 ease-in-out group-hover:w-full outline-none" />
                  </button>
                </a>
              </div>

              {/* Hamburger Menu */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-950 transition-all duration-300 focus:outline-none relative w-7 h-7 mt-1.5"
                  aria-label="Toggle menu"
                >
                  <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6">
                    <span
                      className={`block absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                        }`}
                    />
                    <span
                      className={`block absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                        }`}
                    />
                    <span
                      className={`block absolute h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                        }`}
                    />
                  </div>
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
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden bg-white shadow-md overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-wider border-b border-gray-200 transition-all duration-300 ${isActive ? " text-primary" : "text-gray-800 hover:text-primary hover:bg-gray-100"
                      }`
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-wider border-b border-gray-200 transition-all duration-300 ${isActive ? " text-primary" : "text-gray-800 hover:text-primary hover:bg-gray-100"
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                  <div className="flex justify-between items-center px-3 mx-3 border-b border-gray-200">
                    <NavLink
                      to="/products"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `font-poppins flex-1 py-3 font-medium uppercase tracking-wider transition-all duration-300 ${isActive
                          ? "text-primary"
                          : "text-gray-800 hover:text-primary hover:bg-gray-100"
                        }`
                      }
                    >
                      Products
                    </NavLink>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(!dropdownOpen);
                      }}
                      className="py-3 px-2 -mr-2 text-gray-800 hover:text-primary transition-all duration-300"
                    >
                      <motion.div
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown
                          className={`w-4 h-4 ${dropdownOpen ? "text-primary" : ""}`}
                        />
                      </motion.div>
                    </button>
                  </div>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mx-3 overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-1 space-y-1 py-2"
                        >
                          {PopularProductData.map((popular) => (
                            <NavLink
                              key={popular.id}
                              onClick={() => {
                                setDropdownOpen(false);
                                setIsOpen(false);
                              }}
                              to={`/viewpopularproduct/${popular.category}`}
                              className={({ isActive }) =>
                                `block px-4 py-2 transition-all duration-200 ${isActive
                                  ? "bg-[#FFFBE6] text-primary"
                                  : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                                }`
                              }
                            >
                              {popular.dropdown}
                            </NavLink>
                          ))}

                          {/* <NavLink
                            to="/products/mixers"
                            onClick={() => {
                              setDropdownOpen(false);
                              setIsOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition-all duration-300 rounded ${isActive
                                ? " text-primary bg-[#FFFBE6]"
                                : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                              }`
                            }
                          >
                            Mixers
                          </NavLink>

                          <NavLink
                            to="/products/dough-sheeter"
                            onClick={() => {
                              setDropdownOpen(false);
                              setIsOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition-all duration-300 rounded ${isActive
                                ? " text-primary bg-[#FFFBE6]"
                                : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                              }`
                            }
                          >
                            Dough Sheeter
                          </NavLink>

                          <NavLink
                            to="/products/dough-series"
                            onClick={() => {
                              setDropdownOpen(false);
                              setIsOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition-all duration-300 rounded ${isActive
                                ? " text-primary bg-[#FFFBE6]"
                                : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                              }`
                            }
                          >
                            Dough Series
                          </NavLink>

                          <NavLink
                            to="/products/kitchen-equipments"
                            onClick={() => {
                              setDropdownOpen(false);
                              setIsOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition-all duration-300 rounded ${isActive
                                ? " text-primary bg-[#FFFBE6]"
                                : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                              }`
                            }
                          >
                            Kitchen Equipments
                          </NavLink>

                          <NavLink
                            to="/products/showcases"
                            onClick={() => {
                              setDropdownOpen(false);
                              setIsOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition-all duration-300 rounded ${isActive
                                ? " text-primary bg-[#FFFBE6]"
                                : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                              }`
                            }
                          >
                            Showcases
                          </NavLink>

                          <NavLink
                            to="/products/all-accessories"
                            onClick={() => {
                              setDropdownOpen(false);
                              setIsOpen(false);
                            }}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition-all duration-300 rounded ${isActive
                                ? " text-primary bg-[#FFFBE6]"
                                : "text-primary hover:text-gray-900 hover:bg-[#FFFBE6]"
                              }`
                            }
                          >
                            All Accessories
                          </NavLink> */}

                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-poppins block px-3 py-3 mx-3 font-medium uppercase tracking-wider border-b border-gray-200 transition-all duration-300 ${isActive ? " text-primary" : "text-gray-800 hover:text-primary hover:bg-gray-100"
                      }`
                    }
                  >
                    Contact Us
                  </NavLink>

                  <div className="px-3 py-3">
                    <a href="/Lemarks-Catalogue.pdf" target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-52 overflow-hidden group text-sm cursor-pointer text-white px-4 py-3 mb-4 rounded-4xl uppercase font-medium bg-primary"
                      >
                        <span className="font-poppins relative z-10 transition-colors duration-500 group-hover:text-primary">
                          Download Catalogue
                        </span>
                        <span className="absolute left-0 top-0 h-full w-0 bg-[#FFF2BF] transition-all duration-500 ease-in-out group-hover:w-full" />
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </nav >
      </header>
    </>
  );
}
