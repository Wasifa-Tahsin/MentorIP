import React from "react";

const CheckMail = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Title */}
      <h2 className="text-4xl text-gray-700  mb-3">Check your email</h2>
      <p className="text-gray-600 max-w-sm mt3 mb-2">
        We sent a reset link to{" "}
        <span className="font-semibold">contact@dscode...com</span>
        <br />
        enter 5 digit code that mentioned in the email
      </p>

      {/* 5 Digit OTP boxes */}
      <div className="flex gap-3 my-6 ">
        {[1, 2, 3, 4, 5].map((i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center border border-gray-400 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        ))}
      </div>

      {/* Verify Button */}
      <button className="bg-[#B14034] w-full max-w-[350px] h-[55px] text-white font-semibold rounded-md hover:bg-[#912f26] transition mt-4 mb-5">
        Verify Code
      </button>

      {/* Resend Text */}
      <p className="mt-4 text-gray-600 text-sm">
        You have not received the email?
        <button className="text-[#B14034] font-medium ml-1 hover:underline">
          Resend
        </button>
      </p>
    </div>
  );
};

export default CheckMail;
