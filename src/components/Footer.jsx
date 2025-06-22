import logo from "/website_icon.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import socialmediagroup from "../assets/socialmediagroup.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h4 className="font-bold text-2xl sm:text-3xl mb-4 flex items-center gap-x-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            Logoipsum
          </h4>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <img
            src={socialmediagroup}
            alt="Social Media"
            className="mt-6 w-auto h-auto max-w-xs"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-xl sm:text-2xl mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Software Team", "Technologies", "Resources", "Contact us", "FAQ"].map((text, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline text-base">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-xl sm:text-2xl mb-4">Services</h4>
          <ul className="space-y-2">
            {[
              "Dedicated Development",
              "Staff Augmentation Services",
              "Software Development",
              "Development Center",
            ].map((text, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline text-base">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-xl sm:text-2xl mb-4">Contact Us</h4>

          <div className="flex items-start gap-3 mb-4">
            <FaLocationDot className="text-[#2FC980] text-xl mt-1" />
            <span className="text-sm sm:text-base leading-snug">
              Envato, Level 13, 2 Elizabeth Victoria 3000 India
            </span>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <FaPhoneAlt className="text-[#2FC980] text-xl mt-1" />
            <span className="text-sm sm:text-base">+91 861 944 1176</span>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <MdEmail className="text-[#2FC980] text-xl mt-1" />
            <span className="text-sm sm:text-base">ezyoga@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="bg-[#2FC980] py-2 text-white text-center text-xs sm:text-sm">
        logoname. 2025. All rights reserved
      </div>
    </footer>
  );
}
