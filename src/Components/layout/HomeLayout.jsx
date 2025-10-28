import React from 'react';
import Banner from '../Ui/Banner';
import Posts from '../Posts/Posts';
import NewsLatter from '../Ui/NewsLatter';
import TradeMark from '../Pages/TradeMark';
import Patent from '../Pages/Patent';
import Design from '../Pages/Design';
import FAQ from '../Pages/FAQ';
import IPR from '../Pages/IPR';
import Assignment from '../Pages/Assignment';
import IP from '../Pages/IP';
import Bangladesh from '../Pages/Bangladesh';
import IPNews from '../Pages/IPNews';
import Registration from '../Pages/Registration';
import DPDT from '../AllPAges.jsx/DPDT';



const HomeLayout = () => {

   
    
    return (
        <div>
          {/* <Banner></Banner> */}
          <Posts></Posts>

          <button className='bg-red-700 p-3 m-5 text-white rounded-xl'>Learn More</button>
          <NewsLatter></NewsLatter>
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
    );
};

export default HomeLayout;