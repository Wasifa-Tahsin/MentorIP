import React from 'react';

const Post = ({ post }) => {
  const { title, image, author, location, date, category } = post;

  return (
 <section>
       <div className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
      <img
        src={image}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-left text-xl font-semibold mb-2">{title}</h2>
      <div className="flex items-center text-sm text-[#348BCA] mb-1 space-x-2">
        <span className="font-medium text-[#177BC2]">{author}</span>
        <span>•</span>
        <span className='text-[#177BC2]'>{location}</span>
      </div>
      <div className="text-xs text-[#177BC2] text-left mb-2">{date}</div>
      {category && (
        <div className=" text-left  text-[#177BC2] text-xs font-semibold  rounded-full">
          . {category.join(' . ')}
        </div>
      )}


      
    </div>

    
 </section>
    
  );
};

export default Post;
