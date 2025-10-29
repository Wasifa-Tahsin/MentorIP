import React from "react";
import ClientEmojiImg from "../../assets/image/ClientEmoji.png";
import device from "../../assets/image/AllDevice.png";
import ContactUs from "../Ui/ContactUs";
import Menu from "../Menu/Menu";

const OurClients = () => {
  return (
    <section className="min-h-screen mt-2  px-4 md:px-10">
      {/* Title */}
      <main className="w-full flex flex-col items-center text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          Our Clients
        </h2>

        {/* Image */}
        <div className="mt-4 flex justify-center">
          <img
            src={ClientEmojiImg}
            alt="Clients"
            className="w-full max-w-3xl md:max-w-4xl h-auto rounded-xl object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl text-gray-700 leading-relaxed mt-10 space-y-4 text-left">
          <p>
            <strong>MENTORIP</strong> proudly serves a wide-ranging and prestigious international
            clientele—from breakthrough innovators to household global brands.
            With a track record of precision, confidentiality, and proactive
            legal support, we have earned the trust of some of the world’s most
            prominent corporations and IP law firms.
          </p>

          <p>
            Our portfolio includes celebrated names across various industries,
            such as:
          </p>

          {/* Industry List */}
          <div className="space-y-4 text-[15px]">
            <div>
              <p className="font-semibold text-gray-800">
                🛠 Consumer Electronics & Technology
              </p>
              <p>
                Apple, Samsung, Huawei, Xiaomi, OPPO, Sony, OnePlus, Philips,
                Panasonic, HTC, TCL, Lenovo, LG, Infinix, ASUS, Gigabyte, MSI,
                HP, Haier, Sharp & more...
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">🚗 Automobile & Mobility</p>
              <p>
                Tesla, BMW, Mercedes-Benz, Honda, Ford, Ferrari, Mazda, BYD,
                Hero, Bajaj & more...
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">👕 Fashion & Lifestyle</p>
              <p>
                Nike, Adidas, Reebok, FILA, HUGO BOSS, Gucci, Louis Vuitton,
                Ralph Lauren, H&M, Macy’s, Tommy Hilfiger & more...
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">🛍 Retail & FMCG</p>
              <p>
                Nestlé, Maggi, Olay, L’Oréal, Carlsberg, Nescafé, Burger King &
                more...
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                💊 Healthcare & Pharma
              </p>
              <p>Medtronic, Abbott, Novartis & more...</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">🏨 Hospitality & Media</p>
              <p>Hilton, Twitter, SM Entertainment & more...</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                ⚙ Industrial & Energy
              </p>
              <p>Carrier, Midea, UltraTech Cement, Mahindra & more...</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3 mt-6">
            <p>
              ✨ <strong>We are proud to serve over 7,000 active clients</strong> and collaborate with
              more than 350 associates worldwide, making SUPREMEiP one of the
              most trusted and connected IP law firms in the region.
            </p>

            <p>
              💼 Our clients span across diverse industries — from tech giants and
              automotive leaders to fashion houses, FMCG brands, and pharma
              innovators.
            </p>

            <p>
              Whether you’re securing a trademark, enforcing IP rights, or
              managing patent portfolios, <strong>MENTORIP</strong> delivers trusted
              legal solutions with excellence and integrity — tailored to each
              client’s goals across jurisdictions.
            </p>
          </div>
        </div>

 {/* Image */}
    <div className="mt-10 flex justify-center">
  <img
    src={device}
    alt="Clients"
    className="w-full max-w-7xl md:max-w-4xl h-auto rounded-xl object-cover"
  />
</div>



        {/* contact */}
        <ContactUs></ContactUs>

      </main>
     
    </section>
  );
};

export default OurClients;
