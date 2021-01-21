import React from "react";
import "./App.css";
import TextSearchCard from "./components/TextSearchCard";

function App() {
  return (
    <div className="search-container">
      <header className="search-header">
        <h1>Text Search</h1>
        <div className="search-input">
          <input type="text" />
          <button>Pesquisar</button>
        </div>
      </header>
      <main className="search-list">
        <h2>Text search list</h2>
        <div>
          <TextSearchCard />
          <TextSearchCard />
          <TextSearchCard />
          <TextSearchCard />
          <TextSearchCard />
          <TextSearchCard />
        </div>
      </main>
    </div>
  );
}

export default App;
