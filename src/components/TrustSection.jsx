import check_circle_icon from "../assets/check_circle_icon.png";
import Code_typing from "../assets/Code_typing.png";

export default function TrustSection() {
  const features = [
    "Fast Development",
    "Clean Code",
    "Responsive Design",
    "Reusable Components",
    "Great UI/UX",
    "SEO Friendly",
  ];
  return (
    <section className="bg-white mb-30 pt-6 px-6">
      <div
        className="absolute bg-no-repeat bg-contain sm:w-1/2 sm:h-1/5 md:w-1/2 md:h-1/1 lg:w-[500px] lg:h-[500px]"
        style={{ backgroundImage: `url(${Code_typing})` }}
      ></div>
      <div className="w-full md:w-1/2 ml-auto mt-17">
        <div className="sm:w-full ml-auto md:w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mx-auto">
            


            
{/* <div className=" mt-17"> */}


            Top Companies Trust ValueCoders For Hiring Software Developers
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-3">
              <img
                src={check_circle_icon}
                className="text-green-500 text-xl mt-1"
              />
              <span className="text-base sm:text-lg font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
