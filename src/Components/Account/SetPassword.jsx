import React from "react";
import { FaEye } from "react-icons/fa";

const SetPassword = () => {
  return (
    <div className=" flex justify-center items-center mt-20 px-4 mb-20">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-600 text-center mb-2">
          Set a new password
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Create a new password. Ensure it differs from <br />
          previous ones for security
        </p>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Password */}
          <div className="flex flex-col text-left w-full relative">
            <label className="text-gray-500 mb-1">New Password</label>
            <input
              type="password"
              placeholder="KK!@#$15856"
              className="w-full h-12 px-3 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
            <FaEye className="absolute right-3 top-1/2   text-gray-400 cursor-pointer" />
          </div>
          {/* Password */}
          <div className="flex flex-col text-left w-full relative">
            <label className="text-gray-500 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="KK!@#$15856"
              className="w-full h-12 px-3 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
            <FaEye className="absolute right-3 top-1/2   text-gray-400 cursor-pointer" />
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="bg-[#B14034] text-white mt-6 h-12 rounded-md font-semibold hover:bg-[#912f26] transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPassword;
