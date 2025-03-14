import React from 'react';
import './Header.css'; // Import CSS
import tedex from '../assets/tedex.png';

const Header = () => {
    return (
        <nav className="header">
            <img src={tedex} alt="tedexlogo" className="header-logo" />
            <ol className="nav-list">
                <li><a href="Home.jsx">Home</a></li>
                <li><a href="about.jsx">About</a></li>
                <li><a href="#">Theme</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Performers</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ol>
        </nav>
    );
};

export default Header;
