import React from "react";

const SearchBar = ({ query, onQueryChange, onSearch }) => {
  return (
    <form className="relative flex-grow" onSubmit={onSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Pencarian"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="absolute transform -translate-y-1/2 right-2 top-1/2"
      >
        <svg
          className="w-5 h-5 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
