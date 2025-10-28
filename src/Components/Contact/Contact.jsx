import React from 'react';
import { IoLogoWechat } from "react-icons/io5";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import connectImg from "../../assets/image/connect.png";
import connectPicture from "../../assets/image/contactPicture.png";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center mt-10 px-4 md:px-8">
      {/* ===== Title ===== */}
      <header className="w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Contact Us
        </h2>
      </header>

      {/* ===== YouTube Video ===== */}
      <div className="w-full flex justify-center">
        <iframe
          className="rounded-xl shadow-md w-full max-w-3xl h-56 sm:h-72 md:h-96"
          src="https://www.youtube.com/embed/ukz9w-JVvIs"
          title="About MENTORIP"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* ===== Description Section ===== */}
      <main className="w-full flex flex-col items-center mt-10">
        <div className="max-w-3xl text-gray-700 leading-relaxed text-left space-y-8">
          {/* Intro */}
          <p>
            We're here to help — reach out to{" "}
            <span className="font-semibold text-[#B14034]">MENTORIP®</span> for
            expert guidance on trademarks, patents, and all your IP needs in
            Bangladesh and beyond.
          </p>

          {/* ===== Office Info ===== */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              📍 Our Office – Dhaka
            </h3>
            <p className="leading-relaxed">
              <span className="font-semibold">MENTORIP Law Firm</span>
              <br />
              Jiban Bima Bhaban (1st Floor),
              <br />
              121 Motijheel Commercial Area,
              <br />
              Dhaka-1000, Bangladesh
            </p>
          </div>

          {/* ===== Image (Mid Section) ===== */}
          <div className="mt-8 flex justify-center">
            <img
              src={connectImg}
              alt="Connect"
              className="w-full max-w-4xl h-auto rounded-xl object-cover shadow-md"
            />
          </div>

          {/* ===== Contact Info ===== */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              📞 Connect with Us
            </h3>
            <div className="space-y-2 text-[15px]">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-600" />
                <span>
                  WhatsApp (24/7):{" "}
                  <span className="font-semibold">+880 1613 336 333</span>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <IoLogoWechat className="text-gray-600" />
                <span>
                  WeChat ID:{" "}
                  <span className="font-semibold">MENTORIP</span>
                </span>
              </p>
            </div>
          </div>

          {/* ===== Email Section ===== */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              📧 Email Us
            </h3>
            <p className="text-[15px] leading-relaxed">
              Primary:{" "}
              <a
                href="mailto:info@supremeip.com"
                className="text-[#B14034] font-semibold hover:underline"
              >
                info@supremeip.com
              </a>
              <br />
              Alternative:{" "}
              <a
                href="mailto:ip365bd@gmail.com"
                className="text-[#B14034] font-semibold hover:underline"
              >
                ip365bd@gmail.com
              </a>
            </p>
          </div>

          {/* ===== LinkedIn Section ===== */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              🔗 Follow Us on LinkedIn
            </h3>
            <p className="text-[15px] leading-relaxed">
              Stay connected and get updates on intellectual property trends,
              case highlights, and legal insights from{" "}
              <span className="font-semibold text-[#B14034]">SUPREMEiP®</span>.
            </p>
            <a
              href="https://linkedin.com/company/supremeip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0077b5] font-semibold hover:underline mt-1"
            >
              <FaLinkedin className="text-xl" /> linkedin.com/company/supremeip
            </a>
          </div>

          {/* ===== Client Reviews ===== */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ⭐ What Our Clients Say
            </h3>
            <p className="text-[15px] leading-relaxed">
              We’re proud to be trusted by global IP firms, startups, and
              corporates alike. Check out what others say about working with{" "}
              <span className="font-semibold text-[#B14034]">SUPREMEiP®</span>:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <a
                href="https://www.google.com/search?q=SUPREMEiP+Bangladesh+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#B14034] text-white text-sm font-medium rounded-lg hover:bg-[#952d26] transition"
              >
                👀 Read Our Google Reviews
              </a>
              <a
                href="https://www.google.com/maps/place/SUPREMEiP/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#B14034] text-[#B14034] text-sm font-medium rounded-lg hover:bg-[#B14034] hover:text-white transition"
              >
                💬 Leave a Review
              </a>
            </div>
          </div>

          {/* ===== Final Image ===== */}
          <div className="mt-10 flex justify-center">
            <img
              src={connectPicture}
              alt="Contact"
              className="w-full max-w-4xl h-[280px] sm:h-[380px] md:h-[480px] rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
