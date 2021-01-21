import React from "react";
import "./styles.css";

const TextSearchCard: React.FC = () => {
  return (
    <div className="search-card">
      <h3>Titulo do card</h3>
      <div>
        <div className="search-status">
          <div /> <span>Status</span>
        </div>
        <button>Visualizar</button>
      </div>
    </div>
  );
};

export default TextSearchCard;
