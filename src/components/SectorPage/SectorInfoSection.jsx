import React from "react";
import "../../styles/global.css";
import "../../styles/SectorPage.css";
import { useParams } from "react-router-dom";
import { CompanyInfo, ProjectsInfo, SectorsInfo } from "../../api";

export function SectorInfoSection() {
  const { sectorName } = useParams();

  const sectorData = SectorsInfo()?.find(
    (sector) => sector?.SECTOR_NAME_SPA === sectorName
  );

  const sectorCompanyNumber =
    CompanyInfo()?.CompaniesInfo?.companies_Sectors?.filter(
      (sector) => sector?.SECTOR_NAME_SPA === sectorName
    ).length;

  let inversion = [];

  const sectorInversion = ProjectsInfo()
    ?.ProjectsInfo?.projects?.filter(
      (sector) => sector?.SECTOR_NAME_SPA === sectorName
    )
    .map((prAmmount) => {
      let ammounts = parseInt(prAmmount?.PROJECT_AMOUNT);
      return ammounts;
    })
    .filter((x) => x);

  inversion.push(...sectorInversion);

  // funcion para sacar el total de inversión
  // const overAllInvesment = ProjectsInfo()
  //   ?.ProjectsInfo?.projects?.map((prAmmount) =>
  //     parseInt(prAmmount.PROJECT_AMOUNT)
  //   )
  //   .filter((x) => x)
  //   .reduce((x, y) => x + y, 0);

  let totalInversion = inversion?.reduce((prev, current) => prev + current, 0);
  let investmentPercentage = totalInversion/59238949182*100;

  console.log(
    "🚀 ~ file: SectorInfoSection.jsx:16 ~ SectorInfoSection ~ investmentPercentage:",
    investmentPercentage
  );

  return (
    <>
      <section className="containerfcv mt-64 mb-140 p-1">
        <div className="box-header">
          <h4 className="font-m-p">CONTEXTO</h4>
          <p>{sectorData?.SECTOR_DESC_SPA}</p>
          <div className="box-header-dates">
            <div className="box-dates">
              <span>No. de Empresas</span>
              <span>{sectorCompanyNumber}</span>
            </div>
            <div className="box-dates">
              <span>Total Inversión</span>
              <span>USD ${totalInversion?.toLocaleString("en-US")}</span>
            </div>
            <div className="box-dates">
              <span>% de Inversión</span>
              <span>{investmentPercentage?.toFixed(2)}%</span>
            </div>
          </div>
        </div>
        <div>
          <img
            alt={`imagen de ${sectorData?.SECTOR_NAME_SPA}`}
            className="image-pages"
            src={sectorData?.SECTOR_IMAGE}
          />
        </div>
      </section>
    </>
  );
}
