/* eslint-disable no-unused-vars */
// Login.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    setError("");
    try {
      const response = await axios.post(
        "http://localhost:10001/api/auth/login",
        formData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Logged in successfully");
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }

      setFormData({ email: "", password: "" });
    } catch (e) {
      toast.error("Login failed. Check credentials.");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-cyan-800">
      <Toaster />
      <div className="bg-[#1e2a3a] rounded-lg shadow-lg p-8 w-[360px] relative flex flex-col justify-between">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-center px-6 py-2 rounded-md text-white shadow-md text-sm font-semibold">
          SIGN IN
        </div>

        <div className="flex justify-center mt-8 mb-4">
          <div className="bg-gray-600 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a5 5 0 00-3 9h6a5 5 0 00-3-9zm-7 14a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {error && (
          <div className="text-red-400 text-sm mb-3 text-center">{error}</div>
        )}

        <div className="flex flex-col gap-y-4">
          <div className="flex items-center bg-gray-700 rounded-md px-3 py-2 text-white">
            <svg
              className="h-5 w-5 text-gray-300 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m0 0l4-4m-4 4l4 4"
              />
            </svg>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full text-sm"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="flex items-center bg-gray-700 rounded-md px-3 py-2 text-white">
            <svg
              className="h-5 w-5 text-gray-300 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="accent-cyan-400" />
              <span className="text-xs text-cyan-300">Remember me</span>
            </label>
            <a href="#" className="hover:underline text-cyan-300 text-xs">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleLogin}
            className="bg-cyan-400 w-full py-2 rounded-md text-white font-semibold hover:bg-cyan-500 transition duration-200"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
