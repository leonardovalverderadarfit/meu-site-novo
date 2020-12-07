import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./IntroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
