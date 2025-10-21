import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";


const OtherOffice = () => {
  return (
    <div className="py-8">
      <div className="container font-poppins">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-primary">
          Where to Find Us – Other Offices
        </h2>
        <div className="mt-2 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Office 1 */}
          <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300">
            {/* Tag */}
            <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow-md">
              Other Office
            </span>

            {/* Title */}
            <div className="flex items-center mb-3 mt-3">
              <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight">
                GENEVA ENTERPRISE PVT. LTD. (W.B.)
              </h3>
            </div>

            <h4 className="text-lg font-semibold text-[#3b0603] mb-4">
              West Bengal, India
            </h4>

            {/* Address */}
            <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
            <div className="flex items-start mb-4 text-gray-700">
              <MapPin className="w-13 h-4 text-primary mt-1 mr-2" />
              <p>
                Amta Road, Kabarpara, Behind Central Nursing Home, Opp. St Ann's Day School,
                Bankra, Howrah, West Bengal - 711403 (India)
              </p>
            </div>

            {/* Email */}
            <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
            <div className="flex items-center mb-4 text-gray-700">
              <Mail className="w-4 h-4 text-primary mr-2" />
              <a
                href="mailto:info@lemarkzindustries.com"
                className="hover:text-primary transition-colors"
              >
                info@lemarkzindustries.com
              </a>
            </div>

            {/* Phone */}
            <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a href="tel:+917400168830" className="hover:text-primary transition-colors">
                  +91-74001 68830
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a href="tel:+917211156287" className="hover:text-primary transition-colors">
                  +91-72111 56287
                </a>
              </div>
            </div>
          </div>


          {/* Office 2 */}
          <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
            <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
              Other Office
            </span>

            <div className="flex items-center mb-4 mt-2">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                LEMARKZ INDUSTRIES KITCHEN EQUIPMENTS
              </h3>
            </div>

            <h3 className="text-lg font-bold text-[#3b0603] mb-4">
              Gujarat, India
            </h3>

            {/* Address */}
            <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
            <div className="flex items-start mb-4 text-gray-700">
              <MapPin className="w-13 h-4 text-primary mt-1 mr-2" />
              <p>
                Bhagat Estate, Sanand Sarkhej Road, Near Sarkhej Railway Crossing, Sarkhej, Ahmedabad, Gujarat - 382 210 (India)
              </p>
            </div>

            {/* Email */}
            <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
            <div className="flex items-center mb-4">
              <Mail className="w-4 h-4 text-primary mr-2" />
              <a
                href="mailto:sales.caterbell@gmail.com"
                className="text-gray-700 hover:text-primary"
              >
                sales.caterbell@gmail.com
              </a>
            </div>

            {/* Phone */}
            <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a
                  href="tel:+919987416222"
                  className="text-gray-700 hover:text-primary"
                >
                  +91-99874 16222
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a
                  href="tel:+919136336005"
                  className="text-gray-700 hover:text-primary"
                >
                  +91-91363 36005
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Office 1 */}
          <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
            <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
              Other Office
            </span>

            <div className="flex items-center mb-4 mt-2">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                NOOFAST IMPEX
              </h3>
            </div>

            <h3 className="text-lg font-bold text-[#3b0603] mb-4">
              Gujarat, India
            </h3>

            {/* Address */}
            <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
            <div className="flex items-start mb-4 text-gray-700">
              <MapPin className="w-13 h-4 text-primary mt-1 mr-2" />
              <p>
                Shop No.24, S.No. 229/1, Milkat No.4357 National Highway No.41, Majadar, Taluk-Vadgam District - Banaskantha. Gujarat - 385 210 (India)
              </p>
            </div>

            {/* Email */}
            <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
            <div className="flex items-center mb-4">
              <Mail className="w-4 h-4 text-primary mr-2" />
              <a
                href="mailto:sales.caterbell@gmail.com"
                className="text-gray-700 hover:text-primary"
              >
                sales.caterbell@gmail.com
              </a>
            </div>

            {/* Phone */}
            <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a
                  href="tel:+919987416222"
                  className="text-gray-700 hover:text-primary"
                >
                  +91-99874 16222
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a
                  href="tel:+919136336005"
                  className="text-gray-700 hover:text-primary"
                >
                  +91-91363 36005
                </a>
              </div>
            </div>
          </div>

          {/* Office 2 */}
          <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
            <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
              Other Office
            </span>

            <div className="flex items-center mb-4 mt-2">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                CATERBELL INDUSTRIES
              </h3>
            </div>

            <h3 className="text-lg font-bold text-[#3b0603] mb-4">
              Karnataka, India
            </h3>

            {/* Address */}
            <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
            <div className="flex items-start mb-4 text-gray-700">
              <MapPin className="w-13 h-4 text-primary mt-1 mr-2" />
              <p>
                Unit No.25, Bhaskar Layout, Anjanapura Main Road, Avalahalli, Bengaluru, Karnataka - 560 062 (India)
              </p>
            </div>

            {/* Email */}
            <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
            <div className="flex items-center mb-4">
              <Mail className="w-4 h-4 text-primary mr-2" />
              <a
                href="mailto:sales.caterbell@gmail.com"
                className="text-gray-700 hover:text-primary"
              >
                sales.caterbell@gmail.com
              </a>
            </div>

            {/* Phone */}
            <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a
                  href="tel:+919987416222"
                  className="text-gray-700 hover:text-primary"
                >
                  +91-99874 16222
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a
                  href="tel:+919136336005"
                  className="text-gray-700 hover:text-primary"
                >
                  +91-91363 36005
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OtherOffice;
