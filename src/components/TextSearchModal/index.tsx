import React from "react";
import { SearchText } from "../../models/SearchText";
import { renderStatusColor } from "../../utils/renderStatusColor";
import "./styles.css";

interface TextSearchModalProps {
  searchText: SearchText | null;
  isOpen: boolean;
  toggle: Function;
}

const TextSearchModal = ({
  searchText,
  isOpen,
  toggle,
}: TextSearchModalProps) => {
  const statusColor = renderStatusColor(searchText ? searchText.status : null);

  return (
    <>
      <div
        className={isOpen ? "backdrop-open" : "backdrop-close"}
        onClick={() => toggle()}
      >
        <div
          className={isOpen ? "modal-open" : "modal-close"}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="modal-title">{searchText?.title}</h3>
          <h4 className="modal-subtitle" style={{ color: statusColor }}>
            {searchText?.status}
          </h4>
          <ul className="modal-list">
            {searchText?.urls &&
              searchText.urls.map((url) => (
                <li>
                  <a href={url} target="_blank">
                    {url}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TextSearchModal;
