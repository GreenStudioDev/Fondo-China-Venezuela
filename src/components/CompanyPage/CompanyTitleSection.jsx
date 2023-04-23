import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../styles/global.css";
import { Link, useParams } from "react-router-dom";
import { CompanyInfo } from "../../api";
<div className=""></div>;

export function CompanyTitleSection() {
  let companyData = CompanyInfo().CompaniesInfo.companies;
  let { C_ID } = useParams();
  const infoCompany = [];
  infoCompany.push(companyData.find((info) => info.C_ID === C_ID));

  return (
    <>
      <section className="title-page-header">
        <img className="logos-company" src={infoCompany[0]?.LOGO} alt="Logo de la compañia" />
        <h1 className="title-page">{infoCompany[0]?.COMPANY_NAME_SPA}</h1>
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
