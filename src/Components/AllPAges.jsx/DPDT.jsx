import React from 'react';

import DpdtImg from '../../assets/image/DPDT.png'

import image1 from '../../assets/image/image box.png';
import image2 from '../../assets/image/image box (6).png';
import image3 from '../../assets/image/image box (11).png';
import image4 from '../../assets/image/image box (4).png';
import image5 from '../../assets/image/image box (10).png';
import image6 from '../../assets/image/image box (2).png';
import image7 from '../../assets/image/image box (1).png';
import image8 from '../../assets/image/image box (5).png';
import DesignPage from '../Pages/DesignPage';


const DPDT = () => {


const cards = [
                { image: image1, title: 'Trademark Basics', author: 'MENTORIP', location: 'Dhaka', date: '2025-10-27', category: ["Trademark", "Bangladesh"] },
                { image: image2, title: 'Filing Process', author: 'MENTORIP', location: 'Chittagong', date: '2025-10-26', category: ["Trademark", "Bangladesh"] },
                { image: image3, title: 'Opposition Guide', author: 'MENTORIP', location: 'Khulna', date: '2025-10-25', category: ["Trademark", "Bangladesh"] },
                { image: image4, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                { image: image5, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                { image: image6, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                { image: image7, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                { image: image8, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
              ];

    return (
         <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Text Section */}
        <div className="text-left w-full md:w-1/2">
        <span>8 posts</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            DPDT (IP Office) Bangladesh<span className="text-green-400">•</span>
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed">
           Stay updated on procedures, notices, and practices of the 
Department of Patents, Designs and Trademarks (DPDT), the 
official IP Office of Bangladesh. SUPREMEiP shares insights, 
updates, and legal developments from the DPDT.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={DpdtImg}
            alt="Assignment"
            className="rounded-xl w-full sm:w-[90%] md:w-[500px] lg:w-[650px] h-auto object-cover shadow-md"
          />
        </div>

      </div>

<div>
    

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {cards.map((card, idx) => (
          <DesignPage key={idx} {...card} />
        ))}
      </div>
</div>

      
    </section>
    );
};

export default DPDT;