import { MdKeyboardArrowDown, MdArrowOutward } from "react-icons/md";
import logo from '/website_icon.png';

export default function Header() {
  return (
    <header className="bg-white px-4 py-3 md:px-6 flex flex-wrap items-center justify-between gap-y-3">
      <div className="font-bold flex text-lg gap-x-2"><img src={logo} alt="Logo" className="w-8 h-8" />Logoipsum</div>

      <nav className="flex flex-wrap gap-x-4 text-sm md:gap-x-6 md:text-base leading-relaxed">
        <a href="#" className="text-gray-700 hover:text-green-600 flex items-center gap-1">
          Software Team <MdKeyboardArrowDown className="text-2xl relative top-[2px]" />
        </a>
        <a href="#" className="text-gray-700 hover:text-green-600">Services</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Technologies</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Resources</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Company</a>
      </nav>

      <button className="border-2 border-green-600 px-4 py-2 rounded hover:bg-green-50 flex items-center gap-2 text-sm md:text-base cursor-pointer">
        Get in Touch
        <MdArrowOutward />
      </button>
    </header>
  );
}
