import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { Outlet, useNavigation } from 'react-router';
import Tab from '../Tabs/Tab';

const Root = () => {

    const navigation=useNavigation()
    const isNavigating=Boolean(navigation.location)
    return (
        <div >
            <Header></Header>
            <Tab></Tab>
            <Outlet></Outlet>

            {
                isNavigating && <span>Loading...</span>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;