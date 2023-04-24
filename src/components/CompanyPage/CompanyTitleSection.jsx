import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import "../../styles/global.css";
import { Link, useParams } from "react-router-dom";
import { CompanyInfo } from "../../api";
<div className=""></div>;

export function CompanyTitleSection() {
  let companyData = CompanyInfo().CompaniesInfo?.companies;
  let { C_ID } = useParams();
  const infoCompany = companyData?.find((info) => info.COMPANY_NAME_SPA === C_ID);
  // infoCompany.push();

  return (
    <>
      <section className="title-page-header">
        <img className="logos-company" src={infoCompany?.LOGO} alt="Logo de la compañia" />
        <h1 className="title-page">{infoCompany?.COMPANY_NAME_SPA}</h1>
      </section>
      <div className="volver">
        <a href={infoCompany?.PROFILE} target="_blank" rel="noopener noreferrer">
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
