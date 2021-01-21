import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="search-container">
        <h1>Text Search</h1>
        <div>
          <div>
            <input />
            <button>Pesquisar</button>
          </div>
          <ul>
            <li>
              <div /> Status
            </li>
          </ul>
        </div>
      </header>
      <main>
        <h2>Text search list</h2>
        <div className="search-list">
          <div>
            <h2>Titulo do card</h2>
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
