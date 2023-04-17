import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../styles/global.css"

export function ProjectTitleSection() {
  return (
    <>
    <section className="title-page-header">
      {/* <img src="./" alt="Logo de la compañia" /> */}
      <h1 className="title-page">Proyecto Integral de Desarrollo Agrario Socialista Tiznados</h1>
    </section>
    <div className="volver">
        <button className="btn-volver"><ArrowBackIcon />Volver
        </button>
      </div>
    </>
  );
}
