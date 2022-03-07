import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth/index.jsx";
import Character from "./pages/Character/index.jsx";
import Home from "./pages/Home/index.jsx";
import Header from "./components/Header/index.jsx";
import "./App.css";
import NotFound from "./pages/NotFound/index.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/auth" element={<Auth />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route exact path="/:characterId" element={<Character />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
