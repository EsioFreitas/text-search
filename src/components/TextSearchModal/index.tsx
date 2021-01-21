import React from "react";
import { SearchText } from "../../models/SearchText";
import { renderStatusColor } from "../../utils/renderStatusColor";
import "./styles.css";
import VoidPhoto from "../../assets/images/void.svg";
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
          {searchText?.urls && searchText?.urls.length > 0 && (
            <ul className="modal-list">
              {searchText.urls.map((url) => (
                <li>
                  <a href={url} target="_blank">
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {searchText?.urls && searchText?.urls.length === 0 && (
            <div className="image-container image-container-card">
              <img src={VoidPhoto} alt="void" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TextSearchModal;
