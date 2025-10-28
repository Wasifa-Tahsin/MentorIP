import React from 'react';
import serviceImg from '../../assets/image/service.png';
import serviceImg1 from '../../assets/image/service1.png';
import serviceImg2 from '../../assets/image/service2.png';
import serviceImg3 from '../../assets/image/service3.png';
import serviceImg4 from '../../assets/image/service4.png';
import serviceImg5 from '../../assets/image/service5.png';
import serviceImg6 from '../../assets/image/service6.png';
import ContactUs from '../Ui/ContactUs';

const Service = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10 px-4 md:px-8">
      {/* ===== Title ===== */}
      <header className="w-full text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Comprehensive Legal Solutions for Businesses and Innovators
        </p>
      </header>

      {/* ===== Intro Image ===== */}
      <img
        src={serviceImg}
        alt="MENTORIP Services"
        className="max-w-md w-full rounded-lg shadow-md"
      />

      {/* ===== Intro Description ===== */}
      <div className="mt-8 text-left max-w-3xl">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          MENTORIP® is a full-service intellectual property and corporate law firm based in Dhaka, Bangladesh.
          We offer a comprehensive range of services including Trademark, Patent, and Design Registration,
          IP Enforcement & Litigation, Copyright Protection,
          and Company Formation, Licensing, and Tax Advisory.
        </p>

        <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
          <li>Trademark, Patent & Design Registration</li>
          <li>IP Enforcement & Litigation</li>
          <li>Copyright Protection</li>
          <li>Company Formation, Licensing & Tax Advisory</li>
        </ul>

        <div className="mt-6 space-y-2">
          <p>
            ✅ <strong>Client-Focused</strong> — delivering tailored legal solutions.
          </p>
          <p>
            ⚙️ <strong>Technology-Enabled</strong> — ensuring efficient, modern services.
          </p>
        </div>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Whether you're protecting innovation, managing a brand portfolio, or navigating regulatory complexities,
          <strong> MENTORIP®</strong> delivers strategic, efficient, and reliable legal solutions — all under one roof.
        </p>
      </div>

      {/* ===== Service Banner ===== */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-12 bg-gray-100 rounded-xl py-8 px-6 md:px-10 shadow-md hover:shadow-lg transition duration-300 ">
        {/* === Text Section === */}
        <div className="text-left space-y-3 md:w-2/3">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-bold leading-snug">
            Trademark Registration & Renewal | Bangladesh
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Protect your brand identity with expert trademark services from{' '}
            <strong>MENTORIP®</strong>. We offer trademark search, filing, and
            opposition services in Bangladesh and globally.
          </p>
          <span className="text-blue-600 font-medium">
            MENTORIP®, Bangladesh
          </span>
        </div>

        {/* === Image Section === */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <img
            className="h-[190px] w-full md:w-[350px] rounded-xl object-cover"
            src={serviceImg1}
            alt="Trademark Service - MENTORIP"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 bg-gray-100 rounded-xl py-8 px-6 md:px-10 shadow-md hover:shadow-lg transition duration-300 ">
        {/* === Text Section === */}
        <div className="text-left space-y-3 md:w-2/3">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-bold leading-snug">
            Trademark Registration & Renewal | Bangladesh
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Protect your brand identity with expert trademark services from{' '}
            <strong>MENTORIP®</strong>. We offer trademark search, filing, and
            opposition services in Bangladesh and globally.
          </p>
          <span className="text-blue-600 font-medium">
            MENTORIP®, Bangladesh
          </span>
        </div>

        {/* === Image Section === */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <img
            className="h-[190px] w-full md:w-[350px] rounded-xl object-cover"
            src={serviceImg2}
            alt="Trademark Service - MENTORIP"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 bg-gray-100 rounded-xl py-8 px-6 md:px-10 shadow-md hover:shadow-lg transition duration-300 ">
        {/* === Text Section === */}
        <div className="text-left space-y-3 md:w-2/3">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-bold leading-snug">
            Trademark Registration & Renewal | Bangladesh
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Protect your brand identity with expert trademark services from{' '}
            <strong>MENTORIP®</strong>. We offer trademark search, filing, and
            opposition services in Bangladesh and globally.
          </p>
          <span className="text-blue-600 font-medium">
            MENTORIP®, Bangladesh
          </span>
        </div>

        {/* === Image Section === */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <img
            className="h-[190px] w-full md:w-[350px] rounded-xl object-cover"
            src={serviceImg3}
            alt="Trademark Service - MENTORIP"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 bg-gray-100 rounded-xl py-8 px-6 md:px-10 shadow-md hover:shadow-lg transition duration-300 ">
        {/* === Text Section === */}
        <div className="text-left space-y-3 md:w-2/3">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-bold leading-snug">
            Trademark Registration & Renewal | Bangladesh
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Protect your brand identity with expert trademark services from{' '}
            <strong>MENTORIP®</strong>. We offer trademark search, filing, and
            opposition services in Bangladesh and globally.
          </p>
          <span className="text-blue-600 font-medium">
            MENTORIP®, Bangladesh
          </span>
        </div>

        {/* === Image Section === */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <img
            className="h-[190px] w-full md:w-[350px] rounded-xl object-cover"
            src={serviceImg4}
            alt="Trademark Service - MENTORIP"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 bg-gray-100 rounded-xl py-8 px-6 md:px-10 shadow-md hover:shadow-lg transition duration-300 ">
        {/* === Text Section === */}
        <div className="text-left space-y-3 md:w-2/3">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-bold leading-snug">
            Trademark Registration & Renewal | Bangladesh
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Protect your brand identity with expert trademark services from{' '}
            <strong>MENTORIP®</strong>. We offer trademark search, filing, and
            opposition services in Bangladesh and globally.
          </p>
          <span className="text-blue-600 font-medium">
            MENTORIP®, Bangladesh
          </span>
        </div>

        {/* === Image Section === */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <img
            className="h-[190px] w-full md:w-[350px] rounded-xl object-cover"
            src={serviceImg5}
            alt="Trademark Service - MENTORIP"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 bg-gray-100 rounded-xl py-8 px-6 md:px-10 shadow-md hover:shadow-lg transition duration-300 ">
        {/* === Text Section === */}
        <div className="text-left space-y-3 md:w-2/3">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-bold leading-snug">
            Trademark Registration & Renewal | Bangladesh
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Protect your brand identity with expert trademark services from{' '}
            <strong>MENTORIP®</strong>. We offer trademark search, filing, and
            opposition services in Bangladesh and globally.
          </p>
          <span className="text-blue-600 font-medium">
            MENTORIP®, Bangladesh
          </span>
        </div>

        {/* === Image Section === */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <img
            className="h-[190px] w-full md:w-[350px] rounded-xl object-cover"
            src={serviceImg6}
            alt="Trademark Service - MENTORIP"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5 bg-gray-100 rounded-xl py-8 px-3 md:px-10 shadow-md hover:shadow-lg transition duration-300 ">
        {/* === Text Section === */}
        <div className="text-left space-y-2 md:w-2/3">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-bold leading-snug">
            Trademark Registration & Renewal | Bangladesh
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Protect your brand identity with expert trademark services from{' '}
            <strong>MENTORIP®</strong>. We offer trademark search, filing, and
            opposition services in Bangladesh and globally.
          </p>
          <span className="text-blue-600 font-medium">
            MENTORIP®, Bangladesh
          </span>
        </div>

        {/* === Image Section === */}
        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
          <img
            className="h-[190px] w-full md:w-[350px] rounded-xl object-cover"
            src={serviceImg1}
            alt="Trademark Service - MENTORIP"
          />
        </div>
      </div>


      <ContactUs/>
    </section>
  );
};

export default Service;
