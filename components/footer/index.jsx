import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          {/* Contact Card */}
          <div className="mb-4 bg-gray-700 p-4 rounded-lg shadow-lg flex items-center">
            <FaPhoneAlt className="text-white text-2xl mr-4" />
            <div>
              <h3 className="font-bold text-lg">Phone number</h3>
              <p className="mt-2">+974 3118 1843</p>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/logo.png"
              alt="Company Logo"
              className="mt-2 bg-white p-2 rounded-lg"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          {/* Email Card */}
          <div className="mb-4 bg-gray-700 p-4 rounded-lg shadow-lg flex items-center">
            <FaEnvelope className="text-white text-2xl mr-4" />
            <div>
              <h3 className="font-bold text-lg">Email address</h3>
              <p className="mt-2">Elbrithcqhr@gmail.com</p>
            </div>
          </div>
          <div>
            <p className="mt-2">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          {/* Address Card */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex items-center">
            <FaMapMarkerAlt className="text-white text-2xl mr-4" />
            <div>
              <h3 className="font-bold text-lg">Office location</h3>
              <p className="mt-2">Ambassador Street, Zone 61, India</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 pt-4 text-left">
          <p className="text-sm text-gray-200">
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </p>
        </div>
      </div>

      {/* Last Line */}
    </footer>
  );
};

export default Footer;
