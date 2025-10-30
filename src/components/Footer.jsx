import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/img/lemarks_logo.png";
import { Instagram, ChevronsUp } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import PopularProductData from "../data/PopularProductData";

export default function Footer() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-secondary font-poppins">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
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
            <div className="mt-6 flex flex-row gap-4">
              <Link
                to="https://www.instagram.com/lema_rkz"
                target="_blank"
                className="flex items-center justify-center w-9 h-9 border border-primary rounded-full text-white bg-primary transition-all duration-300 hover:bg-transparent hover:text-primary hover:border-primary shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </Link>

              <Link
                to="https://wa.me/9773233149"
                target="_blank"
                className="flex items-center justify-center w-9 h-9 border border-primary rounded-full text-white bg-primary transition-all duration-300 hover:bg-transparent hover:text-primary hover:border-primary shadow-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
              </Link>
              <Link
                to="sms:+919773233149" target="_blank"
                className="flex items-center justify-center w-9 h-9 border border-primary rounded-full text-white bg-primary transition-all duration-300 hover:bg-transparent hover:text-primary hover:border-primary shadow-sm"
              >
                <LuMessageCircleMore className="w-5 h-5" />
              </Link>
            </div>

          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-2 inline-block">
              <span className="border-b-2 border-primary pb-1">LIN</span>KS
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
            <h3 className="text-lg font-bold mb-2 inline-block">
              <span className="border-b-2 border-primary pb-1">PRO</span>DUCTS
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {PopularProductData.map((product) => (
                <li key={product.id}>
                  <NavLink
                    to={`/viewpopularproduct/${product.category}`}
                    className="hover:text-red-700 transition-colors duration-200"
                  >
                    {product.dropdown}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-lg font-bold mb-2 inline-block">
              <span className="border-b-2 border-primary pb-1">REA</span>CH US
            </h3>

            <div className="mt-3 relative">
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7211716367692!2d73.02031643875095!3d19.068806955884128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1696c68e417%3A0xcae0f45a8bccb2ff!2sLemarkz%20Industries%20Kitchen%20Equipments!5e0!3m2!1sen!2sin!4v1756831968670!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-[250px] rounded-xl"
                ></iframe>
              </div>

              {/* Optional floating label */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-md text-sm text-primary font-medium">
                📍 Lemarkz Industries
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary px-6 text-center py-3 md:py-6 text-white text-sm">
        © {new Date().getFullYear()} Lemarkz Industries Kitchen Equipments. All rights reserved.
      </div>

      {showBtn && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all z-50 opacity-100 animate-[fadeIn_0.3s_ease-in-out]"
        >
          <ChevronsUp className="w-6 h-6 upDownAnimation" />
        </div>
      )}
    </footer>
  );
}


