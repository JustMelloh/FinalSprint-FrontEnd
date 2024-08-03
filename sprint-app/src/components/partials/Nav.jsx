import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">[Home]</Link>
            <Link to="/search">[Search]</Link>
            {/* <Link to="/login">[Login]</Link>
            <Link to="/register">[Register]</Link> */}
        </nav>
    );
};

export default Nav;
