import React from "react";
import "../../styles/global.css";
import "../../styles/CompanyProjectsSection.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CompanyInfo } from "../../api";
import { useParams } from "react-router-dom";

export function CompanyInfoSection() {
  let companyData = CompanyInfo().CompaniesInfo.companies_AllInfo;
  let { C_ID } = useParams();

  const infoCompany = [].flat();
  const infoCompanyStatic = [];
  console.log(
    "🚀 ~ file: CompanyInfoSection.jsx:23 ~ CompanyInfoSection ~ infoCompany:",
    infoCompany
  );
  infoCompany.push(companyData.filter((info) => info.COMPANY_ID === C_ID));
  infoCompanyStatic.push(companyData.find((info) => info.COMPANY_ID === C_ID));
  console.log(
    "🚀 ~ file: CompanyInfoSection.jsx:27 ~ CompanyInfoSection ~ infoCompanyStatic:",
    infoCompanyStatic
  );

  function createData(category, content) {
    return { category, content };
  }

  const rows = [
    createData("Empresa", infoCompanyStatic[0]?.COMPANY_NAME_SPA),
    createData("公司", infoCompanyStatic[0]?.COMPANY_NAME_ZH),
    createData("Tipo de empresa", infoCompanyStatic[0]?.TYPE_SPA),
    createData(
      "Código de Credito Social",
      infoCompanyStatic[0]?.SOCIAL_CREDIT_CODE
    ),
    createData("Headquarters PRC", infoCompanyStatic[0]?.HEADQUARTERS_PRC_SPA),
    createData("Address PRC", infoCompanyStatic[0]?.ADDRESS_PRC),
    createData(
      "Subsidiaries in Venezuela",
      infoCompanyStatic[0]?.SUBSIDIARIES_IN_VENEZUELA_SPA
    ),
    createData(
      "Address in Venezuela",
      infoCompanyStatic[0]?.ADDRESS_IN_VENEZUELA
    ),
    createData(
      "Year Registered in Venezuela",
      infoCompanyStatic[0]?.YEAR_REGISTERED_IN_VENEZUELA
    ),
    createData(
      "Fiscal ID in Venezuela (RIF)",
      infoCompanyStatic[0]?.FISCAL_ID_IN_VENEZUELA
    ),
    createData("Shareholders PRC", "State Council"),
    createData(
      "Shareholders VNZ",
      infoCompany[0]?.map((sh) => (
        <span>{sh?.COMPANY_SHAREHOLDERS}; </span>
      ))
    ),
    createData(
      "Years operating in Venezuela",
      infoCompanyStatic[0]?.YEARS_OPERATING_IN_VENEZUELA_SPA
    ),
    createData(
      "Description of operations in Venezuela",
      infoCompanyStatic[0]?.DESCRIPTION_OF_OPERATIONS_IN_VENEZUELA_SPA
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
