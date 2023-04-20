import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../styles/global.css";
import { Link } from "react-router-dom";

export function ProjectTitleSection() {
  return (
    <>
      <section className="title-page-header">
        {/* <img src="./" alt="Logo de la compañia" /> */}
        <h1 className="title-page">
          Proyecto Integral de Desarrollo Agrario Socialista Tiznados
        </h1>
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
