import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { LuUser } from "react-icons/lu";

const YourAccount = () => {
  return (
    <div className="flex flex-col justify-center text-center mb-16 px-4">

      {/* Icon & Title */}
      <div className="flex flex-col items-center space-y-4 mb-10">
        <LuUser className="w-[150px] h-[150px] p-5 text-[#B14034] bg-gray-200 rounded-full" />
        <h2 className="text-3xl font-semibold text-black">Your Account</h2>
      </div>

      {/* ✅ Login Details Section */}
      <div className="w-full flex flex-col md:flex-row justify-between text-left gap-6">

        {/* Left Title */}
        <div>
          <h2 className="text-xl">Login Details :</h2>
        </div>

        {/* Middle Info */}
        <div className="space-y-4">
          <div>
            <span className="text-sm text-gray-500">Full Name</span>
            <h3 className="text-lg">Fahad</h3>
          </div>
          <div>
            <span className="text-sm text-gray-500">Email</span>
            <h3 className="text-lg">fahad123@example.com</h3>
          </div>
          <div>
            <span className="text-sm text-gray-500">Phone Number</span>
            <h3 className="text-lg">(208) 555-0112</h3>
          </div>
        </div>

        {/* Right Button */}
        <div>
          <button className="border border-[#B14034] text-[#B14034] px-6 py-3 rounded-md hover:bg-[#B14036] hover:text-white duration-200">
            Edit Account
          </button>
        </div>

      </div>

      {/* ✅ Password Section */}
      <div className="w-full mt-10 flex flex-col md:flex-row justify-between text-left gap-6">

        {/* Left Title */}
        <div>
          <h2 className="text-xl">Password :</h2>
        </div>

        {/* Middle Text */}
        <div>
          <span className="text-lg">Current Password</span>
          <div className='flex gap-2 text-[6px] mt-1'>
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
          </div>
        </div>

        {/* Right Button */}
        <div>
          <button className="border border-[#B14034] text-[#B14034] px-6 py-3 rounded-md hover:bg-[#B14036] hover:text-white duration-200">
            Change Password
          </button>
        </div>

      </div>

<button
  type="submit"
  className="bg-[#B14034] w-full max-w-[710px] mx-auto mt-10 h-[60px] text-white font-semibold rounded-md hover:bg-[#912f26] transition"
>
  Go To Home Page
</button>

    </div>
  );
};

export default YourAccount;
