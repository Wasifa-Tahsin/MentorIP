import React, { useState } from "react";
import headerLogo from "../assets/image/headerLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { NavLink } from "react-router";
import { TfiMenuAlt } from "react-icons/tfi";
import Tab from "./Tabs/Tab";

const tabs = [
  { name: 'All Posts', path: '/' },
  { name: 'Assignment', path: '/assignment' },
  { name: 'Bangladesh', path: '/bangladesh' },
  { name: 'Case Study', path: '/caseStudy' },
  { name: 'Design', path: '/design' },
  { name: 'DPDT (IP Office) Bangladesh', path: '/dpdt' },
  { name: 'FAQ', path: '/FAQ' },
  { name: 'IP Laws and Rules', path: '/ip-laws' },
  { name: 'IP News', path: '/ip-news' },
  { name: 'IPR Enforcement', path: '/ipr-enforcement' },
  { name: 'Journal', path: '/journal' },
  { name: 'Opposition', path: '/opposition' },
  { name: 'Patent', path: '/patent' },
  { name: 'Registration', path: '/registration' },
  { name: 'Renewal', path: '/renewal' },
  { name: 'Trademark', path: '/trademark' },
  { name: 'Utility Model', path: '/utility-model' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full bg-white shadow-md">
      <header className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4 relative">
        {/* Logo + Hamburger for mobile */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between">
          <TfiMenuAlt
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <img className="h-10 w-auto" src={headerLogo} alt="Company Logo" />
        </div>

        {/* Center: Search Bar */}
        <div className="relative w-full md:w-1/2 mt-2 md:mt-0">
          <input
            className="w-full h-11 pl-12 pr-10 border border-gray-200 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            type="search"
            name="search"
            placeholder="Search"
          />
          <IoSearchOutline className="absolute left-4 top-3.5 text-gray-400 text-xl cursor-pointer" />
          <MdEdit className="absolute right-4 top-3.5 text-gray-500 text-xl cursor-pointer" />
        </div>

        {/* Right: User Icon */}
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <NavLink to="/login">
            <h2 className="bg-gray-200 text-2xl p-2 rounded-full text-[#B14034] hover:bg-gray-300 transition">
              <LuUser />
            </h2>
          </NavLink>
        </div>
      </header>

      {/* Tabs Section */}
      {/* Desktop tabs */}
     <Tab/>

      {/* Mobile tabs (hamburger menu) */}
      {menuOpen && (
        <div className="md:hidden w-full border-t border-gray-200 bg-white">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                onClick={() => setMenuOpen(false)} // close menu after click
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl cursor-pointer ${
                    isActive
                      ? 'text-red-700 font-semibold'
                      : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
};

export default Header;
