import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchSpells from "./pages/SearchSpells";
import SavedSpells from "./pages/SavedSpells";
import Navbar from "./components/Navbar";

function App() {
  document.body.style = "background-color: #121212";
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchSpells />} />
          <Route path="/saved" element={<SavedSpells />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
