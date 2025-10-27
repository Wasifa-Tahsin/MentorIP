import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { Outlet } from 'react-router';
import Tab from '../Tabs/Tab';

const Root = () => {
    return (
        <div >
            <Header></Header>
            <Tab></Tab>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;