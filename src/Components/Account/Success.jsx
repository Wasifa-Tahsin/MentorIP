import React from 'react';

const Success = () => {
    return (
       <div className=" flex justify-center items-center mt-20 px-4 mb-20">
         <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md' >
            <h2 className='text-4xl text-gray-700'>Successfully</h2>
            <p className='text-gray-400 text-[15px] mt-4'>Your password has been updated, please change your password regularly to avoid this happening</p>

             <button
                
                    className="bg-[#B14034] text-white mt-6 w-full h-12 rounded-md font-semibold hover:bg-[#912f26] transition"
                  >
                  Continue
                  </button>
        </div>
       </div>
    );
};

export default Success;