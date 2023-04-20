import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export function ProfileTitleSection() {
  return (
    <>
      <section className="title-page-header">
        {/* <img src="./" alt="Logo de la compañia" /> */}
        <h1 className="title-page">Personas de Interés</h1>
      </section>
      <div className="volver">
      <Link to="/">
          <button className="btn-volver">
            <ArrowBackIcon />
            Volver
          </button>
        </Link>
      </div>
    </>
  );
}
