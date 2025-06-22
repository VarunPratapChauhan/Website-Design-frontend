import websettings1 from "../assets/websettings1.png";
import websettings2 from "../assets/websettings2.png";
import websettings3 from "../assets/websettings3.png";
import websettings4 from "../assets/websettings4.png";
import websettings5 from "../assets/websettings5.png";
import websettings6 from "../assets/websettings6.png";
import lines3 from "../assets/lines3.png";
import video from "../assets/video.png";
import shade1 from "../assets/shade1.png";

export default function TechnologyCompetency() {
  const techList = [
    {
      title: "Backend Development",
      techs: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      style: {
        bg: "#F3F5FF",
        icon: websettings1,
        borderColor: "#B0BDFF",
      },
    },
    {
      title: "Frontend Development",
      techs: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      style: {
        bg: "#FFF3E6",
        icon: websettings2,
        borderColor: "#FFC093",
      },
    },
    {
      title: "Mobile Development",
      techs: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      style: {
        bg: "#FBEEFD",
        icon: websettings3,
        borderColor: "#F6BCFF",
      },
    },
    {
      title: "Blockchain, AI/ML",
      techs: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      style: {
        bg: "#EFFDFF",
        icon: websettings4,
        borderColor: "#9FF3FF",
      },
    },
    {
      title: "DevOps & Low-Code",
      techs: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      style: {
        bg: "#FBFFF1",
        icon: websettings5,
        borderColor: "#FFDAA2",
      },
    },
    {
      title: "E-commerce & CMS",
      techs: [
        ".NET",
        "C/C++",
        "DJANGO",
        "Firebase",
        "GOLANG",
        "SYMFONY",
        "LARAVEL",
        "NODE",
        "PHP",
        "PYTHON",
        "RUBY ON RAILS",
        "JAVA",
      ],
      style: {
        bg: "#FFBCBC42",
        icon: websettings6,
        borderColor: "#FFBCBC",
      },
    },
  ];

  return (
    <section className="bg-gradient-to-br from-pink-50 to-green-50 py-1 px-6">
      <div className="relative w-full h-auto mb-20">


        <div
          className="absolute left-0 translate-x-[-10%] translate-y-[-70%] w-500 h-500 bg-no-repeat bg-contain z-0"
          style={{ backgroundImage: `url(${shade1})` }}
        ></div>
        <div
          className="absolute top-0 left-0 w-18 h-18 bg-no-repeat bg-contain z-1"
          style={{ backgroundImage: `url(${lines3})` }}
        ></div>

        <div className="mt-5 max-w-6xl mx-auto">
          <h2 className="text-5xl mt-5 font-bold text-center">
            Our Diverse Technology Competency
          </h2>
          <div className="w-2/3 mx-auto p-6 rounded text-center">
            <p className="leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {techList.map((item, index) => (
              <div
                key={index}
                className="relative rounded flex flex-col justify-between"
                style={{ backgroundColor: item.style.bg }}
              >
                <img
                  src={item.style.icon}
                  alt="icon"
                  className="w-11 h-11 absolute mt-5 ml-5"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold mb-4 mt-21 ml-5">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-2 mb-2 gap-y-1 ml-5 mr-2">
                    {item.techs.map((tech, i) => (
                      <span key={i} className="text-sm text-gray-700">
                        {i !== 0 && (
                          <span className="mx-1 text-gray-400"> | </span>
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="h-2 w-full mt-4"
                  style={{ backgroundColor: item.style.borderColor }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
