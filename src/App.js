import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SectorPage, ProfilePage, CompanyPage, TimeLinePage, ProjectPage } from "./containers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />;
          <Route path="/company" element={<CompanyPage />} />;
          <Route path="/sector" element={<SectorPage />} />;
          <Route path="/profile" element={<ProfilePage />} />;
          <Route path="/project" element={<ProjectPage />} />;
          <Route path="/linea-tiempo" element={<TimeLinePage />} />;
          <Route path="*" element={<p>Not found</p>} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
