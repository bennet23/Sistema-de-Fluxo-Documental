import React, { useState } from "react";

function Searchbar({ setOnSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOnSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        className="searchbar__input"
        placeholder="Procurar Documentos"
        value={searchTerm}
        onChange={handleInputChange} // Update the state on every input change
      />
      <button type="submit" className="searchbar__button">
        <ion-icon name="search-outline" className="searchbar__icon"></ion-icon>
      </button>
    </form>
  );
}

export default Searchbar;
