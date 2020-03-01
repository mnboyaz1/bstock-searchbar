import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import "./index.css";

const locations = [
  {
    id: 1,
    city: "Orlando",
    state: "Florida"
  },
  {
    id: 2,
    city: "Minneapolis",
    state: "Minnesota"
  },
  {
    id: 3,
    city: "Chicago",
    state: "Illinois"
  },
  {
    id: 4,
    city: "Las Vegas",
    state: "Nevada"
  },
  {
    id: 5,
    city: "Tucson",
    state: "Arizona"
  },
  {
    id: 6,
    city: "Boston",
    state: "Massachusetts"
  },
  {
    id: 7,
    city: "San Diego",
    state: "California"
  }
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectResults, setSelectResults] = useState([]);
  const handleChange = e => {
    setSearchValue(e.target.value);
    if (searchValue) setSearchResults([]);
  };

  useEffect(() => {
    const results = locations.filter(location =>
      location.city.toLowerCase().includes(searchValue.toLowerCase())
    );
    results.length > 1
      ? setSelectResults(results) && setSearchResults([])
      : setSearchResults(results);
  }, [searchValue]);

  return (
    <div className="App">
      <div className="Index-header">B-Stock Code review</div>
      <div className="comboBox">
        <Autocomplete
          id="combo-box-demo"
          options={selectResults.map(item => item.city)}
          renderInput={params => (
            <TextField
              {...params}
              id="text-field"
              label="Search..."
              value={params}
              onSelect={handleChange}
              variant="outlined"
            />
          )}
        />
      </div>

      {searchResults.length > 0 && (
        <ul className="list">
          {searchResults.map(item => (
            <li key={item.id}>
              {item.city} is located in {item.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
