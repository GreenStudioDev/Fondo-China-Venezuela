import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SectorPage, ProfilePage, CompanyPage, TimeLinePage, ProjectPage, ProfileInfo } from "./containers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/fondos-china-venezuela" element={<HomePage />} />;
          <Route path="/fondos-china-venezuela/company/:C_ID" element={<CompanyPage />} />;
          <Route path="/fondos-china-venezuela/sector/:sectorName" element={<SectorPage />} />;
          <Route path="/fondos-china-venezuela/profile" element={<ProfilePage />} />;
          <Route path="/fondos-china-venezuela/profile/:personName" element={<ProfileInfo />} />;
          <Route path="/fondos-china-venezuela/project/:prName" element={<ProjectPage />} />;
          <Route path="/fondos-china-venezuela/linea-tiempo" element={<TimeLinePage />} />;
          <Route path="*" element={<p>Not found</p>} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
