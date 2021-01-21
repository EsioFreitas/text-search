import React, { useState } from "react";
import "./App.css";
import TextSearchCard from "./components/TextSearchCard";
import { SearchText } from "./models/SearchText";
import api from "./services/Api";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchTexts, setSearchTexts] = useState<SearchText[]>([]);

  const makeNewSearchText = (searchString: string) => {
    api
      .post("/crawl", { keyword: searchString })
      .then(({ data }) => {
        setSearchTexts([
          ...searchTexts,
          {
            id: data.id,
            status: "active",
            urls: [],
          },
        ]);
      })
      .catch((error) => {});
  };

  return (
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
          <button onClick={() => makeNewSearchText(searchString)}>
            search
          </button>
        </div>
      </header>
      <main className="search-list">
        <h2>Text search list</h2>
        <div>
          {searchTexts.map((searchText) => (
            <TextSearchCard key={searchText.id} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
