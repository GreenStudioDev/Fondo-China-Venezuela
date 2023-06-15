import React, { useEffect, useState } from "react";
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
import { CircularProgress } from "@mui/material";

export function CompanyInfoSection() {
  const { C_ID } = useParams();
  let companyData = CompanyInfo()?.CompaniesInfo?.companies_AllInfo;
  const [loading, setLoading] = useState(true);

  const infoCompany = companyData.filter(
    (info) => info?.COMPANY_NAME_ENG === C_ID
  );

  const infoCompanyStatic = companyData.find(
    (info) => info?.COMPANY_NAME_ENG === C_ID
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

  function createData(category, content) {
    return { category, content };
  }

  const rows = [
    createData("Empresa", infoCompanyStatic?.COMPANY_NAME_ENG),
    createData("公司", infoCompanyStatic?.COMPANY_NAME_ZH),
    createData("Tipo de empresa", infoCompanyStatic?.TYPE_ENG),
    createData(
      "Código de Credito Social",
      infoCompanyStatic?.SOCIAL_CREDIT_CODE
    ),
    createData("Sede Central RPCh", infoCompanyStatic?.HEADQUARTERS_PRC_ENG),
    createData("Dirección RPCh", infoCompanyStatic?.ADDRESS_PRC),
    createData(
      "Subsidiarias en Venezuela",
      infoCompanyStatic?.SUBSIDIARIES_IN_VENEZUELA_ENG
    ),
    createData(
      "Dirección en Venezuela",
      infoCompanyStatic?.ADDRESS_IN_VENEZUELA
    ),
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
      infoRepresentativeInVen?.map((rep) => <span key={rep} >{rep + "; "}</span>)
    ),
    createData(
      "Accionistas Venezuela",
      infoShareholdersVen?.map((sh) => <span key={sh}>{sh + "; "}</span>)
    ),
    createData(
      "Años operando en Venezuela",
      infoCompanyStatic?.YEARS_OPERATING_IN_VENEZUELA_ENG
    ),
    createData(
      "Descripción de operaciones en Venezuela",
      infoCompanyStatic?.DESCRIPTION_OF_OPERATIONS_IN_VENEZUELA_ENG
    ),
  ];

  useEffect(() => {
    if (infoCompanyStatic?.COMPANY_NAME_ENG !== "") {
      setLoading(false);
    }
  }, [infoCompanyStatic]);

  return (
    <section className="containerfcv mt-64">
      <h3 className="text-sections">Información de la compañía</h3>
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
                  key={`trow-prInfo-${row.category}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    key={`tc-prInfo-${row?.content}`}
                    component="th"
                    scope="row"
                  >
                    {row?.category}
                  </TableCell>
                  <TableCell
                    key={`tc-prInfo-cat-${row?.category}`}
                    align="right"
                  >
                    {row?.content}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </section>
  );
}
