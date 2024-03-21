
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import SearchPage from "./Components/SearchPage";
import ReadLaterPage from "./Components/ReadLaterPage"; 
import "./Components/SearchPage.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/Busqueda" element={<SearchPage />} />
          <Route path="/MasTarde" element={<ReadLaterPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;