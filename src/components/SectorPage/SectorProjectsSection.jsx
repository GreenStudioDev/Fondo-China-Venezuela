import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../../styles/global.css";
import "../../styles/SectorPage.css";
import { ProjectsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export function SectorProjectsSection() {
  const { sectorName } = useParams();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const projectData = ProjectsInfo().ProjectsInfo.projects.filter(
    (project) => project.SECTOR_NAME_SPA === sectorName
  );


  useEffect(() => {
    if (projectData.length !== 0) {
      setLoading(false);
    }
  }, [projectData]);

  const columns = [
    { id: "project", label: "Proyecto", minWidth: 170 },
    {
      id: "year",
      label: "Año de inicio",
      minWidth: 170,
      align: "right",
    },
    {
      id: "location",
      label: "Ubicación",
      minWidth: 170,
      align: "right",
    },
    {
      id: "state",
      label: "Estado Actual",
      minWidth: 170,
      align: "right",
    },
    {
      id: "fundType",
      label: "Tipo de Fondo (FCCV o FGVLP)",
      minWidth: 170,
      align: "right",
    },
    {
      id: "chAmmount",
      label: "Monto fondos Chinos (USD)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
      // format: (value) => value.toFixed(2),
    },
    {
      id: "ammount",
      label: "Monto del proyecto (USD)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "venCompanies",
      label: "Empresas Venezuela",
      minWidth: 170,
      align: "right",
    },
  ];

  const rows = projectData.map((project) =>
    createData(
      <Link
        to={`/fondos-china-venezuela/project/${project?.PROJECT_NAME_SPA}`}
        style={{ textDecoration: "none" }}
      >
        {project?.PROJECT_NAME_SPA}
      </Link>,
      project?.YEAR,
      project?.LOCATION_SPA,
      project?.CURRENT_STATUS_SPA,
      project?.TYPE_OF_CHINESE_FUNDS_SPA,
      `$${parseInt(project?.CHINESE_FUND_AMOUNT).toLocaleString("en-US")}`,
      `$${parseInt(project?.PROJECT_AMOUNT).toLocaleString("en-US")}`,
      project?.VENEZUELA_COMPANIES_SPA
    )
  );

  function createData(
    project,
    year,
    location,
    state,
    fundType,
    chAmmount,
    ammount,
    venCompanies,
    chCompanies
  ) {
    return {
      project,
      year,
      location,
      state,
      fundType,
      chAmmount,
      ammount,
      venCompanies,
      chCompanies,
    };
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section className="containerfcv">
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="descargar">
            <h4 className="text-sections">{`Proyectos de ${sectorName}`}</h4>
          </div>
          <div className="table">
          <Paper /*  sx={{ width: "100%", overflow: "hidden" }} */>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead className="header-table">
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={`TC-PRS-${column.label}`}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.project.props.children}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </>
      )}
    </section>
  );
}
