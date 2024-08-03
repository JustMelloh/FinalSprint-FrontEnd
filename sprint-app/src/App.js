import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

const App = () => {
    const [results, setResults] = useState(null);

    const handleSearch = (name) => {
        // Placeholder logic for search
        // In the future, replace this with actual search logic
        const searchResults = null; // Replace this with actual search logic

        if (!searchResults) {
            setResults({ message: "No search results found" });
        } else {
            setResults(searchResults);
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search onSearch={handleSearch} />} />
                <Route path="/results" element={<SearchResults results={results} />} />
            </Routes>
        </Router>
    );
};

export default App;

