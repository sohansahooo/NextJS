// components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex-row gap-2">
            <ul className="flex gap-2">
                <li className="navbar-item">
                    <button className="navbar-link active" data-nav-link>About</button>
                </li>
                <li className="navbar-item">
                    <button className="navbar-link" data-nav-link>Resume</button>
                </li>
                <li className="navbar-item">
                    <button className="navbar-link" data-nav-link>Project</button>
                </li>
                <li className="navbar-item">
                    <button className="navbar-link" data-nav-link>Article</button>
                </li>
                <li className="navbar-item">
                    <button className="navbar-link" data-nav-link>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
