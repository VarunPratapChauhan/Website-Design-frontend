import check_circle_icon from "../assets/check_circle_icon.png";

export default function UserGuide() {
  const features = [
    "Fast Development",
    "Clean Code",
    "Responsive Design",
    "Reusable Components",
    "Great UI/UX",
    "SEO Friendly",
  ];

  return (
    <section className="bg-[#F8F8F8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-4xl font-bold mb-8 text-center">
          User Guide to Hire Dedicated Software Developers
        </h4>
        <div className="flex w-full">
          <div className="w-2/5 bg-white mr-4">
            <ul className="divide-y divide-gray-300">
              <li className="px-4 py-5 text-lg">
                Benefits of Hiring Developers
              </li>
              <li className="px-4 py-5 text-lg bg-green-500 text-white">
                Key Factors to Consider While Hiring
              </li>
              <li className="px-4 py-5 text-lg">
                Defining Your Project Requirements
              </li>
              <li className="px-4 py-5 text-lg">
                Choosing the Right Development Model
              </li>
              <li className="px-4 py-5 text-lg">
                Typical Challenges for Hiring Developers
              </li>
              <li className="px-4 py-5 text-lg">
                Hiring Freelancers vs. Dedicated Developers
              </li>
              <li className="px-4 py-5 text-lg">
                Communication with Remote Developers
              </li>
            </ul>
          </div>

          <div className="w-3/5 ml-auto bg-white p-10">
            <h5 className="text-2xl font-semibold mb-4">
              Benefits Of Hiring Developers
            </h5>
            <p className="text-gray-600 mb-15">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
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
        </div>
      </div>
    </section>
  );
}
