import React from "react";
import { LuShare2 } from "react-icons/lu";
import { FaMusic, FaPlay, FaVolumeUp } from "react-icons/fa";

import galleryImg from "../../assets/image/Gallery.png";
import galleryImg1 from "../../assets/image/gallery1.png";
import galleryImg2 from "../../assets/image/gallery2.png";

import image1 from "../../assets/image/image box (2).png";
import image2 from "../../assets/image/image box (11).png";
import image3 from "../../assets/image/image box (7).png";

import DesignPage from "../Pages/DesignPage";

const Gallery = () => {
  const cards = [
    {
      image: image1,
      title: "Trademark Basics",
      author: "MENTORIP",
      location: "Dhaka",
      date: "2025-10-27",
      category: ["Trademark", "Bangladesh"],
    },
    {
      image: image2,
      title: "Filing Process",
      author: "MENTORIP",
      location: "Chittagong",
      date: "2025-10-26",
      category: ["Trademark", "Bangladesh"],
    },
    {
      image: image3,
      title: "Opposition Guide",
      author: "MENTORIP",
      location: "Khulna",
      date: "2025-10-25",
      category: ["Trademark", "Bangladesh"],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <main>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Section */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              NGB Corporation, Japan Team Visits MENTORIP Law Firm in Bangladesh
            </h1>

            <div className="flex flex-wrap items-center text-sm text-gray-600 mt-2 gap-2">
              <span>
                by{" "}
                <span className="text-[#B14034] font-semibold">
                  MENTORIP, Bangladesh
                </span>
              </span>
              <span>• January 1, 2025</span>
              <span>• 3 min read</span>
            </div>

            {/* Gallery Button */}
            <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md mt-4 self-start">
              Gallery
            </button>
          </div>

          {/* Right: Share Button */}
          <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-md transition">
            <LuShare2 className="text-base" /> Share
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center mt-8">
          <img
            className="w-full md:w-[90%] lg:w-[900px] rounded-xl h-auto"
            src={galleryImg}
            alt="Gallery"
          />
        </div>



        {/* Audio Section */}
       <div className="flex w-full max-w-3xl mx-auto rounded-xl justify-center items-center flex-col sm:flex-row bg-sky-50 gap-6 mt-10 p-6 shadow-sm">
  {/* Music Icon */}
  <div className="flex-shrink-0">
    <FaMusic className="bg-red-800 text-5xl p-3 rounded-xl text-white" />
  </div>



  {/* Audio Info */}
  <div className="flex flex-col text-center sm:text-left w-full max-w-md">
    <h2 className="text-lg font-semibold text-gray-800">
      About NGB Corporation, Japan Team
    </h2>

    {/* Controls */}
    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-3 mt-2 text-gray-700">
      <div className="flex items-center gap-2">
        <FaPlay className="cursor-pointer hover:text-red-600" />
        <span className="text-sm">0:00 / 6:30</span>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2">
        <FaVolumeUp className="text-gray-600" />
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="w-20 sm:w-24 cursor-pointer accent-red-700"
          aria-label="Volume control"
        />
      </div>
    </div>
  </div>
</div>


        {/* Description Section */}
        <div className="mt-8 text-left max-w-4xl mx-auto text-gray-800 leading-relaxed">
          <h2 className="font-semibold mb-2">
            About NGB Corporation, Japan Team
          </h2>
          <p className="mb-4">
            Bangladesh’s trademark system has witnessed a historic leap forward
            in 2025. The Department of Patents, Designs and Trademarks (DPDT)
            has made significant strides toward digital transformation and
            efficiency by introducing a new online filing and examination system
            under WIPO’s IPAS4 platform.
          </p>

          <h3 className="font-semibold mb-2">Key Highlights of the Event</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Long-Pending Trademarks:</strong> Both teams discussed the
              challenges surrounding pending applications at the Bangladesh
              Department of Patents, Designs and Trademarks (DPDT).
            </li>
            <li>
              <strong>Collaborative Solutions:</strong> The meeting explored how
              combining NGB’s international experience with MENTORIP’s local
              expertise could streamline IP protection.
            </li>
            <li>
              <strong>Future Cooperation:</strong> Both sides expressed interest
              in strengthening collaboration to enhance Bangladesh’s IP
              ecosystem.
            </li>
          </ul>
        </div>

        {/* Gallery Images */}
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-6">
          <img
            className="w-full max-w-md md:max-w-lg lg:w-[550px] rounded-xl"
            src={galleryImg1}
            alt="Gallery 1"
          />
          <img
            className="w-full max-w-md md:max-w-lg lg:w-[550px] rounded-xl"
            src={galleryImg2}
            alt="Gallery 2"
          />
        </div>

        {/* Read Next */}
        <div className="mt-10 text-gray-800 max-w-4xl mx-auto">
          <button className="text-gray-900 text-left font-bold text-2xl mt-5">
            Read Next
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {cards.map((card, idx) => (
            <DesignPage key={idx} {...card} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Gallery;
