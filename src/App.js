import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { HomePage, SectorPage, ProfilePage, CompanyPage, TimeLinePage, ProjectPage, ProfileInfo } from "./containers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/en/china-venezuela-funds" element={<HomePage />} />;
          <Route path="/en/china-venezuela-funds/company/:C_ID" element={<CompanyPage />} />;
          <Route path="/en/china-venezuela-funds/sector/:sectorName" element={<SectorPage />} />;
          <Route path="/en/china-venezuela-funds/profile" element={<ProfilePage />} />;
          <Route path="/en/china-venezuela-funds/profile/:personName" element={<ProfileInfo />} />;
          <Route path="/en/china-venezuela-funds/project/:prName" element={<ProjectPage />} />;
          <Route path="/en/china-venezuela-funds/timeline" element={<TimeLinePage />} />;
          <Route path="*" element={<p>Not found</p>} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
