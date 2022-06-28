import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    alert(`Searching for ${keyword}`);
    event.preventDefault();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        {" "}
        <input type="Search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
