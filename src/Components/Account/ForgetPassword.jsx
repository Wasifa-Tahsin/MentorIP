import React from "react";

const ForgetPassword = () => {
  return (
    <div className=" flex justify-center items-center mt-20 mb-20 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl mb-7 font-semibold text-gray-600 text-center ">
          Forget Password
        </h2>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Email */}
          <div className="flex flex-col w-full text-left ">
            <label className="text-gray-500 mb-3">Email address:</label>
            <input
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="w-full h-12 px-3 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="bg-[#B14034] text-white mt-6 h-12 rounded-md font-semibold hover:bg-[#912f26] transition"
          >
          Send a code
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
