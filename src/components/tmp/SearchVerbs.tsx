import React, { useState } from "react";
import axios from "axios";
import "../../styles/searchVerbs.css";

interface Verb {
  meaning: string;
  present: string;
  past: string;
  past_participle: string;
}

const SearchVerbs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9020/api/verbs?search=${searchTerm}`
      );
      if (response.data.length === 0) {
        setErrorMessage(`No results found for "${searchTerm}"`);
      } else {
        setVerbs(response.data);
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error fetching verbs:", error);
    }
  };

  return (
    <div className="search-verbs-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a verb"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <div className="table-container">
        <table className={verbs.length === 0 ? "hidden" : ""}>
          <thead>
            <tr>
              <th>Meaning</th>
              <th>Present</th>
              <th>Past</th>
              <th>Past Participle</th>
            </tr>
          </thead>
          <tbody>
            {verbs.map((verb, index) => (
              <tr key={index}>
                <td>{verb.meaning}</td>
                <td>{verb.present}</td>
                <td>{verb.past}</td>
                <td>{verb.past_participle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchVerbs;
