import React, { useEffect, useMemo, useState } from "react";
import { PersonsInfo, ProjectsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import "../../styles/global.css";
import "../../styles/ProjectInfoSection.css";

export function ProjectInfoSection() {
  const personInfo = PersonsInfo()?.personsInfo?.Persons_Projects;
  const projecInfo = ProjectsInfo()?.ProjectsInfo;
  const projecInfoCompanies = projecInfo?.projects_Companies;
  const projecInfoMinisteries = projecInfo?.projects_Cases_Ministeries;
  const projecInfoUnrelatedPeople = projecInfo?.projects_UnrelatedPeople;
  const { prName } = useParams();
  const [loading, setLoading] = useState(true);

  const projecData = projecInfo.projects.find(
    (project) => project.PROJECT_NAME_SPA === prName
  );
  const projectCompaniesFilter = projecInfoCompanies.filter(
    (project) => project.PROJECT_NAME_SPA === prName
  );
  const personProject = personInfo.filter(
    (project) => project.PROJECT_NAME_SPA === prName
  );
  const projectMinisteriesFilter = projecInfoMinisteries.filter(
    (project) => project.PROJECT_NAME_SPA === prName
  );
  const projectUnPeopele = projecInfoUnrelatedPeople.filter(
    (project) => project.PROJECT_NAME_SPA === prName
  );

  const projectCompanies = useMemo(() => [
    ...new Set(
      projectCompaniesFilter.map((company) => company.COMPANY_NAME_SPA)
    ),
  ], [projectCompaniesFilter]
  );
  const projectForeingCompanies = useMemo(() =>[
    ...new Set(
      projectCompaniesFilter.map((company) => company.FOREING_COMPANIES_SPA)
    ),
  ], [projectCompaniesFilter]
  );
  const projectVenCompanies = useMemo(() =>[
    ...new Set(
      projectCompaniesFilter.map((company) => company.VENEZUELA_COMPANIES_SPA)
    ),
  ], [projectCompaniesFilter]
  );
  const projectMinisteries = useMemo(() => [
    ...new Set(
      projectMinisteriesFilter.map(
        (ministery) => ministery.VENEZUELA_MINISTRIES_SPA
      )
    ),
  ], [projectMinisteriesFilter]
  );
  const projectIrregularities = useMemo(() => [
    ...new Set(
      projectMinisteriesFilter.map(
        (irregularity) => irregularity.PROJECT_CASES_SPA
      )
    ),
  ], [projectMinisteriesFilter]
  );
  const projectCases = useMemo(() => [
    ...new Set(
      projectMinisteriesFilter.map((cases) => cases.PROJECT_OFFENSES_SPA)
    ),
  ], [projectMinisteriesFilter]
  );

  function createData(category, content) {
    return { category, content };
  }

  const rows =  useMemo(() => 
  [
    createData(
      "Nombre o descripción del proyecto",
      projecData?.PROJECT_NAME_SPA
    ),
    createData("Área o sector", projecData?.SECTOR_NAME_SPA),
    createData("Ubicación", projecData?.LOCATION_SPA),
    createData("Año de inicio", projecData?.YEAR),
    createData("Estado actual", projecData?.CURRENT_STATUS_SPA),
    createData(
      "Monto del proyecto (US$)",
      `$${parseInt(projecData?.PROJECT_AMOUNT).toLocaleString("en-US")}`
    ),
    createData(
      "Monto Fondos Chinos (US$)",
      `$${parseInt(projecData?.CHINESE_FUND_AMOUNT).toLocaleString("en-US")}`
    ),
    createData(
      "Tipo de Fondo (FCCV o FGVLP)",
      projecData?.TYPE_OF_CHINESE_FUNDS_SPA
    ),
    createData(
      "Empresas particiantes (China)",
      projectCompanies?.map((company) => (
        <span key={`cina-companies-key-${company}`}>{company + ", "} </span>
      ))
    ),
    createData(
      "Empresas participantes (Extranjeras)",
      projectForeingCompanies?.map((foreingCompany) => (
        <span key={`foreing-companies-key-${foreingCompany}`}>
          {foreingCompany + ", "}
        </span>
      ))
    ),
    createData(
      "Empresas participantes (Venezuela)",
      projectVenCompanies?.map((venCompany) => (
        <span key={`ven-companies-key${venCompany}`}>{venCompany + ", "}</span>
      ))
    ),
    createData(
      "Ministerios (Venezuela)",
      projectMinisteries?.map((company) => (
        <span key={`ministeries-ven-key-${company}`}>{company}, </span>
      ))
    ),
    createData(
      "Ente u órgano ejecutor (Venezuela)",
      projecData?.VENEZUELA_CONTRACTOR_SPA
    ),
    createData(
      "Principales Personas claves",
      personProject?.map((person) => (
        <span key={`main-key-persons-key-${person?.NAME}`}>
          <Link
            to={`/fondos-china-venezuela/profile/${person?.NAME}`}
          >{`${person?.NAME},`}</Link>
          &nbsp;
        </span>
      ))
    ),
    createData(
      "Otras Personas claves",
      projectUnPeopele?.map((unrPerson) => (
        <span key={`key-persons-key-${unrPerson?.UNRELATED_KEY_PERSON_NAME}`}>
          {unrPerson?.UNRELATED_KEY_PERSON_NAME}
          &nbsp;
        </span>
      ))
    ),
    createData("Irregularidades", projecData?.IRREGULARITIES_SPA),
    createData(
      "Irregularidades en detalle",
      projectIrregularities?.map((irregularity) => (
        <span key={`irregularities-detail-key-${irregularity}`}>
          {irregularity}, &nbsp;
        </span>
      ))
    ),
    createData("Casos de corrupción", projecData?.CASES_OF_CORRUPTION_SPA),
    createData(
      "Casos de corrupción en detalle",
      projectCases?.map((cases) => (
        <span key={`corruption-detail-key${cases}`}>{cases}, &nbsp;</span>
      ))
    ),
  ], [personProject, projecData?.CASES_OF_CORRUPTION_SPA, projecData?.CHINESE_FUND_AMOUNT, projecData?.CURRENT_STATUS_SPA, projecData?.IRREGULARITIES_SPA, projecData?.LOCATION_SPA, projecData?.PROJECT_AMOUNT, projecData?.PROJECT_NAME_SPA, projecData?.SECTOR_NAME_SPA, projecData?.TYPE_OF_CHINESE_FUNDS_SPA, projecData?.VENEZUELA_CONTRACTOR_SPA, projecData?.YEAR, projectCases, projectCompanies, projectForeingCompanies, projectIrregularities, projectMinisteries, projectUnPeopele, projectVenCompanies]
  )

  useEffect(() => {
    if (rows[0].content !== undefined) {
      setLoading(false);
    }
  }, [rows]);

  return (
    <section className="containerfcv">
      <h4 className="text-sections">Descripción del proyecto</h4>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.category}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.category}
                  </TableCell>
                  <TableCell align="right">{row.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </section>
  );
}
