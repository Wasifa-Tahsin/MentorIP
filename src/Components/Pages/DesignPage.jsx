import React from 'react';

const DesignPage = ({ image, title, author, location, date, category }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-left text-xl font-semibold mb-2">{title}</h2>
      <div className="flex items-center text-sm text-[#348BCA] mb-1 space-x-2">
        {author && <span className="font-medium text-[#177BC2]">{author}</span>}
        {author && location && <span>•</span>}
        {location && <span className="text-[#177BC2]">{location}</span>}
      </div>
      {date && <div className="text-xs text-[#177BC2] text-left mb-2">{date}</div>}
      {category && category.length > 0 && (
        <div className="text-left text-[#177BC2] text-xs font-semibold rounded-full">
          . {category.join(' . ')}
        </div>
      )}
    </div>
  );
};

export default DesignPage;
