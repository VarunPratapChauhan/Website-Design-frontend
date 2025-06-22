import hp1 from "../assets/hp1.svg";
import hp2 from "../assets/hp2.svg";
import hp3 from "../assets/hp3.svg";
import hp4 from "../assets/hp4.svg";
import hp11 from "../assets/hp11.png";
import hp22 from "../assets/hp22.png";
import arrow_next_right from "../assets/arrow_next_right.png";
import hiring_blog_bg from "../assets/hiring_blog_bg.png";
import React from "react";

export default function HiringProcess() {
  const steps = [
    {
      image: hp1,
      no: hp11,
      title: "INQUIRY",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: hp2,
      no: hp22,
      title: "SELECT DEVELOPERS",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: hp3,
      title: "TEAM INTEGRATION",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: hp4,
      title: "TEAM SCALING",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <section
      className="py-16 px-6 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${hiring_blog_bg})` }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Hiring Process</h2>
        <p className="text-gray-600 mb-12 text-base sm:text-lg">
          Take a look at our simple and straightforward process to hire software
          developers from ValueCoders.
        </p>
        <div className="flex gap-6 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-12px)] rounded">
                <div className="overflow-hidden mb-4 relative flex justify-center">
                  {!step.no && (
                    <img
                      src={step.image}
                      alt="image"
                      className="text-center object-cover"
                    />
                  )}
                </div>
                {step.no && (
                  <div className="mb-4 relative flex justify-center">
                    <img
                      src={step.image}
                      alt="image"
                      className="text-center object-cover"
                    />
                    <img
                      src={step.no}
                      alt="badge"
                      className="absolute top-1/12 left-14/20 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>

              {index !== steps.length - 1 && (
                <div className="w-8 h-6 mb-20 flex justify-center items-center">
                  <img
                    src={arrow_next_right}
                    alt="arrow"
                    className="w-full h-full"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
