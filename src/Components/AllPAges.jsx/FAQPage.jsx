import React from 'react';
import image1 from '../../assets/image/image box (2).png'
import image2 from '../../assets/image/image box (4).png'
import image3 from '../../assets/image/image box (10).png'
import DesignPage from '../Pages/DesignPage';

const FAQPage = () => {

     const cards = [
            { image: image1, title: 'Trademark Basics', author: 'MENTORIP', location: 'Dhaka', date: '2025-10-27', category: ["Trademark", "Bangladesh"] },
            { image: image2, title: 'Filing Process', author: 'MENTORIP', location: 'Chittagong', date: '2025-10-26', category: ["Trademark", "Bangladesh"] },
            { image: image3, title: 'Opposition Guide', author: 'MENTORIP', location: 'Khulna', date: '2025-10-25', category: ["Trademark", "Bangladesh"] },
           
          ];
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="text-left max-w-2xl">
            <span>3 posts</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
         FAQ <span className="text-green-400">•</span>
          </h2>
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

export default FAQPage;