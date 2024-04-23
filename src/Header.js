// Header.js
import React from 'react';
import './Header.css'; // Make sure to create this CSS file

const Header = () => {
    return (
        <header className="app-header">
            <h1>My App</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
