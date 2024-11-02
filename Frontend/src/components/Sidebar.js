import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="bg-gray-200 w-64 h-full p-4">
            <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
