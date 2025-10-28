import React from 'react';
import headerLogo from '../assets/image/headerLogo.png'
import { IoSearchOutline } from 'react-icons/io5';

import { MdEdit } from 'react-icons/md';
import { LuUser } from 'react-icons/lu';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <header className=" container mx-auto  flex  items-center justify-between ">
            <div className=''>
                <img className="" src={headerLogo} alt="Company Logo" />
            </div>
           

            <div className='flex flex-col   relative'>

                
                <input className='w-full h-12 px-15  border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B14034] ' type="search" name="search" placeholder='Search'  id="" />
                <IoSearchOutline  className='absolute left-8 mt-4     text-gray-400 cursor-pointer'/>

                <MdEdit className='absolute right-3 mt-4' />
            </div>

            <div>
                <NavLink to='/ourClients'><h2 className=' bg-gray-200 text-2xl py-2 px-2 rounded-full text-[#B14034]'><LuUser className='' /></h2></NavLink>
            </div>
        </header>
    );
};

export default Header;
