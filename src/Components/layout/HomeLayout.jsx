import React from 'react';
import Banner from '../Ui/Banner';
import Posts from '../Posts/Posts';
import NewsLatter from '../Ui/NewsLatter';
import TradeMark from '../Pages/TradeMark';
import Patent from '../Pages/Patent';
import Design from '../Pages/Design';
import FAQ from '../Pages/FAQ';
import IPR from '../Pages/IPR';



const HomeLayout = () => {

   
    
    return (
        <div>
          <Banner></Banner>
          <Posts></Posts>

          <button className='bg-red-700 p-3 m-5 text-white rounded-xl'>Learn More</button>
          <NewsLatter></NewsLatter>
          <TradeMark></TradeMark>
          <Patent></Patent>
          <Design></Design>
          <FAQ></FAQ>
          <IPR></IPR>
           
        </div>
    );
};

export default HomeLayout;