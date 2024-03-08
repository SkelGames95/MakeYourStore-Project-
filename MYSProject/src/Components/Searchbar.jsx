/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Searchbar.css";

export function Searchbar(props) {
  const [data, setData] = useState("");

  function handleChangeInputData(event) {
    const value = event.target.value;
    setData(value);
  }

  function handleSearchClick(event) {
    event.preventDefault();
    props.onSearch(data);
  }
  return (
    <div className="search">
      <input
        type="text"
        value={data}
        onChange={handleChangeInputData}
        placeholder="Search here..."
      />
      <button className="search-icon-button" onClick={handleSearchClick}>
        <img className="search-icon" src="../assets/images/search.svg" />
      </button>
    </div>
  );
}
