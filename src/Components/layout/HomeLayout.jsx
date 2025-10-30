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
        <div className='max-w-7xl w-full mx-auto px-4'>
  <div className='my-6'>
    <Posts />
  </div>

  <div className='my-6'>
    <button className='bg-red-700 p-3 w-full sm:w-auto text-white rounded-xl'>Learn More</button>
  </div>

  <div className='my-6'>
    <NewsLatter />
  </div>

  <div className='my-6'>
    <TradeMark />
  </div>

  <div className='my-6'>
    <Patent />
  </div>

  <div className='my-6'>
    <Design />
  </div>

  <div className='my-6'>
    <FAQ />
  </div>

  <div className='my-6'>
    <IPR />
  </div>

  <div className='my-6'>
    <Assignment />
  </div>

  <div className='my-6'>
    <IP />
  </div>

  <div className='my-6'>
    <Bangladesh />
  </div>

  <div className='my-6'>
    <IPNews />
  </div>

  <div className='my-6'>
    <Registration />
  </div>

  <div className='my-6'>
    <DPDT />
  </div>
</div>

    );
};

export default HomeLayout;