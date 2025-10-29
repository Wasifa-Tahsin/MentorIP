import React from "react";
import { Link, NavLink } from "react-router";
import { LuUser } from "react-icons/lu";
import {
  MdOutlineHome,
  MdOutlineContactMail,
  MdEvent,
  MdOutlineMedicalServices,
} from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiGalleryLine } from "react-icons/ri";

const Menu = () => {
  return (
    <div className=" p-2 mt-7  text-sm   ">
     

      {/* Menu Links */}
      <ul className="  space-y-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-[#B14034] font-medium" : "text-gray-700"
              }`
            }
          >
            <MdOutlineHome /> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/aboutPage"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-[#B14034] font-medium" : "text-gray-700"
              }`
            }
          >
            <LuUser /> About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/ourClients"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-[#B14034] font-medium" : "text-gray-700"
              }`
            }
          >
            <RiGalleryLine /> Clients
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-[#B14034] font-medium" : "text-gray-700"
              }`
            }
          >
            <MdOutlineMedicalServices /> Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-[#B14034] font-medium" : "text-gray-700"
              }`
            }
          >
            <MdOutlineContactMail /> Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-[#B14034] font-medium" : "text-gray-700"
              }`
            }
          >
            <RiGalleryLine /> Gallery
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/event"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-[#B14034] font-medium" : "text-gray-700"
              }`
            }
          >
            <MdEvent /> Event
          </NavLink>
        </li>
      </ul>

      {/* Tags */}
      <h3 className="text-gray-500 text-left text-xs mt-8 mb-2 uppercase tracking-wide">
       <Link to='/tags'> <button className="bg-gray-100 rounded-xl cursor-pointer p-2 text-shadow-2xs text-gray-900">Tags</button></Link>
      </h3>
      <ul className=" text-left space-y-1 text-gray-700 text-sm">
        <li>• Trademark</li>
        <li>• Patent</li>
        <li>• Utility Model</li>
        <li>• Design</li>
        <li>• IPR Enforcement</li>
      </ul>
    </div>
  );
};

export default Menu;
