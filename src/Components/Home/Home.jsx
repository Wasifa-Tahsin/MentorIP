import React from 'react';
import Login from '../Account/Login';
import EditProfile from '../Account/EditProfile';
import YourAccount from '../Account/YourAccount';
import CheckMail from '../Account/CheckMail';
import Register from '../Account/Register';
import LoginToAccount from '../Account/LoginToAccount';
import ForgetPassword from '../Account/ForgetPassword';
import SetPassword from '../Account/SetPassword';
import Success from '../Account/Success';

const Home = () => {
    return (
        <div>
            <Login></Login>
            <EditProfile></EditProfile>
            <YourAccount></YourAccount>
            <CheckMail></CheckMail>
            <Register></Register>
            <LoginToAccount></LoginToAccount>
            <ForgetPassword></ForgetPassword>
            <SetPassword></SetPassword>
            <Success></Success>
        </div>
    );
};

export default Home;