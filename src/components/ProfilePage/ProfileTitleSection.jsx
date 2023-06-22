import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export function ProfileTitleSection() {
  return (
    <>
      <section className="title-page-header">
        {/* <img src="./" alt="Logo de la compañia" /> */}
        <h1 className="title-page">Persons of interest</h1>
      </section>
      <div className="volver">
        <Link to="/fondos-china-venezuela/en/">
          <button className="btn-volver">
            <ArrowBackIcon />
            Back
          </button>
        </Link>
      </div>
    </>
  );
}
