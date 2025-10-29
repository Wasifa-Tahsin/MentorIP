import React from "react";
import Header from "../Header";
import { IoMenu, IoLocationSharp, IoMail, IoLogoWechat } from "react-icons/io5";
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import clientImg from "../../assets/image/clients.png";

import ContactUs from "../Ui/ContactUs";

const About = () => {
  return (
    <section className="min-h-screen  px-4 md:px-10">
     

      {/* Title */}
      <main className="w-full flex flex-col items-center text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          About MENTORIP
        </h2>

        {/* Search Input */}
        <div className="relative w-full max-w-md mb-8 flex justify-center">
          <input
            className="w-full bg-gray-100 border rounded-md py-2 pl-10 text-gray-700 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="search"
            placeholder="Post Outline"
          />
          <IoMenu className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        {/* YouTube Video */}
        <div className="w-full flex justify-center">
          <iframe
            className="rounded-xl shadow-md w-full max-w-2xl h-56 sm:h-72 md:h-96"
            src="https://www.youtube.com/embed/ukz9w-JVvIs"
            title="About MENTORIP"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      {/* Description Section */}
      <main className="w-full flex flex-col items-center mt-10">
        <div className="max-w-3xl text-gray-700 leading-relaxed text-left space-y-4">
          <p>
            Founded in 2000 under the former name <strong>“Law & Legal”</strong>,
            SUPREMEiP Law Firm has grown into a premier full-service
            Intellectual Property (IP) and Corporate Law firm based in Dhaka,
            Bangladesh, with a strong presence in the UAE and a global network of
            350+ associates across China, India, Germany, USA, UK, Netherlands,
            Canada, and beyond.
          </p>

          <p>
            ✨ We proudly serve over 7,000 active clients worldwide — from
            visionary startups to multinational corporations and renowned IP law
            firms.
          </p>

          <p>
            Currently managed by{" "}
            <strong>
              Mr. J.A. Chaudhury Reagan, Advocate, Supreme Court of Bangladesh
            </strong>
            , a seasoned IP and corporate law expert with over two decades of
            experience in cross-border filings, enforcement, and international
            legal strategy.
          </p>

          <p>
            SUPREMEiP is committed to delivering strategic, result-oriented, and
            client-focused legal services, including:
          </p>

          <ul className="text-left inline-block space-y-1 list-disc list-inside">
            <li>Trademark Registration & Enforcement</li>
            <li>Patent Filing & Protection</li>
            <li>Copyright & Industrial Design</li>
            <li>Trade Secrets & Licensing</li>
            <li>IP Litigation & Dispute Resolution</li>
            <li>Company Incorporation & Corporate Advisory</li>
            <li>Startup Legal Support & Business Structuring</li>
            <li>Trade License & Regulatory Compliance</li>
          </ul>

          <p>
            Whether you’re protecting innovation or launching a new business,
            SUPREMEiP provides trusted legal guidance with precision, integrity,
            and a global perspective.
          </p>
        </div>
      </main>

      {/* Clients Image */}
      <div className="mt-10 flex justify-center">
        <img
          src={clientImg}
          alt="Clients"
          className="w-full max-w-4xl h-auto rounded-xl object-cover"
        />
      </div>

      {/* Why Choose + Contact */}
      <main className="mt-16 px-4 flex flex-col items-center">
        <div className="max-w-4xl text-left text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold">
            ✨ Why Choose <span className="text-red-600">MENTORIP</span>
          </h2>

          <div className="space-y-5 text-[15px]">
            {[
              {
                title: "Comprehensive IP & Legal Solutions",
                text: "From trademark searches and filings to patent prosecution, enforcement, and IP portfolio management — we offer end-to-end legal support under one roof.",
              },
              {
                title: "Trusted Bangladesh IP Experts",
                text: "With decades of combined experience and in-depth knowledge of local laws, we are your reliable partner before the Department of Patents, Designs and Trademarks (DPDT).",
              },
              {
                title: "Seamless Global Reach",
                text: "Through our network of 350+ international associates, we assist clients with both inbound filings in Bangladesh and outbound protection across jurisdictions.",
              },
              {
                title: "Modern, Efficient & Transparent",
                text: "We leverage digital platforms for fast communication, document tracking, client updates, and secure data handling — ensuring efficiency at every stage.",
              },
              {
                title: "Preferred by Leading Firms & Multinationals",
                text: "We are the go-to local partner for numerous global law firms, IP consultants, and multinational corporations seeking dependable representation in Bangladesh.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="font-medium text-gray-600">💠 {item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <ContactUs></ContactUs>


         
        </div>
      </main>
    </section>
  );
};

export default About;
