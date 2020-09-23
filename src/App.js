import React from "react";
import "./App.css";
import Cards from "./Cards";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Cards />
      </div>
    </div>
  );
}

export default App;
