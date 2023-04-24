import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import { SectorsInfo } from "../../api";

export function SectorTitleSection() {
  const { sectorName } = useParams();

  const sectorData = SectorsInfo()?.find(
    (sector) => sector?.SECTOR_NAME_SPA === sectorName
  );

  return (
    <>
      <section className="title-page-header">
        <div className="text-align">
          <div className="box-icons-project text-icons-project">
            <li>
              <img
                style={{height: "75px"}}
                alt={`ícono de ${sectorData?.SECTOR_NAME_SPA}`}
                src={sectorData?.ICON}
                id="Capa_2"
              />
            </li>
          </div>
        </div>
        <h1 className="title-page">{sectorData?.SECTOR_NAME_SPA}</h1>
      </section>
      <div className="volver">
        <Link to="/fondos-china-venezuela" preventScrollReset={true}>
          <button className="btn-volver">
            <ArrowBackIcon />
            Volver
          </button>
        </Link>
      </div>
    </>
  );
}
