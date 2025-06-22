import { FaStar } from "react-icons/fa";
import Vector1 from "../assets/Vector 1.png";
import Vector2 from "../assets/Vector 2.png";
import Vector3 from "../assets/Vector 3.png";
import Vector4 from "../assets/Vector 4.png";
import video from "../assets/video.png";
import Ellipse_right_top from "../assets/Ellipse_right_top.png";
import Ellipse_bottom_left from "../assets/Ellipse_bottom_left.png";

export default function Testimonials() {
  const testimonials = [
    { name: "Krish Bruynson", role: "Director, Storloft", people: Vector1 },
    { name: "Krish Bruynson", role: "Director, Storloft", people: Vector2 },
    { name: "Krish Bruynson", role: "Director, Storloft", people: Vector3 },
    { name: "Krish Bruynson", role: "Director, Storloft", people: Vector4 },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Top-right corner (only bottom-left quarter visible) */}
      <div
        className="absolute top-0 right-0 translate-x-2/5 translate-y-[-20%] w-200 h-200 bg-no-repeat bg-contain z-0"
        style={{ backgroundImage: `url(${Ellipse_right_top})` }}
      ></div>

      {/* Bottom-left corner (only top-right quarter visible) */}
      <div
        className="absolute bottom-0 left-0 translate-y-[-20%] w-200 h-200 bg-no-repeat bg-contain z-0"
        style={{ backgroundImage: `url(${Ellipse_bottom_left})` }}
      ></div>

      <h5 className="text-5xl font-bold mb-4 text-center">
        What Our Clients Have to Say About Us
      </h5>
      <p className="text-gray-600 mb-12 text-center">
        Take a look at our simple and straightforward process to hire software
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded flex flex-col justify-between h-full items-start"
          >
            <div className="w-70 h-80 overflow-hidden mb-4 relative">
              <img
                src={t.people}
                alt={t.name}
                className="w-full h-full object-cover"
              />
              <img
                src={video}
                alt="Play"
                className="absolute top-5/6 left-1/2 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{t.role}</p>
            <div className="flex gap-1 text-green-500">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
