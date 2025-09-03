// import React from 'react'

// const OtherOffice = () => {
//     return (
//         <div className='max-w-6xl mx-auto px-6 py-10 font-poppins'>
//             <h2 className="text-3xl md:text-4xl text-center font-bold text-[#AB2E26] -mt-4">
//                 Where to Find us Other Offices
//             </h2>
//             <div className="mt-2 w-20 h-1 bg-[#AB2E26] mx-auto rounded-full"></div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//                 {/* first */}
//                 <div className="relative bg-[#fffbe9] border-2 border-[#AB2E26] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
//                     <span className="absolute -top-4 left-6 bg-[#AB2E26] text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
//                         Other Office
//                     </span>

//                     <h3 className="text-lg md:text-2xl font-bold text-[#AB2E26] mb-2 mt-3">
//                         GENEVA ENTERPRISE PVT.LTD.(W.B.)
//                     </h3>

//                     <h3 className='text-xl font-bold text-[#3b0603] mb-4'>West Bangal, India</h3>

//                     <p className="font-semibold underline text-[#AB2E26] mb-2">ADDRESS:</p>
//                     <p className="text-gray-700 mb-4">
//                         Amta Road, Kabarpara, Behind Central Nursing Home, Opp. St Ann's Day School, Bankra, Howrah, West Bengal- 711403 (India)
//                     </p>

//                     <p className="font-semibold underline text-[#AB2E26] mb-2">EMAIL-ID:</p>
//                     <a
//                         href="mailto:info@lemarkzindustries.com"
//                         className="text-gray-700 hover:text-[#AB2E26] block mb-4"
//                     >
//                         info@lemarkzindustries.com
//                     </a>

//                     <p className="font-semibold underline text-[#AB2E26] mb-2">PHONE NO:</p>
//                     <div className="space-y-1">
//                         <a
//                             href="tel:+919773233149"
//                             className="text-gray-700 hover:text-[#AB2E26] block"
//                         >
//                             +91-9773233149
//                         </a>
//                         <a
//                             href="tel:+917208658838"
//                             className="text-gray-700 hover:text-[#AB2E26] block"
//                         >
//                             +91-7208658838
//                         </a>
//                     </div>
//                 </div>

//                 {/* second */}
//                  <div className="relative bg-[#fffbe9] border-2 border-[#AB2E26] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
//                     <span className="absolute -top-4 left-6 bg-[#AB2E26] text-white text-sm font-semibold px-4 py-1 rounded-md shadow">
//                         Main Office
//                     </span>

//                     <h3 className="text-lg md:text-2xl font-bold text-[#AB2E26] mb-2 mt-3">
//                         GENEVA ENTERPRISE PVT.LTD.
//                     </h3>

//                     <h3 className='text-xl font-bold text-[#3b0603] mb-4'>Mumbai, India</h3>

//                     <p className="font-semibold underline text-[#AB2E26] mb-2">ADDRESS:</p>
//                     <p className="text-gray-700 mb-4">
//                         Plot No.D-339, T.T.C. Industrial Area, (Maharashtra Industrial
//                         Development Corporation), Thane Belapur Road, Turbhe, Navi Mumbai,
//                         Maharashtra - 400 705 (India)
//                     </p>

//                     <p className="font-semibold underline text-[#AB2E26] mb-2">EMAIL-ID:</p>
//                     <a
//                         href="mailto:info@lemarkzindustries.com"
//                         className="text-gray-700 hover:text-[#AB2E26] block mb-4"
//                     >
//                         info@lemarkzindustries.com
//                     </a>

//                     <p className="font-semibold underline text-[#AB2E26] mb-2">PHONE NO:</p>
//                     <div className="space-y-1">
//                         <a
//                             href="tel:+919773233149"
//                             className="text-gray-700 hover:text-[#AB2E26] block"
//                         >
//                             +91-9773233149
//                         </a>
//                         <a
//                             href="tel:+917208658838"
//                             className="text-gray-700 hover:text-[#AB2E26] block"
//                         >
//                             +91-7208658838
//                         </a>
//                     </div>
//                 </div>

//                 </div>
//         </div>
//     )
// }

// export default OtherOffice
import React from "react";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

const OtherOffice = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-poppins">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl text-center font-bold text-[#AB2E26]">
        Where to Find Us – Other Offices
      </h2>
      <div className="mt-2 w-24 h-1 bg-[#AB2E26] mx-auto rounded-full"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Office 1 */}
        <div className="relative bg-[#fffbe9] border-2 border-[#AB2E26] rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
          <span className="absolute -top-4 left-6 bg-[#AB2E26] text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
            Other Office
          </span>

          <div className="flex items-center mb-4 mt-2">
            <Building2 className="text-[#AB2E26] w-6 h-6 mr-2" />
            <h3 className="text-xl md:text-2xl font-bold text-[#AB2E26]">
              GENEVA ENTERPRISE PVT. LTD. (W.B.)
            </h3>
          </div>

          <h3 className="text-lg font-bold text-[#3b0603] mb-4">
            West Bengal, India
          </h3>

          {/* Address */}
          <p className="font-semibold underline text-[#AB2E26] mb-2">ADDRESS:</p>
          <div className="flex items-start mb-4 text-gray-700">
            <MapPin className="w-5 h-5 text-[#AB2E26] mt-1 mr-2" />
            <p>
              Amta Road, Kabarpara, Behind Central Nursing Home, Opp. St Ann's
              Day School, Bankra, Howrah, West Bengal - 711403 (India)
            </p>
          </div>

          {/* Email */}
          <p className="font-semibold underline text-[#AB2E26] mb-2">EMAIL-ID:</p>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-[#AB2E26] mr-2" />
            <a
              href="mailto:info@lemarkzindustries.com"
              className="text-gray-700 hover:text-[#AB2E26]"
            >
              info@lemarkzindustries.com
            </a>
          </div>

          {/* Phone */}
          <p className="font-semibold underline text-[#AB2E26] mb-2">PHONE NO:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-[#AB2E26] mr-2" />
              <a
                href="tel:+919773233149"
                className="text-gray-700 hover:text-[#AB2E26]"
              >
                +91-9773233149
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-[#AB2E26] mr-2" />
              <a
                href="tel:+917208658838"
                className="text-gray-700 hover:text-[#AB2E26]"
              >
                +91-7208658838
              </a>
            </div>
          </div>
        </div>

        {/* Office 2 */}
        <div className="relative bg-[#fffbe9] border-2 border-[#AB2E26] rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
          <span className="absolute -top-4 left-6 bg-[#AB2E26] text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
            Main Office
          </span>

          <div className="flex items-center mb-4 mt-2">
            <Building2 className="text-[#AB2E26] w-6 h-6 mr-2" />
            <h3 className="text-xl md:text-2xl font-bold text-[#AB2E26]">
              GENEVA ENTERPRISE PVT. LTD.
            </h3>
          </div>

          <h3 className="text-lg font-bold text-[#3b0603] mb-4">
            Mumbai, India
          </h3>

          {/* Address */}
          <p className="font-semibold underline text-[#AB2E26] mb-2">ADDRESS:</p>
          <div className="flex items-start mb-4 text-gray-700">
            <MapPin className="w-10 h-5 text-[#AB2E26] mt-1 mr-2" />
            <p>
              Plot No.D-339, T.T.C. Industrial Area, (MIDC), Thane Belapur Road,
              Turbhe, Navi Mumbai, Maharashtra - 400 705 (India)
            </p>
          </div>

          {/* Email */}
          <p className="font-semibold underline text-[#AB2E26] mb-2">EMAIL-ID:</p>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-[#AB2E26] mr-2" />
            <a
              href="mailto:info@lemarkzindustries.com"
              className="text-gray-700 hover:text-[#AB2E26]"
            >
              info@lemarkzindustries.com
            </a>
          </div>

          {/* Phone */}
          <p className="font-semibold underline text-[#AB2E26] mb-2">PHONE NO:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-[#AB2E26] mr-2" />
              <a
                href="tel:+919773233149"
                className="text-gray-700 hover:text-[#AB2E26]"
              >
                +91-9773233149
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-[#AB2E26] mr-2" />
              <a
                href="tel:+917208658838"
                className="text-gray-700 hover:text-[#AB2E26]"
              >
                +91-7208658838
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherOffice;
