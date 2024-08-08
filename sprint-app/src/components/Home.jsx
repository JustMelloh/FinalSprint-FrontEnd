import React from 'react';
import { Link } from 'react-router-dom';
import Head from './partials/Head';
import Nav from './partials/Nav';
import Foot from './partials/Foot';

const Home = () => {
    return (
        <div>
            <Head />
            <Nav />
            <div>
                <h1>Welcome to the home.</h1>
                <Link to="/search">Go to Search</Link>
            </div>
            <Foot />
        </div>
    );
};

export default Home;