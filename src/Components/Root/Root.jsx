import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Login from '../Account/Login';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;