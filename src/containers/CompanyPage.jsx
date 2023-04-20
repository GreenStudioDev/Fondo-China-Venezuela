import React from "react";
import { CompanyContextSection, CompanyInfoSection, CompanyProjectsSection, CompanyTitleSection } from "../components";


export function CompanyPage() {


  return (
    <>
      <CompanyTitleSection />
      <CompanyContextSection />
      <CompanyInfoSection />
      <CompanyProjectsSection />
    </>
  );
}
