import React from "react";
import { SearchText } from "../../models/SearchText";
import "./styles.css";

interface TextSearchCardProps {
  searchText: SearchText;
}

const TextSearchCard = ({ searchText }: TextSearchCardProps) => {
  return (
    <div className="search-card">
      <h3>{searchText.id}</h3>
      <div>
        <div className="search-status">
          <div /> <span>{searchText.status}</span>
        </div>
        <button>View</button>
      </div>
    </div>
  );
};

export default TextSearchCard;
