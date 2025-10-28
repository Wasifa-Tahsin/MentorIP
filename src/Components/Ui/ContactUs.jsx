import React from 'react';
import { FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp, IoLogoWechat, IoMail } from 'react-icons/io5';
import connectImg from "../../assets/image/connect.png";
const ContactUs = () => {
    return (
        <section>
            <div className="mt-10 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">📩 Contact Us</h2>
            <p>
              We would be delighted to assist you with your intellectual
              property needs. Reach out to us anytime through the following
              channels:
            </p>

            <div className="space-y-3 text-[15px]">
              <p className="font-semibold text-gray-700">
                🏢 MENTORIP Law Firm
              </p>

              <p className="flex items-center gap-2 flex-wrap">
                <IoLocationSharp className="text-gray-600" />
                121 Motijheel C/A (1st Floor), Dhaka-1000, Bangladesh
              </p>

              <p className="flex items-center gap-2 flex-wrap">
                <FaPhoneAlt className="text-gray-600" />
                Phone/WhatsApp: +8801613336333
              </p>

              <p className="flex items-center gap-2 flex-wrap">
                <IoMail className="text-gray-600" />
                Email: info@mentorip.com | ip365bd@gmail.com
              </p>

              <p className="flex items-center gap-2 flex-wrap">
                <FaGlobe className="text-gray-600" /> www.mentorip.com
              </p>

              <p className="flex items-center gap-2 flex-wrap">
                <IoLogoWechat className="text-gray-600" /> WeChat: MENTORIP
              </p>
            </div>
          </div>

           <div className="mt-10 flex justify-center">
        <img
          src={connectImg}
          alt="Connect"
          className="w-full max-w-4xl h-auto rounded-xl object-cover"
        />
      </div>
        </section>
    );
};

export default ContactUs;