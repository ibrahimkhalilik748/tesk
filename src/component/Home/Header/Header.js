import React from 'react';
import Body from '../Body/Body';
import Navbar from '../Navbar/Navbar';
import HeadBody from './HeadBody/HeadBody';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HeadBody></HeadBody><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Body></Body>
        </div>
    );
};

export default Header;