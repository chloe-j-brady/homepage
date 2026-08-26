import React from "react";
import "./App.css";

function App() {
  const projects = [
    { name: "Lab 1 — D3 Bar Chart", url: "#" },
    { name: "Lab 2 — D3 Interactions", url: "#" },
    { name: "Final Project", url: "#" },
  ];

  return (
    <div className="App">
      <header style={{ padding: "48px 24px" }}>
        <h1>Your Name</h1>
        <p>CIS 4930 · Introduction to Data Visualization · Fall 2026</p>
      </header>

      <main style={{ padding: "0 24px" }}>
        <h2>Projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.name}>
              <a href={p.url}>{p.name}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;