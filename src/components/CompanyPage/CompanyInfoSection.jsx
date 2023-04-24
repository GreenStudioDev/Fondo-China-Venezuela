import React from "react";
import "../../styles/global.css";
import "../../styles/CompanyProjectsSection.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CompanyInfo } from "../../api";
import { useParams } from "react-router-dom";

export function CompanyInfoSection() {
  const { C_ID } = useParams();
  let companyData = CompanyInfo()?.CompaniesInfo?.companies_AllInfo;

  const infoCompany = companyData.filter(
    (info) => info?.COMPANY_NAME_SPA === C_ID
  );
  const infoCompanyStatic = companyData.find(
    (info) => info?.COMPANY_NAME_SPA === C_ID
  );

  const infoRepresentativeInVen = [
    ...new Set(
      infoCompany.map(
        (shareholder) => shareholder?.PRC_REPRESENTATIVE_IN_VENEZUELA
      )
    ),
  ];
  const infoShareholdersVen = [
    ...new Set(
      infoCompany.map((shareholderVen) => shareholderVen.COMPANY_SHAREHOLDERS)
    ),
  ];

  console.log(
    "🚀 ~ file: CompanyInfoSection.jsx:27 ~ CompanyInfoSection ~ infoRepresentativeInVen:",
    infoRepresentativeInVen
  );

  function createData(category, content) {
    return { category, content };
  }

  const rows = [
    createData("Empresa", infoCompanyStatic?.COMPANY_NAME_SPA),
    createData("公司", infoCompanyStatic?.COMPANY_NAME_ZH),
    createData("Tipo de empresa", infoCompanyStatic?.TYPE_SPA),
    createData(
      "Código de Credito Social",
      infoCompanyStatic?.SOCIAL_CREDIT_CODE
    ),
    createData("Headquarters PRC", infoCompanyStatic?.HEADQUARTERS_PRC_SPA),
    createData("Address PRC", infoCompanyStatic?.ADDRESS_PRC),
    createData(
      "Subsidiarias en Venezuela",
      infoCompanyStatic?.SUBSIDIARIES_IN_VENEZUELA_SPA
    ),
    createData("Dirección en Venezuela", infoCompanyStatic?.ADDRESS_IN_VENEZUELA),
    createData(
      "Año de Registro en Venezuela",
      infoCompanyStatic?.YEAR_REGISTERED_IN_VENEZUELA
    ),
    createData(
      "Registro Único de Información Fiscal (RIF)",
      infoCompanyStatic?.FISCAL_ID_IN_VENEZUELA
    ),
    createData(
      "Representantes RPCh en Venezuela",
      infoRepresentativeInVen?.map((rep) => <span>{rep + "; "}</span>)
    ),
    createData(
      "Accionistas Venezuela",
      infoShareholdersVen?.map((sh) => <span>{sh + "; "}</span>)
    ),
    createData(
      "Años operando en Venezuela",
      infoCompanyStatic?.YEARS_OPERATING_IN_VENEZUELA_SPA
    ),
    createData(
      "Descripción de operaciones en Venezuela",
      infoCompanyStatic?.DESCRIPTION_OF_OPERATIONS_IN_VENEZUELA_SPA
    ),
  ];

  return (
    <>
      <section className="container mt-64">
        <h3 className="text-sections">Información de la compañía</h3>
        <TableContainer className="table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
