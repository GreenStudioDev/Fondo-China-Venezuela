import React from "react";
// import { useParams } from "react-router-dom";;
import { SectorInfoSection, SectorProjectsSection, SectorTitleSection } from "../components";

export function SectorPage() {
  // const { slug } = useParams();

  return (
    <>
      <SectorTitleSection />
      <SectorInfoSection />
      <SectorProjectsSection />
    </>
  );
}
