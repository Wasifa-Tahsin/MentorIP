import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet, useNavigation, useLocation } from "react-router";
import Tab from "../Tabs/Tab";
import Banner from "../Ui/Banner";
import Menu from "../Menu/Menu";

const Root = () => {
  const navigation = useNavigation();
  const location = useLocation();

  const isNavigating = Boolean(navigation.location);
  const isHome = location.pathname === "/"; // ✅ শুধুমাত্র হোম পেজে মেনু ও ব্যানার দেখাবে

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* ✅ Main Layout */}
      <main className="container mx-auto flex flex-col md:flex-row gap-6 px-4 py-6">
        

        {/* Right Side — Tabs + Banner */}
        <section className="flex-1 flex flex-col gap-6">
          <Tab />
          {isHome && <Banner />}
          {/* Nested page content */}
          <Outlet />
        </section>
      </main>

      {/* Loading indicator */}
      {isNavigating && (
        <div className="text-center py-2 text-gray-600 text-sm">Loading...</div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
