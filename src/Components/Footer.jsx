import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/image/logo.png";
import "./style.css"; // Import your custom CSS file

const Footer = () => {
  return (
    
   <footer>
   <div className="flex justify-center items-center">
     <img
          className="w-[322.35px] h-[92.29px]"
          src={logo}
          alt="Logo"
        />
   </div>
     <section className="mt-5  text-white ">
      {/* 🔻 V Shape Section */}
      <div className=" "></div>

      {/* Logo */}
     

      {/* Footer Content */}
      <footer className="bg-[#B33A2E] pt-16 pb-6">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Page */}
          <div>
            <h3 className="font-semibold mb-4">Page</h3>
            <ul className="space-y-2">
              <li>Lawyer</li>
              <li>Appointment</li>
              <li>Documentation</li>
              <li>Cases</li>
              <li>News</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Business Law</li>
              <li>Education Law</li>
              <li>Legal Consultant</li>
              <li>General Lawyer</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>Term of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molesti.
            </p>
            <div className="flex justify-center items-center space-x-3 mt-2">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>+22 7272 8282</li>
              <li>+7889 Mechanic Rd, Miami, FL 33125</li>
              <li>northmanlaw@domain.com</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-10">
          Copyright ©2022 Northman All Right Reserved
        </p>
      </footer>
    </section>
   </footer>
  );
};

export default Footer;
