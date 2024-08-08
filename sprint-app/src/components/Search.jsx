import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from './partials/Head';
import Nav from './partials/Nav';
import Foot from './partials/Foot';

const Search = ({ onSearch }) => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(
            `http://localhost:8080/villager/search/${name}`
          );
          await onSearch(response.data);
          navigate("/results");
        } catch (error) {
            console.error('Error during search:', error);
            
        }
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
