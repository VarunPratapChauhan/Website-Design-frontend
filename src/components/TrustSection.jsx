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
    <section className="bg-white py-8 px-6 h-140">
      <div
        className="w-150 h-130 absolute bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${Code_typing})` }}
      ></div>
      <div className="w-1/2 ml-auto mt-17">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-2">
            Top Companies Trust ValueCoders For Hiring Software Developers
          </h2>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <div className="grid grid-cols-5 mt-10 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="col-span-2 md:col-span-2 lg:col-span-2 flex items-start space-x-3"
            >
              <img
                src={check_circle_icon}
                className="text-green-500 text-xl mt-1"
              />
              <span className="text-lg font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
