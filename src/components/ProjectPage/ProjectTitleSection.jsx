import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import "../../styles/global.css";
import { Link, useParams } from "react-router-dom";
import { ProjectsInfo } from "../../api";

export function ProjectTitleSection() {
  
  const projecInfo = ProjectsInfo().ProjectsInfo;
  const { prName } = useParams();

  const projecData = projecInfo.projects.find((project) => project.PROJECT_NAME_SPA === prName)

  return (
    <>
      <section className="title-page-header">
        {/* <img src="./" alt="Logo de la compañia" /> */}
        <h1 className="title-page">
          {projecData?.PROJECT_NAME_SPA}
        </h1>
      </section>
      <div className="volver">
        <a href={projecData?.PROFILE} target="_blank" rel="noopener noreferrer">
        <button className="btn-descargar">
          Descargar documento <BorderAllIcon />
        </button>
        </a>
        
        <Link to="/fondos-china-venezuela/">
          <button className="btn-volver">
            <ArrowBackIcon />
            Volver
          </button>
        </Link>
      </div>
    </>
  );
}
