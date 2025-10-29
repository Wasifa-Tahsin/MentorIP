import React from "react";
import TradeMark from "../Pages/TradeMark";
import Patent from "../Pages/Patent";
import Design from "../Pages/Design";
import FAQ from "../Pages/FAQ";
import IPR from "../Pages/IPR";
import Assignment from "../Pages/Assignment";
import IP from "../Pages/IP";
import Bangladesh from "../Pages/Bangladesh";
import IPNews from "../Pages/IPNews";
import Registration from "../Pages/Registration";

const Tags = () => {
  return (
    <section className=" max-w-4xl mx-auto  ">
      <div className=" px-4 text-left flex flex-col gap-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Tags
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Subscribe to our Newsletter
        </p>

        {/* Subscribe Form */}
        <form className="relative w-full max-w-md ">
          <input
            type="email"
            placeholder="Type your email"
            className="w-full px-4 py-3 pr-32  rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B14034] text-gray-700 placeholder-gray-400 bg-gray-200"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full px-6 bg-[#B14034] text-white rounded-r-lg font-semibold hover:bg-red-900 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div>
        <TradeMark></TradeMark>
        <Patent></Patent>
        <Design></Design>
        <FAQ></FAQ>
        <IPR></IPR>
        <Assignment></Assignment>
        <IP></IP>
        <Bangladesh></Bangladesh>
        <IPNews></IPNews>
        <Registration></Registration>
      </div>
    </section>
  );
};

export default Tags;
