import React from "react";
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Section3 from "./pages/Home/Section3";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Section3/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
