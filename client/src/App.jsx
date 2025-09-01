// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-24">
//           {/* Logo */}
//           {/* <div className="text-2xl font-bold text-blue-600">MyLogo</div> */}
//           <img src="src/assets/img/lemarks_logo.png" className="w-35" alt="" />

//           {/* Desktop Menu */}
//           <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
//             <a href="#" className="text-[#b14e47] font-medium uppercase hover:text-[#AB2E26] -tracking-2
// ">Home</a>
//             <a href="#" className="text-[#b14e47] font-medium uppercase hover:text-[#AB2E26]">About</a>

//             {/* Services Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-[#b14e47] font-medium hover:text-[#AB2E26] uppercase cursor-pointer">
//                 Services
//                 <ChevronDown className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
//               </button>
//               <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Company Service</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">All Services</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">More Service</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Another Service</a>
//               </div>
//             </div>

//             <a href="#" className="text-[#b14e47] font-medium uppercase hover:text-[#AB2E26]">Contact</a>
//             <a href="#" className="text-[#b14e47] font-medium uppercase hover:text-[#AB2E26]">Blog</a>
//           </div>

//           {/* View Catalogue Btn (Desktop only) */}
//           <div className="hidden md:block">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//               View Catalogue
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-[#AB2E26] hover:text-[#AB2E26] focus:outline-none">
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

// {/* Mobile Menu */}
// <AnimatePresence>
//   {isOpen && (
//     <motion.div
//       initial={{ height: 0, opacity: 0 }}
//       animate={{ height: "auto", opacity: 1 }}
//       exit={{ height: 0, opacity: 0 }}
//       transition={{ duration: 0.3 }}
//       className="md:hidden bg-white shadow-md overflow-hidden"
//     >
//       <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
//       <a href="#" className="block px-4 py-2 hover:bg-gray-100">About</a>

//             {/* Mobile Dropdown */}
//             <div>
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100"
//               >
//                 Services
//                 <ChevronDown
//                   className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {dropdownOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="pl-6 overflow-hidden"
//                   >
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">Company Service</a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">All Services</a>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog</a>

//             {/* Catalogue Btn (Mobile) */}
//             <div className="px-4 py-2">
//               <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                 View Catalogue
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-24">
//           {/* Logo */}
//           <img src="src/assets/img/lemarks_logo.png" className="w-36" alt="Logo" />

//           {/* Desktop Menu */}
//           <div className="hidden md:flex flex-1 justify-center space-x-10 items-center">
//             {["Home", "About Us", "Contact us"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="relative text-[#b14e47] font-medium uppercase tracking-wide hover:text-[#AB2E26] transition duration-300 group"
//               >
//                 {item}
//                 {/* Smooth underline */}
//                 <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
//               </a>
//             ))}

//             {/* Services Dropdown */}
//             <div className="relative group">
//               <button className="relative flex items-center text-[#b14e47] font-medium uppercase tracking-wide hover:text-[#AB2E26] cursor-pointer group">
//                 Products
//                 <ChevronDown className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
//                 {/* Underline */}
//                 <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#AB2E26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
//               </button>
//               <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ovens</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Mixers</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dough Sheeter</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dough Series</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kitchen Equipments</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Showcase</a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">All Accessories</a>
//               </div>
//             </div>
//           </div>

//           {/* View Catalogue Btn (Desktop only) */}
//           <div className="hidden md:block">
//             <button className="bg-[#b14e47] text-white px-5 py-2 rounded-lg hover:bg-[#AB2E26] transition tracking-wide uppercase font-medium">
//               View Catalogue
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-[#AB2E26] focus:outline-none">
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white shadow-md overflow-hidden"
//           >
//             {["Home", "About", "Contact", "Blog"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="block px-4 py-2 text-[#b14e47] font-medium uppercase tracking-wide hover:text-[#AB2E26] hover:bg-gray-100 transition"
//               >
//                 {item}
//               </a>
//             ))}

//             {/* Mobile Dropdown */}
//             <div>
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="w-full flex justify-between items-center px-4 py-2 text-[#b14e47] font-medium uppercase tracking-wide hover:text-[#AB2E26] hover:bg-gray-100 transition"
//               >
//                 Services
//                 <ChevronDown
//                   className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
//                     }`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {dropdownOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="pl-6 overflow-hidden"
//                   >
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ovens</a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">Mixers</a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dough Sheeter</a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dough Series</a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kitchen Equipments</a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">Showcase</a>
//                     <a href="#" className="block px-4 py-2 hover:bg-gray-100">All Accessories</a>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Catalogue Btn (Mobile) */}
//             <div className="px-4 py-2">
//               <button className="w-full bg-[#b14e47] text-white px-4 py-2 rounded-lg hover:bg-[#AB2E26] transition tracking-wide uppercase font-medium">
//                 View Catalogue
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home/index'
import About from './pages/about/About'
import './assets/css/slider.css'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App

