import React from "react";
import { CompanySection, Header, ProfilesSection, HomeProjectsSection, SectorSection } from "../components";

export function HomePage() {
    return (
        <>
        <Header />
        <SectorSection />
        <CompanySection />
        <HomeProjectsSection />
        <ProfilesSection />
        </>
    )
}
