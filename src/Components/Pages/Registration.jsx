import React from 'react';
import image1 from '../../assets/image/image box (6).png';
import image2 from '../../assets/image/image box (9).png';
import image3 from '../../assets/image/image box (1).png';
import image4 from '../../assets/image/image box (8).png';
import DesignPage from './DesignPage';
const Registration = () => {

    const cards = [
        { image: image1, title: 'Trademark Basics', author: 'MENTORIP', location: 'Dhaka', date: '2025-10-27', category: ["Trademark", "Bangladesh"] },
        { image: image2, title: 'Filing Process', author: 'MENTORIP', location: 'Chittagong', date: '2025-10-26', category: ["Trademark", "Bangladesh"] },
        { image: image3, title: 'Opposition Guide', author: 'MENTORIP', location: 'Khulna', date: '2025-10-25', category: ["Trademark", "Bangladesh"] },
        { image: image4, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
      ];
    
    return (
       <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="text-left max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
           Registration
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-700 leading-relaxed">
           Simplify your IP registration process with MENTORIP. We handle end-to-end registration of trademarks, patents, designs, 
and copyrights — ensuring compliance, speed, and protection both in Bangladesh and internationally.
          </p>
        </div>

        <div className="mt-5 md:mt-0">
          <button className="bg-red-700 px-6 py-3 text-white rounded-xl hover:bg-red-800 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <DesignPage key={idx} {...card} />
        ))}
      </div>
    </section>
    );
};

export default Registration;