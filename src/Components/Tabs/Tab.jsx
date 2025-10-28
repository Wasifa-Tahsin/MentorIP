import React from 'react';
import { NavLink } from 'react-router';

const Tab = () => {
    return (
      <section>
          <div className='w-full flex justify-center mt-10 overflow-x-auto'>
            <nav className='text-[10px] space-x-3 flex'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? ' text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  All Posts
                </NavLink>

                <NavLink
                  to='/assignment'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? ' text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Assignment
                </NavLink>

                <NavLink
                  to='/bangladesh'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? ' text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Bangladesh
                </NavLink>

                <NavLink
                  to='/caseStudy'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Case Study
                </NavLink>

                <NavLink
                  to='/design'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Design
                </NavLink>

                <NavLink
                  to='/dpdt'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  DPDT (IP Office) Bangladesh
                </NavLink>

                <NavLink
                  to='/FAQ'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  FAQ
                </NavLink>

                <NavLink
                  to='/ip-laws'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  IP Laws and Rules
                </NavLink>

                <NavLink
                  to='/ip-news'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  IP News
                </NavLink>

                <NavLink
                  to='/ipr-enforcement'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  IPR Enforcement
                </NavLink>

                <NavLink
                  to='/journal'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Journal
                </NavLink>

                <NavLink
                  to='/opposition'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Opposition
                </NavLink>

                <NavLink
                  to='/patent'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Patent
                </NavLink>

                <NavLink
                  to='/registration'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Registration
                </NavLink>

                <NavLink
                  to='/renewal'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Renewal
                </NavLink>

                <NavLink
                  to='/trademark'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Trademark
                </NavLink>

                <NavLink
                  to='/utility-model'
                  className={({ isActive }) =>
                    `px-1 py-1 rounded-xl cursor-pointer ${
                      isActive ? 'text-red-700' : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                    }`
                  }
                >
                  Utility Model
                </NavLink>
            </nav>
        </div>
      </section>
    );
};

export default Tab;
