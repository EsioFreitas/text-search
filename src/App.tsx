import React, { useEffect, useState } from "react";
import "./App.css";
import TextSearchCard from "./components/TextSearchCard";
import TextSearchModal from "./components/TextSearchModal";
import { SearchText } from "./models/SearchText";
import api from "./services/Api";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchTexts, setSearchTexts] = useState<SearchText[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [
    selectedSearchText,
    setSelectedSearchText,
  ] = useState<SearchText | null>(null);

  useEffect(() => {
    let timeSearchText = setInterval(() => getSearchText(), 1500);
    return () => {
      clearTimeout(timeSearchText);
    };
  });

  const getSearchText = () => {
    searchTexts.forEach((searchText, index) => {
      if (searchText.status === "active") {
        api.get("/crawl/" + searchText.id).then(({ data }) => {
          const tmpSearchTexts = [...searchTexts];
          tmpSearchTexts[index] = data;
          setSearchTexts(tmpSearchTexts);
        });
      }
    });
  };

  const makeNewSearchText = (searchString = "") => {
    api.post("/crawl", { keyword: searchString }).then(({ data }) => {
      if (data.status && data.status === 400) {
        setErrorMessage(data.message);
        setTimeout(function () {
          setErrorMessage("");
        }, 3000);
      } else {
        setSearchTexts([
          ...searchTexts,
          {
            id: data.id,
            status: "active",
            urls: [],
          },
        ]);
        setSearchString("");
      }
    });
  };

  const toggle = (searchText = null) => {
    setSelectedSearchText(searchText);
  };

  return (
    <>
      <TextSearchModal
        isOpen={selectedSearchText !== null}
        searchText={selectedSearchText}
        toggle={toggle}
      />
      {errorMessage.length > 0 && (
        <h3 className="error-message">{errorMessage}</h3>
      )}
      <div className="search-container">
        <header className="search-header">
          <h1>Text Search</h1>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search..."
              value={searchString}
              onChange={(event) => setSearchString(event.target.value)}
            />
            <button
              onClick={() => makeNewSearchText(searchString)}
              disabled={searchString.length === 0}
            >
              search
            </button>
          </div>
        </header>
        <main className="search-list">
          <h2>Text search list</h2>
          <div>
            {searchTexts.map((searchText, i) => (
              <TextSearchCard key={i} searchText={searchText} toggle={toggle} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
