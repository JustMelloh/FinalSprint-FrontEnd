import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from './partials/Head';
import Nav from './partials/Nav';
import Foot from './partials/Foot';

const Search = ({ onSearch }) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(name);
        navigate('/results');
    };

    return (
        <div>
            <Head />
            <Nav />
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Search..." 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <Foot />
        </div>
    );
};

export default Search;


