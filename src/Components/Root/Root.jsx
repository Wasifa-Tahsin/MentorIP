import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import { Outlet,  useLocation,  useNavigation } from "react-router";
import Tab from "../Tabs/Tab";
import Menu from "../Menu/Menu";
import Banner from "../Ui/Banner";
import HomeLayout from "../layout/HomeLayout";

const Root = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>

     {/* <Tab></Tab> */}
 <div className="container mx-auto">
  {/* Grid part: Menu + Banner + Tab */}
  <div className="grid grid-cols-[auto_1fr]">
    <Menu />

    <div className="w-full">
      <Tab />
      {isHome && <Banner />}
    </div>
  </div>

  {/* HomeLayout separate full width section */}
  {isHome ? (
    <HomeLayout />
  ) : (
    // ✅ Adjusted Outlet position to remove banner gap
    <div className="-mt-[350px] w-full ">
      <Outlet />
    </div>
  )}
</div>




      

      {isNavigating && <span>Loading...</span>}
      <Footer></Footer>
    </div>
  );
};

export default Root;
