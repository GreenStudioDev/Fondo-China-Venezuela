import React, { useEffect, useState } from "react";
import "../../styles/global.css";
import "../../styles/ProjectContextSection.css";
import { ProjectsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export function ProjectContextSection() {
  const projecInfo = ProjectsInfo().ProjectsInfo;
  const { prName } = useParams();
  const [loading, setLoading] = useState(true);

  const projecData = projecInfo.projects.find(
    (project) => project.PROJECT_NAME_ENG === prName
  );


  useEffect(() => {
    if (projecData !== undefined) {
      setLoading(false);
    }
  }, [projecData]);

  return (
    <section className="containerfcv-project mt-64">
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <div className="box-header-project">
          <div className="text-align">
            <div className="box-icons-project text-icons-project">
              <Link
                to={`/en/china-venezuela-funds/sector/${projecData?.SECTOR_NAME_ENG}`}
              >
                <li style={{ margin: "0 0 0 0" }}>
                  <img
                    style={{ height: "73px" }}
                    src={projecData?.ICON}
                    alt=""
                  />
                </li>
              </Link>
            </div>
            <label>{projecData?.SECTOR_NAME_ENG}</label>
          </div>
          <div className="ml-16">
            <h4 className="text-subtitle">Executed by</h4>
            <p className="description-project">
              {projecData?.VENEZUELA_CONTRACTOR_ENG}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
