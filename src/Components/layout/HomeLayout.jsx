import React from 'react';
import Banner from '../Ui/Banner';
import Posts from '../Posts/Posts';
import NewsLatter from '../Ui/NewsLatter';



const HomeLayout = () => {

   
    
    return (
        <div>
          <Banner></Banner>
          <Posts></Posts>

          <button className='bg-red-700 p-3 m-5 text-white rounded-xl'>Learn More</button>
          <NewsLatter></NewsLatter>
           
        </div>
    );
};

export default HomeLayout;