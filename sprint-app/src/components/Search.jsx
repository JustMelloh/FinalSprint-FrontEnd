import React, { useState } from 'react';
import Head from './partials/Head';
import Nav from './partials/Nav';
import Foot from './partials/Foot';

const Search = ({ onSearch }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(name); // Call the passed onSearch function
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

