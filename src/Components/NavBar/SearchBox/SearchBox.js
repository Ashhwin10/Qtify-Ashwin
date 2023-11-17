import React from "react";
import "../SearchBox/SearchBox.css";
import Searchicon from "@mui/icons-material/Search";

export default function Searchbox() {
  return (
    <>
      <div>
        <input className="searchbox" />
        <button className="search-btn">
          <Searchicon />
        </button>
      </div>
    </>
  );
}
