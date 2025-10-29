
import headerLogo from "../assets/image/headerLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { MdEdit, MdMenu } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { NavLink } from "react-router";
import { TfiMenuAlt } from "react-icons/tfi";



const Header = () => {


  return (
    <section className="w-full">
      {/* Header Section */}
      <header className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4 relative">
       

        {/* Logo */}
        <div className="flex items-center gap-3">
          <TfiMenuAlt></TfiMenuAlt>
          <img className="h-10 w-auto" src={headerLogo} alt="Company Logo" />
        </div>

        {/* Center: Search Bar */}
        <div className="relative w-full md:w-1/2">
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
        <div className="flex-shrink-0">
          <NavLink to="/login">
            <h2 className="bg-gray-200 text-2xl p-2 rounded-full text-[#B14034] hover:bg-gray-300 transition">
              <LuUser />
            </h2>
          </NavLink>
        </div>
      </header>

   

      
   
    </section>
  );
};

export default Header;
