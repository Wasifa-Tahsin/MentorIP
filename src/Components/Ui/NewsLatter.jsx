import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-200 mt-10 rounded-3xl container mx-auto py-12 px-4">
      <div className=" px-5 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            Subscribe to receive updates on Trademark, <br /> Patent & IP Law
            developments in Bangladesh and beyond.
          </p>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2">
          <form className="relative w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Type your email"
              className="w-full px-4 py-3 pr-32 bg-white rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-red-900 text-gray-600"
            />
            <button
              type="submit"
              className="absolute top-0  right-1 h-full px-6 bg-red-800 text-white rounded-xl font-semibold hover:bg-red-900 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
