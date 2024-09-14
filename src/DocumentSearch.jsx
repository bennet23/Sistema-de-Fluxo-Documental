import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Searched from "./Searched";

function DocumentSearch({ onSearch }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    handleSearch(onSearch);
  }, [onSearch]);

  const handleSearch = async (searchTerm) => {
    try {
      // Make the API call to the backend with the search term
      const response = await fetch(
        `http://localhost:8080/api/search?query=${searchTerm}`
      );
      const data = await response.json();

      // Set the results in state
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="search-results">
        {searchResults.map((result, index) => (
          <Searched
            key={index}
            DocumentType={result.documentType}
            StudentName={result.studentName}
            ModifiedBy={result.modifiedBy}
            DateModified={result.dateModified}
          />
        ))}
      </div>
    </div>
  );
}

export default DocumentSearch;
