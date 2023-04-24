import React from "react";
import "../../styles/global.css";
import "../../styles/CompanyPage.css";
import { Link, useParams } from "react-router-dom";
import { CompanyInfo } from "../../api";

export function CompanyContextSection() {
  let companyData = CompanyInfo().CompaniesInfo.companies_AllInfo;
  let companySect = CompanyInfo().CompaniesInfo.companies_Sectors;
  let { C_ID } = useParams();

  const infoCompany = [];
  infoCompany.push(companyData.find((info) => info.COMPANY_NAME_SPA === C_ID));
  const CompanySectors = [];
  CompanySectors.push(companySect.filter((info) => info.COMPANY_NAME_SPA === C_ID));

  return (
    <>
      <section className="container-company mt-64 mb-140 p-1">
        <div className="box-header-company">
          <h4 className="font-m-p">CONTEXTO EMPRESA</h4>
          <p>{infoCompany[0]?.DESCRIPTION_OF_OPERATIONS_IN_VENEZUELA_SPA}</p>
          <div className="box-header-dates">
            <div className="box-dates">
              <span>Sectores</span>
            </div>
            <div className="box-dates">
              <ul className="icons-projects-sectores">
                {CompanySectors[0].map((sector) => (
                  <Link key={`link-${sector?.SECTOR_NAME_SPA}`} style={{textDecoration: "none"}} to={`/sector/${sector?.SECTOR_NAME_SPA}`}>
                    <div className="text-align">
                      <div className="box-icons-project text-icons-project">
                        <li>
                          <img
                            style={{ height: "73px" }}
                            src={sector?.ICON}
                            alt=""
                          />
                        </li>
                      </div>
                      <label>{sector?.SECTOR_NAME_SPA}</label>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
