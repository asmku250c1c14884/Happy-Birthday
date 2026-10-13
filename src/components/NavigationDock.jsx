import React from 'react';
import { NavLink } from 'react-router';
import './NavigationDock.css';
import { FaHome, FaBirthdayCake, FaImages, FaTrophy, FaEnvelopeOpenText } from 'react-icons/fa';
import { GiMagicLamp } from 'react-icons/gi';

const NavigationDock = () => {
    const navItems = [
        { path: '/', label: 'Home', icon: <FaHome /> },
        { path: '/wish', label: 'Wish பண்ணுங்க', icon: <FaBirthdayCake /> },
        { path: '/memories', label: 'நினைவுகள்', icon: <FaImages /> },
        { path: '/awards', label: 'விருதுகள்', icon: <FaTrophy /> },
        { path: '/fortune', label: 'வாழ்த்து ஜாடி', icon: <GiMagicLamp /> },
        { path: '/love-letter', label: 'கடிதங்கள்', icon: <FaEnvelopeOpenText /> },
    ];

    return (
        <nav className="nav-dock-container" aria-label="Main Navigation">
            <div className="nav-dock">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-dock-item ${isActive ? 'nav-active' : ''}`}
                        title={item.label}
                    >
                        <span className="nav-dock-icon">{item.icon}</span>
                        <span className="nav-dock-label">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default NavigationDock;
