import React from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { LuUser } from 'react-icons/lu';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-10">
      {/* Icon & Title */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <LuUser className="text-7xl text-[#B14034]" />
        <h2 className="text-3xl font-semibold text-black">Change Password</h2>
      </div>

      {/* Form Section */}
      <form className="rounded-lg p-8 flex flex-col space-y-4 mx-auto">
        {/* Current Password */}
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor="currentPassword"
            className="text-gray-700 font-medium mb-1"
          >
            Current Password
          </label>

          <div className="relative w-[710px]">
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
            <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor="newPassword"
            className="text-gray-700 font-medium mb-1"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="w-[710px] h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor="confirmPassword"
            className="text-gray-700 font-medium mb-1"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-[710px] h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#B14034] w-[710px] h-[60px] text-white font-semibold py-2 rounded-md hover:bg-[#912f26] transition"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Login;
