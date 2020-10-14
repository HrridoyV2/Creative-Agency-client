import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import HeaderClients from '../HeaderClients/HeaderClients';

const Header = () => {
    return (
        <div>
            <div  className="curved-bg">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </div><br/><br/>
            <HeaderClients></HeaderClients>
        </div>
    );
};

export default Header;