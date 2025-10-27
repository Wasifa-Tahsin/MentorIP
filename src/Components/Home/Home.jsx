import React from 'react';
import Login from '../Account/Login';
import EditProfile from '../Account/EditProfile';
import YourAccount from '../Account/YourAccount';

const Home = () => {
    return (
        <div>
            <Login></Login>
            <EditProfile></EditProfile>
            <YourAccount></YourAccount>
        </div>
    );
};

export default Home;