import React from 'react';

const Post = ({ post }) => {
  const { title, image, author, location, date, category } = post;

  return (
    <section>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-48 lg:h-52 object-cover rounded-md mb-4"
        />

        {/* Title */}
        <h2 className="text-left text-base sm:text-lg md:text-xl font-semibold mb-2 truncate">
          {title}
        </h2>

        {/* Author & Location */}
        <div className="flex flex-wrap items-center text-xs sm:text-sm text-[#348BCA] mb-1 gap-1 sm:gap-2">
          <span className="font-medium text-[#177BC2] truncate">{author}</span>
          <span>•</span>
          <span className="text-[#177BC2] truncate">{location}</span>
        </div>

        {/* Date */}
        <div className="text-[10px] sm:text-xs text-[#177BC2] text-left mb-2">{date}</div>

        {/* Category */}
        {category && (
          <div className="text-left text-[10px] sm:text-xs text-[#177BC2] font-semibold flex flex-wrap gap-1">
            {category.map((cat, index) => (
              <span key={index} className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] sm:text-xs">
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Post;
