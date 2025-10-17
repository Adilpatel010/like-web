import React from "react";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

const OtherOffice = () => {
  return (
    <div className="py-8">
    <div className="container font-poppins">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl text-center font-bold text-primary">
        Where to Find Us – Other Offices
      </h2>
      <div className="mt-2 w-24 h-1 bg-primary mx-auto rounded-full"></div>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Office 1 */}
        <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
          <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
            Other Office
          </span>

          <div className="flex items-center mb-4 mt-2">
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              GENEVA ENTERPRISE PVT. LTD. (W.B.)
            </h3>
          </div>

          <h3 className="text-lg font-bold text-[#3b0603] mb-4">
            West Bengal, India
          </h3>

          {/* Address */}
          <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
          <div className="flex items-start mb-4 text-gray-700">
               <MapPin className="w-10 h-5 text-primary mt-1 mr-2" />
            <p>
              Amta Road, Kabarpara, Behind Central Nursing Home, Opp. St Ann's
              Day School, Bankra, Howrah, West Bengal - 711403 (India)
            </p>
          </div>

          {/* Email */}
          <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-primary mr-2" />
            <a
              href="mailto:info@lemarkzindustries.com"
              className="text-gray-700 hover:text-primary"
            >
              info@lemarkzindustries.com
            </a>
          </div>

          {/* Phone */}
          <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+919773233149"
                className="text-gray-700 hover:text-primary"
              >
                +91-9773233149
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+917208658838"
                className="text-gray-700 hover:text-primary"
              >
                +91-7208658838
              </a>
            </div>
          </div>
        </div>

        {/* Office 2 */}
        <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
          <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
            Main Office
          </span>

          <div className="flex items-center mb-4 mt-2">
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              GENEVA ENTERPRISE PVT. LTD.
            </h3>
          </div>

          <h3 className="text-lg font-bold text-[#3b0603] mb-4">
            Mumbai, India
          </h3>

          {/* Address */}
          <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
          <div className="flex items-start mb-4 text-gray-700">
            <MapPin className="w-10 h-5 text-primary mt-1 mr-2" />
            <p>
              Plot No.D-339, T.T.C. Industrial Area, (MIDC), Thane Belapur Road,
              Turbhe, Navi Mumbai, Maharashtra - 400 705 (India)
            </p>
          </div>

          {/* Email */}
          <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-primary mr-2" />
            <a
              href="mailto:info@lemarkzindustries.com"
              className="text-gray-700 hover:text-primary"
            >
              info@lemarkzindustries.com
            </a>
          </div>

          {/* Phone */}
          <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+919773233149"
                className="text-gray-700 hover:text-primary"
              >
                +91-9773233149
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+917208658838"
                className="text-gray-700 hover:text-primary"
              >
                +91-7208658838
              </a>
            </div>
          </div>
        </div>
      </section>

       {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Office 1 */}
        <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
          <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
            Other Office
          </span>

          <div className="flex items-center mb-4 mt-2">
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              GENEVA ENTERPRISE PVT. LTD. (W.B.)
            </h3>
          </div>

          <h3 className="text-lg font-bold text-[#3b0603] mb-4">
            West Bengal, India
          </h3>

          {/* Address */}
          <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
          <div className="flex items-start mb-4 text-gray-700">
               <MapPin className="w-10 h-5 text-primary mt-1 mr-2" />
            <p>
              Amta Road, Kabarpara, Behind Central Nursing Home, Opp. St Ann's
              Day School, Bankra, Howrah, West Bengal - 711403 (India)
            </p>
          </div>

          {/* Email */}
          <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-primary mr-2" />
            <a
              href="mailto:info@lemarkzindustries.com"
              className="text-gray-700 hover:text-primary"
            >
              info@lemarkzindustries.com
            </a>
          </div>

          {/* Phone */}
          <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+919773233149"
                className="text-gray-700 hover:text-primary"
              >
                +91-9773233149
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+917208658838"
                className="text-gray-700 hover:text-primary"
              >
                +91-7208658838
              </a>
            </div>
          </div>
        </div>

        {/* Office 2 */}
        <div className="relative bg-third border-2 border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
          <span className="absolute -top-4 left-6 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-xl shadow">
            Main Office
          </span>

          <div className="flex items-center mb-4 mt-2">
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              GENEVA ENTERPRISE PVT. LTD.
            </h3>
          </div>

          <h3 className="text-lg font-bold text-[#3b0603] mb-4">
            Mumbai, India
          </h3>

          {/* Address */}
          <p className="font-semibold underline text-primary mb-2">ADDRESS:</p>
          <div className="flex items-start mb-4 text-gray-700">
            <MapPin className="w-10 h-5 text-primary mt-1 mr-2" />
            <p>
              Plot No.D-339, T.T.C. Industrial Area, (MIDC), Thane Belapur Road,
              Turbhe, Navi Mumbai, Maharashtra - 400 705 (India)
            </p>
          </div>

          {/* Email */}
          <p className="font-semibold underline text-primary mb-2">EMAIL-ID:</p>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-primary mr-2" />
            <a
              href="mailto:info@lemarkzindustries.com"
              className="text-gray-700 hover:text-primary"
            >
              info@lemarkzindustries.com
            </a>
          </div>

          {/* Phone */}
          <p className="font-semibold underline text-primary mb-2">PHONE NO:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+919773233149"
                className="text-gray-700 hover:text-primary"
              >
                +91-9773233149
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a
                href="tel:+917208658838"
                className="text-gray-700 hover:text-primary"
              >
                +91-7208658838
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
