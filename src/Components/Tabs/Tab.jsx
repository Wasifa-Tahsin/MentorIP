import React from 'react';
import { NavLink } from 'react-router';

const Tab = () => {
    return (
        <div className=' w-full flex justify-center mt-10'>
            <nav className='text-[10px] space-x-3'>
              <NavLink to='/'><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>All Posts</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Assignment</button></NavLink>
              <NavLink to=''><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Bangladesh</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Case Study</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Design</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>DPDT (IP Office) Bangladesh</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>FAQ</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>IP Laws and Rules</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>IP News</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>IPR Enforcement</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Journal</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Opposition</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Patent</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Registration</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Renewal</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Trademark</button></NavLink>
              <NavLink><button className='px-1 py-1 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white  rounded-xl'>Utility Model</button></NavLink>
            </nav>
        </div>
    );
};

export default Tab;