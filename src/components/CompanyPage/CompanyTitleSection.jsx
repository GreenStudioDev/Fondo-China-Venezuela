import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../styles/global.css"

export function CompanyTitleSection() {
  return (
    <>
    <section className="title-page-header">
      <img src="./" alt="Logo de la compañia" />
      <h1 className="title-page">China CAMC Engineering Co. LTD (CAMCE)</h1>
    </section>
    <div className="volver">
        <button className="btn-volver"><ArrowBackIcon />Volver
        </button>
    </div>
    </>
  );
}
