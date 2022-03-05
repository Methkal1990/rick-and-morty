import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth/index.jsx";
import Character from "./pages/Character/index.jsx";
import Home from "./pages/Home/index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/:characterId" element={<Character />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
