import logo from "/website_icon.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import socialmediagroup from "../assets/socialmediagroup.png";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-6xl py-10 px-1 mx-auto grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold flex text-3xl mb-4 gap-x-2">
            <img src={logo} alt="Logo" className="mt-1 w-8 h-8" />
            Logoipsum
          </h4>
          <p text-md>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <img src={socialmediagroup} className="mt-7 text-3xl" />
        </div>

        <div>
          <h4 className="font-bold text-3xl mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-lg hover:underline">
                Software Team
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-3xl mb-4">Services</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-lg hover:underline">
                Dedicated Development
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Staff Augmentation Services
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Software Development
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:underline">
                Development Center
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-3xl mb-4">Contact Us</h4>
          <div className="col-span-2 mb-4 md:col-span-2 lg:col-span-2 flex items-start space-x-3">
            <FaLocationDot className="text-[#2FC980] text-2xl mt-1" />
            <span className="text-lg">
              Envato, Level 13, 2 Elizabeth Victoria 3000 India
            </span>
          </div>
          <div className="text-lg mb-4 col-span-2 md:col-span-2 lg:col-span-2 flex items-start space-x-3">
            <FaPhoneAlt className="text-[#2FC980] text-2xl mt-1" />
            <span className="text-lg">+91 861 944 1176</span>
          </div>
          <div className="text-lg mb-4 col-span-2 md:col-span-2 lg:col-span-2 flex items-start space-x-3">
            <MdEmail className="text-[#2FC980] text-2xl mt-1" />
            <span className="text-lg">ezyoga@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="bg-[#2FC980] p-2 text-white text-center mt-8 text-2xs">
        logoname. 2025. All rights reserved
      </div>
    </footer>
  );
}
