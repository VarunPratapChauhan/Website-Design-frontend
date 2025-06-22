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
        <h2 className="mr-150 text-6xl ml-30 font-bold mb-6">
          Why Hire Software Developers In India?
        </h2>
        <div className="flex justify-end pr-30 ml-200">
          <ul className="w-full max-w-3xl space-y-6">
            {reasons.map((r, i) => (
              <li key={i}>
                <div className="flex items-center">
                  <span className="text-3xl leading-relaxed tracking-wide w-full">
                    {r}
                  </span>
                  <MdArrowOutward className="text-2xl ml-5" />
                </div>
                <hr className="mt-2 border-t-2 border-gray-300 ml-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
