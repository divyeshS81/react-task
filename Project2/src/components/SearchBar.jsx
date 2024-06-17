// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="p-4 flex justify-end">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Cars"
        className="p-2 border"
      />
    </div>
  );
};

export default SearchBar;
