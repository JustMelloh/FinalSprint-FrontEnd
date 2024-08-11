import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import Home from "./components/Home";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [results, setResults] = useState(null);

  const handleSearch = async (name) => {
    console.log(`Searching for villager with name: ${name}`);
    try {
      const response = await axios.get(
        `http://34.197.138.194:8080/villager/search/${name}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error during search:", error);
      setResults({ message: "No search results found" });
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

