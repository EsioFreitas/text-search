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
        <div className={isOpen ? "modal-open" : "modal-close"}>Modal</div>
      </div>
    </>
  );
};

export default TextSearchModal;
