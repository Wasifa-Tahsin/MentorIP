import React from "react";
import { LuUser } from "react-icons/lu";

const EditProfile = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mb-15 px-4">
        
        {/* Icon & Title */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <LuUser className="text-[150px] py-3 px-3 text-[#B14034] bg-gray-200 rounded-full" />
          <h2 className="text-3xl font-semibold text-black">Edit Profile</h2>
        </div>

        {/* Form Section */}
        <form className="rounded-lg flex flex-col space-y-4 w-full sm:w-[400px] md:w-[500px] lg:w-[700px] mx-auto">
          
          {/* Full Name */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="text" className="text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Leslie Alexander"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="debra.holt@example.com"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="number" className="text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="(208) 555-0112"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#B14034] w-full h-[60px] text-white font-semibold rounded-md hover:bg-[#912f26] transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
