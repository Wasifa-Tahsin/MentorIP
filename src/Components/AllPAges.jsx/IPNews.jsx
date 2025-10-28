import React from 'react';
import IPNewsImg from '../../assets/image/IPNews.png'


import image2 from '../../assets/image/image box (6).png';
import image4 from '../../assets/image/image box (4).png';
import image6 from '../../assets/image/image box (2).png';
import image7 from '../../assets/image/image box (1).png';
import image8 from '../../assets/image/image box (5).png';
import DesignPage from '../Pages/DesignPage';

const IPNews = () => {

     const cards = [
                       
                        { image: image2, title: 'Filing Process', author: 'MENTORIP', location: 'Chittagong', date: '2025-10-26', category: ["Trademark", "Bangladesh"] },
                        { image: image4, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                        { image: image6, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                        { image: image7, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                        { image: image8, title: 'Renewal Tips', author: 'MENTORIP', location: 'Sylhet', date: '2025-10-24', category: ["Trademark", "Bangladesh"] },
                      ];
    return (
           <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Text Section */}
        <div className="text-left w-full md:w-1/2">
        <span>5 posts</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            IP News<span className="text-green-400">•</span>
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed">
         Stay informed with the latest updates in intellectual property law. 
MENTORIP brings you breaking news, legal changes, global treaties, and 
industry developments in trademarks, patents, designs, and copyright.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={IPNewsImg}
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

export default IPNews;