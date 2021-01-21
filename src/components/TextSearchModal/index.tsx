import React from "react";
import { SearchText } from "../../models/SearchText";
import "./styles.css";

interface TextSearchModalProps {
  searchText: SearchText;
}

const TextSearchModal = ({ searchText }: TextSearchModalProps) => {
  const renderStatusColor = (status: string) => {
    switch (status) {
      case "done":
        return "#4cb919";
      case "active":
        return "#b9af19";
      default:
        return "#ccc";
    }
  };

  const statusColor = renderStatusColor(searchText.status);
  return (
    <div className="search-card">
      <h3>{searchText.id}</h3>
      <div>
        <div className="search-status">
          <div style={{ backgroundColor: statusColor }} />
          <span style={{ color: statusColor }}>{searchText.status}</span>
        </div>
        <button>View</button>
      </div>
    </div>
  );
};

export default TextSearchModal;
