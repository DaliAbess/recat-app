// Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; 2023 My App. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
