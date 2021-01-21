import React from "react";
import "./App.css";

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
      <main>
        <h2>Text search list</h2>
        <div className="search-list">
          <div>
            <h3>Titulo do card</h3>
            <div>
              <div>
                <div /> Status
              </div>
              <button>Visualizar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
