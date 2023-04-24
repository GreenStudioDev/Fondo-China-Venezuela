import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../styles/global.css";
import "../../styles/ProjectInfoSection.css";
import { PersonsInfo, ProjectsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";

export function ProjectInfoSection() {
  const personInfo = PersonsInfo()?.personsInfo?.Persons_Projects;
  const projecInfo = ProjectsInfo()?.ProjectsInfo;
  const projecInfoCompanies = projecInfo?.projects_Companies;
  const projecInfoMinisteries = projecInfo?.projects_Cases_Ministeries;
  const projecInfoUnrelatedPeople = projecInfo?.projects_UnrelatedPeople;
  const { prName } = useParams();

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


  const projectCompanies = [...new Set(projectCompaniesFilter.map((company) => company.COMPANY_NAME_SPA)) ]
  const projectForeingCompanies = [...new Set(projectCompaniesFilter.map((company) => company.FOREING_COMPANIES_SPA)) ]
  const projectVenCompanies = [...new Set(projectCompaniesFilter.map((company) => company.VENEZUELA_COMPANIES_SPA)) ]
  const projectMinisteries = [...new Set(projectMinisteriesFilter.map((ministery) => ministery.VENEZUELA_MINISTRIES_SPA)) ]
  const projectIrregularities = [...new Set(projectMinisteriesFilter.map((irregularity) => irregularity.PROJECT_CASES_SPA)) ]
  const projectCases = [...new Set(projectMinisteriesFilter.map((cases) => cases.PROJECT_OFFENSES_SPA)) ]

  
  console.log(
    "🚀 ~ file: ProjectInfoSection.jsx:38 ~ ProjectInfoSection ~ projectMinisteriesFilter:",
    projectMinisteriesFilter
  );

  function createData(category, content) {
    return { category, content };
  }

  const rows = [
    createData(
      "Nombre o descripción del proyecto",
      projecData?.PROJECT_NAME_SPA
    ),
    createData("Área o sector", projecData?.SECTOR_NAME_SPA),
    createData("Ubicación", projecData?.LOCATION_SPA),
    createData("Año de inicio", projecData?.YEAR),
    createData("Estado actual", projecData?.CURRENT_STATUS_SPA),
    createData("Monto del proyecto (MM/US$)", parseInt(projecData?.PROJECT_AMOUNT).toLocaleString("en-US")),
    createData("Monto Fondos Chinos (MM/US$)", parseInt(projecData?.CHINESE_FUND_AMOUNT).toLocaleString("en-US")),
    createData(
      "Tipo de Fondo (FCCV o FGVLP)",
      projecData?.TYPE_OF_CHINESE_FUNDS_SPA
    ),
    createData(
      "Empresas particiantes (China)",
      projectCompanies?.map((company) => (
        <span>{company + ", "} </span>
      ))
    ),
    createData(
      "Empresas participantes (Extranjeras)",
      projectForeingCompanies?.map((foreingCompany) => (
        <span>{foreingCompany + ", "}</span>
      ))
    ),
    createData(
      "Empresas participantes (Venezuela)",
      projectVenCompanies?.map((venCompany) => (
        <span>{venCompany + ", "}</span>
      ))
    ),
    createData(
      "Ministerios (Venezuela)",
      projectMinisteries?.map((company) => (
        <span>{company}, </span>
      ))
    ),
    createData(
      "Ente u órgano ejecutor (Venezuela)",
      projecData?.VENEZUELA_CONTRACTOR_SPA
    ),
    createData(
      "Principales Personas claves",
      personProject?.map((person) => (
        <span>
          <Link to={`/fondos-china-venezuela/profile/${person?.NAME}`}>{`${person?.NAME},`}</Link>
          &nbsp;
        </span>
      ))
    ),
    createData(
      "Otras Personas claves",
      projectUnPeopele?.map((unrPerson) => (
        <span>
          {unrPerson?.UNRELATED_KEY_PERSON_NAME}
          &nbsp;
        </span>
      ))
    ),
    createData("Irregularidades", projecData?.IRREGULARITIES_SPA),
    createData(
      "Irregularidades en detalle",
      projectIrregularities?.map((irregularity) => (
        <span>{irregularity}, &nbsp;</span>
      ))
    ),
    createData("Casos de corrupción", projecData?.CASES_OF_CORRUPTION_SPA),
    createData(
      "Casos de corrupción en detalle",
      projectCases?.map((cases) => (
        <span>{cases}, &nbsp;</span>
      ))
    ),
  ];

  return (
    <>
      <section className="container">
        <h4 className="text-sections">Descripción del proyecto</h4>
        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead></TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
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
      </section>
    </>
  );
}
