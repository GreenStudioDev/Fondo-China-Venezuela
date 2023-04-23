import React from "react";
import "../../styles/global.css"
import "../../styles/SectorPage.css"
import { useParams } from "react-router-dom";
import { SectorsInfo } from "../../api";

export function SectorInfoSection() {
  const { sectorName } = useParams();

  const sectorData = SectorsInfo().find(
    (sector) => sector.SECTOR_NAME_SPA === sectorName
  );
  return (
    <>
      <section className="container mt-64 mb-140 p-1">
        <div className="box-header">
          <h4 className="font-m-p">CONTEXTO</h4>
          <p>
            {sectorData?.SECTOR_DESC_SPA}
          </p>
          <div className="box-header-dates">
            <div className="box-dates">
              <span>No. de Empresas</span>
              <span>12</span>
            </div>
            <div className="box-dates">
              <span>Total Inversión</span>
              <span>USD 2.350.600</span>
            </div>
            <div className="box-dates">
              <span>% de Inversión</span>
              <span>25%</span>
            </div>
          </div>
          </div>
        <div>        
          <img alt={`imagen de ${sectorData?.SECTOR_NAME_SPA}`} className="image-pages" src={sectorData?.SECTOR_IMAGE}/>
        </div>
      </section>
    </>
  );
}
