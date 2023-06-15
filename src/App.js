import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { HomePage, SectorPage, ProfilePage, CompanyPage, TimeLinePage, ProjectPage, ProfileInfo } from "./containers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/fondos-china-venezuela/en" element={<HomePage />} />;
          <Route path="/fondos-china-venezuela/en/company/:C_ID" element={<CompanyPage />} />;
          <Route path="/fondos-china-venezuela/en/sector/:sectorName" element={<SectorPage />} />;
          <Route path="/fondos-china-venezuela/en/profile" element={<ProfilePage />} />;
          <Route path="/fondos-china-venezuela/en/profile/:personName" element={<ProfileInfo />} />;
          <Route path="/fondos-china-venezuela/en/project/:prName" element={<ProjectPage />} />;
          <Route path="/fondos-china-venezuela/en/timeline" element={<TimeLinePage />} />;
          <Route path="*" element={<p>Not found</p>} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
