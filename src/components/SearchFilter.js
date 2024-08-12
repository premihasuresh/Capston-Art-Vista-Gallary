import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        onSearch({ query, category });
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                {/* Add categories dynamically */}
                <option value="painting">Painting</option>
                <option value="sculpture">Sculpture</option>
            </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchFilter;