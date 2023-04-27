import React from "react";
import "../../styles/global.css";
import "../../styles/ProjectContextSection.css";
import { ProjectsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";

export function ProjectContextSection() {
  const projecInfo = ProjectsInfo().ProjectsInfo;
  const { prName } = useParams();

  const projecData = projecInfo.projects.find(
    (project) => project.PROJECT_NAME_SPA === prName
  );
  console.log(
    "🚀 ~ file: ProjectContextSection.jsx:13 ~ ProjectContextSection ~ projecData:",
    projecData
  );

  return (
    <>
      <section className="containerfcv-project mt-64">
        <div className="box-header-project">
          <div className="text-align">
            <div className="box-icons-project text-icons-project">
              <Link to={`/fondos-china-venezuela/sector/${projecData?.SECTOR_NAME_SPA}`}>
                <li style={{margin: "0 0 0 0"}}>
                  <img
                    style={{ height: "73px" }}
                    src={projecData?.ICON}
                    alt=""
                  />
                </li>
              </Link>
            </div>
            <label>{projecData?.SECTOR_NAME_SPA}</label>
          </div>
          <div className="ml-16">
            <h4 className="text-subtitle">Ejecutado por</h4>
            <p className="description-project">
              {projecData?.VENEZUELA_CONTRACTOR_SPA}
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
