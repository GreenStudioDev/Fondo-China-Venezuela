import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SectorPage, ProfilePage, CompanyPage, TimeLinePage, ProjectPage, ProfileInfo } from "./containers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />;
          <Route path="/company/:C_ID" element={<CompanyPage />} />;
          <Route path="/sector/:sectorName" element={<SectorPage />} />;
          <Route path="/profile" element={<ProfilePage />} />;
          <Route path="/profile/info" element={<ProfileInfo />} />;
          <Route path="/project/:prName" element={<ProjectPage />} />;
          <Route path="/linea-tiempo" element={<TimeLinePage />} />;
          <Route path="*" element={<p>Not found</p>} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
