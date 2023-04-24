import React from "react";
// import { Link } from "react-router-dom";
import { SectorsInfo } from "../../api";
import "../../styles/global.css";
import "../../styles/HomePage.css";
import { Link } from "react-router-dom";

export function SectorSection() {
  const sectorsData = SectorsInfo();
  console.log("🚀 ~ file: SectorSection.jsx:10 ~ SectorSection ~ sectorsData:", sectorsData)

  return (
    <>
      <section className="containerfcv mt-64">
        <h1 className="text-sections">Sectores / Industrias</h1>
        <p className="text-p">
          Haz click en uno de los siguientes iconos para ver el detalle por cada
          tipo de industria
        </p>
        <ul className="icons-section">
          {sectorsData.map((sector) => (
            <Link key={`sect-link-${sector.S_ID}`} to={`/fondos-china-venezuela/sector/${sector.SECTOR_NAME_SPA}`} className="box" preventScrollReset={false}>
              <li
                key={`sect-img-${sector.S_ID}`}
                className="box-icons-industrys"
              >
                <img
                alt={sector.SECTOR_NAME_SPA}
                src={sector.ICON}
                  className="icons-industrys"
                  id="Capa_2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 345.02 374.17"
                />
              </li>
              {/* <SectorLink key={`sect-img-${sector.S_ID}`} /> */}
              <label key={`sector-label${sector.S_ID}`} className="text-icons">
                {sector.SECTOR_NAME_SPA}
              </label>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}

