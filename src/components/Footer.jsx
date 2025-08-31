import { NavLink } from "react-router-dom";
import logo from "../assets/img/lemarks_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#fdf6e3]">
      <div className="max-w-7xl mx-auto md:px-20 px-3 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
             <img src={logo} alt="Logo" className="w-25 md:w-32 -mt-3 -ml-2" />
             <span className="text-2xl font-bold text-red-700"></span>
           </div>
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Geneva Enterprise Pvt. Ltd. (Lemarkz Industries Kitchen Equipments)
            was established almost two decades ago, and is presently operating
            in Navi Mumbai, Maharashtra State of India.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 border-b-2 border-red-700 inline-block">
            LINKS
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700 font-poppins">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-medium" : "hover:text-red-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-medium" : "hover:text-red-700"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-medium" : "hover:text-red-700"
                }
              >
                Our Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-medium" : "hover:text-red-700"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-bold mb-2 border-b-2 border-red-700 inline-block">
            PRODUCTS
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li><NavLink to="/products/ovens" className="hover:text-red-700">Ovens</NavLink></li>
            <li><NavLink to="/products/mixers" className="hover:text-red-700">Mixers</NavLink></li>
            <li><NavLink to="/products/dough-sheeter" className="hover:text-red-700">Dough Sheeter</NavLink></li>
            <li><NavLink to="/products/dough-series" className="hover:text-red-700">Dough Series</NavLink></li>
            <li><NavLink to="/products/kitchen-equipments" className="hover:text-red-700">Kitchen Equipments</NavLink></li>
            <li><NavLink to="/products/showcases" className="hover:text-red-700">Showcases</NavLink></li>
            <li><NavLink to="/products/accessories" className="hover:text-red-700">All Accessories</NavLink></li>
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="text-lg font-bold mb-2 border-b-2 border-red-700 inline-block">
            REACH US
          </h3>
          <div className="mt-3">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.372707956289!2d73.0173493147259!3d19.08833218707913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1803fcd3d81%3A0x51c5f9c3d7eb7b2f!2sLemarkz%20Industries%20Kitchen%20Equipments!5e0!3m2!1sen!2sin!4v1693221234567!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="bg-[#AB2E26] text-center py-3 md:py-6 text-white text-sm">
        © {new Date().getFullYear()} Lemarkz Industries Kitchen Equipments. All rights reserved.
      </div>
    </footer>
  );
}


// import { NavLink } from "react-router-dom";
// import logo from "../assets/img/lemarks_logo.png";


// export default function Footer() {
//   return (
//     <footer className="bg-[#f8f2db] text-black">
//       <div className="max-w-7xl mx-auto md:px-23 px-6 py-15 grid grid-cols-1 md:grid-cols-5 gap-8">
        
//         {/* First Big Column */}
//         <div className="md:col-span-2">
//           <div className="flex items-center space-x-2 mb-4">
//             <img src={logo} alt="Logo" className="w-25 md:w-32" />
//             <span className="text-2xl font-bold text-red-700"></span>
//           </div>
//           <p className="text-sm leading-relaxed">
//             Geneva Enterprise Pvt. Ltd. (Lemarkz Industries Kitchen Equipments) 
//             was established, almost two decades ago, and is presently operating 
//             in Navi Mumbai, Maharashtra State of India.
//           </p>
//         </div>

//         {/* Links */}
//         <div className="md:col-span-1">
//           <h3 className="font-bold text-lg mb-2">LINKS</h3>
//           <ul className="space-y-2 text-sm">
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/about">About Us</NavLink></li>
//             <li><NavLink to="/products">Our Product</NavLink></li>
//             <li><NavLink to="/contact">Contact Us</NavLink></li>
//           </ul>
//         </div>

//         {/* Products */}
//         <div className="md:col-span-1">
//           <h3 className="font-bold text-lg mb-2">PRODUCTS</h3>
//           <ul className="space-y-2 text-sm">
//             <li>Ovens</li>
//             <li>Mixers</li>
//             <li>Dough Sheeter</li>
//             <li>Dough Series</li>
//             <li>Kitchen Equipments</li>
//             <li>Showcases</li>
//             <li>All Accessories</li>
//           </ul>
//         </div>

//         {/* Reach Us */}
//         <div className="md:col-span-1">
//           <h3 className="font-bold text-lg mb-2">REACH US</h3>
//            <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.372707956289!2d73.0173493147259!3d19.08833218707913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1803fcd3d81%3A0x51c5f9c3d7eb7b2f!2sLemarkz%20Industries%20Kitchen%20Equipments!5e0!3m2!1sen!2sin!4v1693221234567!5m2!1sen!2sin"
//               width="100%"
//               height="200"
//               allowFullScreen=""
//               loading="lazy"
//               className="rounded-lg border"
//             ></iframe>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-red-700 text-white text-center py-4 text-sm">
//         © 2025 All Rights Reserved by Lemarkz. Designed by MZ Technologies.
//       </div>
//     </footer>
//   );
// }
