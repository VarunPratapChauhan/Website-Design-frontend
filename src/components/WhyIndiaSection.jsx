import people_icon from "../assets/people_icon.png";
import { MdArrowOutward } from "react-icons/md";

export default function WhyIndiaSection() {
  const reasons = [
    "English Speaking Programmers",
    "Flexible Work Hours",
    "Rapid Onboarding Process",
    "Expertise in Top Technologies",
    "Reliable Partner Credentials",
  ];
  return (
    <section className="bg-[#00003C] text-white py-12 h-[700px]">
      <div className="ml-4">
        <div
          className="w-200 h-200 absolute bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${people_icon})` }}
        ></div>
        <h2 className="text-3xl w-5/7 sm:text-4xl md:text-5xl lg:text-6xl mr-150 text-6xl ml-30 font-bold mb-6">
          Why Hire Software Developers In India?
        </h2>
        <div className="flex justify-center md:justify-end">
          <ul className="w-full mt-15 md:w-2/4 space-y-6 mr-6">
            {reasons.map((r, i) => (
              <li key={i}>
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl md:text-2xl tracking-wide">
                    {r}
                  </span>
                  <MdArrowOutward className="text-xl md:text-2xl ml-4" />
                </div>
                <hr className="mt-2 border-t border-gray-300 opacity-30" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
