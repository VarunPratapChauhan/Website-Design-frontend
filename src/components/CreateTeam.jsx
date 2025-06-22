import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import create_team_bg from "../assets/create_team_bg.png";

export default function CreateTeam() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    brief: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    else if (/\d/.test(form.name))
      newErrors.name = "Name should not contain numbers";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Email is invalid";

    if (!form.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!form.country) newErrors.country = "Country is required";
    else if (/\d/.test(form.country))
      newErrors.country = "Country should not contain numbers";

    if (!form.brief) newErrors.brief = "Project brief is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };
  return (
    <section
      className="bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${create_team_bg})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-3/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#2FC980] mb-2 leading-tight">
            HIRE DEDICATED{" "}
            <span className="h-1 w-32 bg-[#2FC980] my-5 items-center inline-block"></span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-extrabold">
              DEVELOPERS
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 mb-3">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              className="px-4 py-2 rounded flex items-center gap-2 text-white text-sm md:text-base"
              style={{ backgroundColor: "#FF8C91" }}
            >
              View More <MdArrowOutward />
            </button>
            <button className="border-2 border-green-600 px-4 py-2 rounded hover:bg-green-50 flex items-center gap-2 text-sm md:text-base">
              Get in Touch <MdArrowOutward />
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/5">
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="bg-[#2DC67D0F] rounded-t-2xl py-4 px-4">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
                Create Your Team
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>

            <form className="space-y-4 p-4 sm:p-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-sm">Full Name</p>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    placeholder="Enter Your Name"
                    style={{ borderColor: "#C3C3C3" }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <p className="mb-1 text-sm">Email Address</p>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    placeholder="Enter Your Email"
                    style={{ borderColor: "#C3C3C3" }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-sm">Phone Number</p>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    placeholder="Enter Your Number"
                    style={{ borderColor: "#C3C3C3" }}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <p className="mb-1 text-sm">Country</p>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    placeholder="Enter Your Country"
                    style={{ borderColor: "#C3C3C3" }}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">{errors.country}</p>
                  )}
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm">Project Brief</p>
                <textarea
                  name="brief"
                  value={form.brief}
                  onChange={handleChange}
                  className="border w-full p-2"
                  placeholder="Enter Your Project Brief"
                  style={{ borderColor: "#C3C3C3" }}
                  rows="4"
                />
                {errors.brief && (
                  <p className="text-red-500 text-sm">{errors.brief}</p>
                )}
              </div>

              <button
                type="submit"
                className="px-4 py-2 rounded flex items-center justify-center w-full gap-2 text-sm md:text-base text-white"
                style={{ backgroundColor: "#FF8C91" }}
              >
                Hire Software Developer <MdArrowOutward />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
