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
      className="bg-no-repeat py-16 px-6"
      style={{ backgroundImage: `url(${create_team_bg})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-3/5">
          <h1 className="text-6xl font-medium text-[#2FC980] mb-2">
            HIRE DEDICATED{" "}
            <span className="h-1 w-32 bg-[#2FC980] my-5 items-center inline-block"></span>
            <br />
            <span className="text-8xl text-black font-extrabold">
              DEVELOPERS
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mt-3 mb-3">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers.
          </p>
          <p className="text-1xl text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 rounded flex items-center gap-2 text-sm md:text-base text-white cursor-pointer"
              style={{ backgroundColor: "#FF8C91" }}
            >
              View More <MdArrowOutward />
            </button>
            <button className="border-2 border-green-600 px-4 py-2 rounded hover:bg-green-50 flex items-center gap-2 text-sm md:text-base cursor-pointer">
              Get in Touch <MdArrowOutward />
            </button>
          </div>
        </div>

        <div className="md:w-2/5 mt-8 md:mt-0 rounded-2xl mx-auto">
          <div className="bg-white rounded-2xl w-full">
            <div className="bg-[#2DC67D0F] rounded-t-2xl py-4 w-full">
              <h3 className="text-2xl font-semibold mb-2 text-center">
                Create Your Team
              </h3>
              <p className="text-base text-gray-600 mb-2 text-center">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>

            <form className="space-y-4 p-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-1">Full Name</p>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border-1 p-2 w-full"
                    placeholder="Enter Your Name"
                    style={{ borderColor: '#C3C3C3' }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <p className="mb-1">Email Address</p>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="border-1 p-2 w-full"
                    placeholder="Enter Your Email"
                    style={{ borderColor: '#C3C3C3' }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-1">Phone Number</p>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="border-1 p-2 w-full"
                    placeholder="Enter Your Number"
                    style={{ borderColor: '#C3C3C3' }}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <p className="mb-1">Country</p>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="border-1 p-2 w-full"
                    placeholder="Enter Your Country"
                    style={{ borderColor: '#C3C3C3' }}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">{errors.country}</p>
                  )}
                </div>
              </div>

              <div>
                <p className="mb-1">Project Brief</p>
                <textarea
                  name="brief"
                  value={form.brief}
                  onChange={handleChange}
                  className="border-1 w-full p-2"
                  placeholder="Enter Your Project Brief"
                  style={{ borderColor: '#C3C3C3' }}
                  rows="4"
                />
                {errors.brief && (
                  <p className="text-red-500 text-sm">{errors.brief}</p>
                )}
              </div>

              <button
                type="submit"
                className="px-4 py-2 rounded flex items-center justify-center w-full gap-2 text-sm md:text-base text-white cursor-pointer"
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
