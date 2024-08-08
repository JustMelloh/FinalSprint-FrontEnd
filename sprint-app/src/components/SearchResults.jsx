import React from 'react';
import PropTypes from 'prop-types';
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
                {results ? (
                    results.message ? (
                        <p>{results.message}</p>
                    ) : (
                        <>
                            <h2>Name: {results.name || 'N/A'}</h2>
                            <h2>Birthday: {results.birthday || 'N/A'}</h2>
                            {results.gifts && Object.keys(results.gifts).length > 0 ? (
                                Object.keys(results.gifts).map(category => (
                                    <div key={category}>
                                        <h3>{category.toUpperCase()}</h3>
                                        <ul>
                                            {results.gifts[category].map((gift, index) => (
                                                <li key={index}>{gift}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            ) : (
                                <p>No gifts found.</p>
                            )}
                        </>
                    )
                ) : (
                    <p>No search results found.</p>
                )}
            </div>
            <Foot />
        </div>
    );
};

SearchResults.propTypes = {
    results: PropTypes.shape({
        message: PropTypes.string,
        name: PropTypes.string,
        birthday: PropTypes.string,
        gifts: PropTypes.objectOf(
            PropTypes.arrayOf(PropTypes.string)
        )
    })
};

SearchResults.defaultProps = {};

export default SearchResults;
