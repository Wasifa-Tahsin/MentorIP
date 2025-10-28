import React from "react";
import image2 from "../../assets/image/image box (6).png";
import image5 from "../../assets/image/image box (10).png";
import image6 from "../../assets/image/image box (2).png";

import DesignPage from "../Pages/DesignPage";

const JournalPage = () => {
  const cards = [
    {
      image: image2,
      title: "Filing Process",
      author: "MENTORIP",
      location: "Chittagong",
      date: "2025-10-26",
      category: ["Trademark", "Bangladesh"],
    },

    {
      image: image5,
      title: "Renewal Tips",
      author: "MENTORIP",
      location: "Sylhet",
      date: "2025-10-24",
      category: ["Trademark", "Bangladesh"],
    },
    {
      image: image6,
      title: "Renewal Tips",
      author: "MENTORIP",
      location: "Sylhet",
      date: "2025-10-24",
      category: ["Trademark", "Bangladesh"],
    },
   
    
    
   
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Text Section */}
        <div className="text-left w-full md:w-1/2">
          <span>3 posts</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
           Journal<span className="text-green-400">•</span>
          </h2>
        </div>
      </div>

      <div>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {cards.map((card, idx) => (
            <DesignPage key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalPage;
