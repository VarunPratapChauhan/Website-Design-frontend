import { FaCheckCircle } from "react-icons/fa";
import studyImage1 from "../assets/table1.png";
import studyImage2 from "../assets/table2.png";
import lines from "../assets/lines1.png";
import lines2 from "../assets/lines2.png";
import studyImage1bg from "../assets/studyImage1bg.png";
import hire_dev_bg from "../assets/hire_dev_bg.png";

export default function WhyHireSection() {
  return (
    <section className="bg-gray-50">
      <div className="relative w-full">
        <div
          className="mt-5 h-180 absolute inset-0 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${lines})` }}
        ></div>
        <div
          className="absolute top-0 right-0 h-2/2 w-1/2 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${hire_dev_bg})` }}
        ></div>

        <div className="py-16 max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center">
            Why Hire Developers From Our Name
          </h2>
          <div className="w-2/3 mx-auto p-6 rounded text-center">
            <p className="leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="mt-30 ml-10 relative">
              <img
                src={studyImage1bg}
                alt="sitting study image backgound"
                className="object-cover z-[1]"
              />
              <img
                src={studyImage1}
                alt="sitting study image"
                className="absolute bottom-0  z-[1]"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-8">
                High Quality/Cost Ratio
              </h3>
              <div className="mt-3 flex items-start gap-3">
                <div>
                  <FaCheckCircle className="mt-1 text-2xl text-green-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2">
                    Hire Silicon Valley Caliber At Half The Cost
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Hire The Top 1% Of 1.5 Million+ Developers From 150+
                    countries Who Have Applied To Turing.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <div>
                  <FaCheckCircle className="mt-1 text-2xl text-[#FF8C91]" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2">
                    100+ Skills Available
                  </h4>
                  <p className="text-gray-600">
                    Hire The Top 1% Of 1.5 Million+ Developers From 150+
                    countries Who Have Applied To Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center ml-45">
          <div className="mt-15">
            <h3 className="text-4xl font-bold mb-8">Rigorous Vetting</h3>
            <div className="mt-3 flex items-start gap-3">
              <div>
                <FaCheckCircle className="mt-1 text-2xl text-green-500" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">
                  5+ Hours Of Tests And Interviews
                </h4>
                <p className="text-gray-600 mb-4">
                  Hire the top 1% of 1.5 million+ developers from 150+ countries
                  who have applied to Turing.
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-start gap-3">
              <div>
                <FaCheckCircle className="mt-1 text-2xl text-[#FF8C91]" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">Seniority Tests</h4>
                <p className="text-gray-600">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ countries
                  Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row  items-start gap-6">
            <img
              src={studyImage2}
              alt="sitting study image"
              className="object-contain"
            />

            <img
              src={lines2}
              alt="sitting study image"
              className="absolute right-10 mt-1 object-contain"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
