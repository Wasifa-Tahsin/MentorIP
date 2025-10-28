import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import { Outlet,  useLocation,  useNavigation } from "react-router";
import Tab from "../Tabs/Tab";
import Menu from "../Menu/Menu";
import Banner from "../Ui/Banner";

const Root = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>

     {/* <Tab></Tab> */}
      <div className="flex justify-between gap-5 container mx-auto px-4 py-6">
        <Menu></Menu>

      
        <div className="flex-1">
  <Tab />
  {isHome ? <Banner /> : <Outlet />}
</div>

      </div>

      

      {isNavigating && <span>Loading...</span>}
      <Footer></Footer>
    </div>
  );
};

export default Root;
