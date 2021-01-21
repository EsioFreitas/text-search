import React from "react";
import { SearchText } from "../../models/SearchText";
import { renderStatusColor } from "../../utils/renderStatusColor";
import "./styles.css";

interface TextSearchCardProps {
  searchText: SearchText;
  toggle: Function;
}

const TextSearchCard = ({ searchText, toggle }: TextSearchCardProps) => {
  const statusColor = renderStatusColor(searchText.status);

  return (
    <div className="search-card">
      <h3>{searchText.id}</h3>
      <div>
        <div className="search-status">
          <div style={{ backgroundColor: statusColor }} />
          <span style={{ color: statusColor }}>{searchText.status}</span>
        </div>
        <button onClick={() => toggle(searchText)}>View</button>
      </div>
    </div>
  );
};

export default TextSearchCard;
