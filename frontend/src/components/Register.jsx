import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:10001/api/auth/register",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const validateForm = () => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-cyan-800">
      <div className="bg-[#1e2a3a] rounded-lg shadow-lg p-8 w-[360px] h-[500px] relative flex flex-col justify-between border-2 border-red-600">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-center px-6 py-2 rounded-md font-normal text-white shadow-md text-sm">
          REGISTER
        </div>

        {/* Avatar */}
        <div className="flex justify-center mt-8">
          <div className="bg-gray-600 p-4 rounded-full">
            <svg
              className="h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a5 5 0 00-3 9h6a5 5 0 00-3-9zm-7 14a7 7 0 1114 0H3z" />
            </svg>
          </div>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-y-4 mt-4">
          {/* Full Name */}
          <div className="flex items-center bg-gray-700 rounded-md px-3 py-2 text-white">
            <svg
              className="h-5 w-5 text-gray-300 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent outline-none w-full text-sm"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          {/* Date of Birth */}
          <div className="flex items-center bg-gray-700 rounded-md px-3 py-2 text-white">
            <svg
              className="h-5 w-5 text-gray-300 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <input
              type="date"
              className="bg-transparent outline-none w-full text-sm text-gray-300"
              value={formData.dob}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-700 rounded-md px-3 py-2 text-white">
            <svg
              className="h-5 w-5 text-gray-300 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m0 0h8m-8 0v8m8-8v8m-6 0a2 2 0 01-2-2v-2m0-2v-2a2 2 0 012-2h8a2 2 0 012 2v2m0 2v2a2 2 0 01-2 2h-6"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-700 rounded-md px-3 py-2 text-white">
            <svg
              className="h-5 w-5 text-gray-300 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18v-1a3 3 0 013-3h6a3 3 0 013 3v1"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-cyan-400 w-full py-2 rounded-md text-white font-semibold hover:bg-cyan-500 transition duration-200"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
