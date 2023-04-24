import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { Link, useParams } from "react-router-dom";
import { PersonsInfo } from "../../api";

export function ProfileInfoTitleSection() {
  const { personName } = useParams();
  const personData = PersonsInfo().personsInfo.Persons.find(
    (person) => person.NAME === personName
  );

  return (
    <>
      <section className="title-page-header">
        {/* <img src="./" alt="Logo de la compañia" /> */}
        <h1 className="title-page">Personas de Interés</h1>
      </section>
      <div className="volver">
        <a href={personData?.PROFILE} target="_blank" rel="noopener noreferrer">
          <button className="btn-descargar">
            Descargar documento <BorderAllIcon />
          </button>
        </a>
        <Link to="/profile">
          <button className="btn-volver">
            <ArrowBackIcon />
            Volver
          </button>
        </Link>
      </div>
    </>
  );
}
