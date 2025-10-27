import React from 'react';

const Post = ({ post }) => {
  const { title, image, author, location, date, category } = post;

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-left text-xl font-semibold mb-2">{title}</h2>
      <div className="flex items-center text-sm text-[#348BCA] mb-1 space-x-2">
        <span className="font-medium text-[#348BCA]">{author}</span>
        <span>•</span>
        <span>{location}</span>
      </div>
      <div className="text-xs text-[#348BCA] text-left mb-2">{date}</div>
      {category && (
        <div className=" text-left  text-[#348BCA] text-xs font-semibold  rounded-full">
          .{category.join(' . ')}
        </div>
      )}
    </div>
  );
};

export default Post;
