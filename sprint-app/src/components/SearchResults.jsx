import React from 'react';
import Head from './partials/Head';
import Nav from './partials/Nav';
import Foot from './partials/Foot';

const SearchResults = ({ results }) => {
    return (
        <div>
            <Head />
            <Nav />
            <div>
                <h1>Search Results</h1>
                {console.log('results:', results)}
                {results && results.gifts ? (
                    <>
                        <h2>Name: {results.name}</h2>
                        <h2>Birthday: {results.birthday}</h2>
                        {Object.keys(results.gifts).map(category => (
                            <div key={category}>
                                <h3>{category.toUpperCase()}</h3>
                                <ul>
                                    {results.gifts[category].map((gift, index) => (
                                        <li key={index}>{gift}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
            <Foot />
        </div>
    );
};

export default SearchResults;

