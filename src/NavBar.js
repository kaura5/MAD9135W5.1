import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>About</NavLink>
            <NavLink to="/projects" style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>Projects</NavLink>
        </>
    )
}

export default NavBar;