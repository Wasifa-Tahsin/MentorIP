import React from "react";
import bannerImage from "../../assets/image/banner.png";

const Banner = () => {
  return (
    <section className="w-full bg-[#E8EBEE] rounded-xl mt-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            className="w-[284px] h-[548px] object-cover rounded-lg"
            src={bannerImage}
            alt="Banner"
          />
        </div>

        {/* Middle + Right Content */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Red Section */}
         
  <div
    className="bg-red-800 text-white rounded-lg px-6 py-6 text-center md:text-left"
  
  >
    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
      TRADEMARK <br />
      <span className="text-yellow-500">REGISTRATION</span> <br />
      IN BANGLADESH
    </h2>
  </div>



          {/* Breadcrumbs */}
          <nav className="text-left flex gap-2 text-xs text-gray-700">
            <ul>
              <li className="font-bold text-black">Trademark</li>
            </ul>
            <ul>
              <li className="text-blue-600">• Registration</li>
            </ul>
          </nav>

          {/* Text Section */}
          <div className="text-left">
            <h2 className="text-[#B14034] text-xl md:text-2xl mb-2 font-semibold">
              Trademark Registration in Bangladesh: Step-by-Step Guide
            </h2>
            <p className="text-gray-700 mb-4">
              Introduction to Trademark Registration in Bangladesh — securing your
              brand’s identity is crucial to protect your business and maintain exclusivity.
            </p>
            <button className="bg-red-700 py-3 px-5 rounded-xl text-white hover:bg-red-600 transition-all duration-200">
              Read More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
