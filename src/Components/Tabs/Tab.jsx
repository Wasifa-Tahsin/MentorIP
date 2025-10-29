import React from 'react';
import { NavLink } from 'react-router';

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

const Tab = () => {
  return (
    <section>
      <div className="w-full flex justify-center mt-10 overflow-x-auto">
        <nav className="text-[10px] space-x-3 flex">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `px-1 py-1 rounded-xl cursor-pointer ${
                  isActive
                    ? 'text-red-700'
                    : 'bg-gray-50 hover:bg-purple-500 hover:text-white'
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Tab;
