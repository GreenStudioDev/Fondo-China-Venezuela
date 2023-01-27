import React from "react";
import { CompanySection, Header, ProfilesSection, ProjectsSection, SectorSection } from "../components";

export function HomePage() {
    return (
        <>
        <Header />
        <SectorSection />
        <CompanySection />
        <ProjectsSection />
        <ProfilesSection />
        </>
    )
}
