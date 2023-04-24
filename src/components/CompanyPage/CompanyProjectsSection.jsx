import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../../styles/global.css";
import "../../styles/ProjectsSection.css";
import { ProjectsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";

export function CompanyProjectsSection() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const { C_ID } = useParams();
  console.log("🚀 ~ file: CompanyProjectsSection.jsx:21 ~ CompanyProjectsSection ~ C_ID:", C_ID)
  const projectData = ProjectsInfo()?.ProjectsInfo?.projects_Companies?.filter(
    (project) => project?.COMPANY_NAME_SPA === C_ID
  );
  const projectStatic = ProjectsInfo()?.ProjectsInfo?.projects_Companies?.find(
    (project) => project?.COMPANY_NAME_SPA === C_ID
  );

  console.log(
    "🚀 ~ file: CompanyProjectsSection.jsx:24 ~ CompanyProjectsSection ~ projectStatic:",
    projectStatic
  );

  const columns = [
    { id: "sector", label: "Área o sector", minWidth: 170 },
    { id: "project", label: "Proyecto", minWidth: 100 },
    {
      id: "location",
      label: "Ubicación",
      minWidth: 170,
      align: "right",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "year",
      label: "Año inicio",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "currentState",
      label: "Estado actual",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(sector, project, location, year, currentState) {
    return { sector, project, location, year, currentState };
  }

  const rows = projectData.map((project) =>
    createData(
      <Link
        to={`/fondos-china-venezuela/sector/${project?.SECTOR_NAME_SPA}`}
        style={{ textDecoration: "none", color: "#ffffff" }}
      >
        {project?.SECTOR_NAME_SPA}
      </Link>,
      <Link
        to={`/fondos-china-venezuela/project/${project?.PROJECT_NAME_SPA}`}
        style={{ textDecoration: "none", color: "#ffffff" }}
      >
        {project?.PROJECT_NAME_SPA}
      </Link>,
      project?.LOCATION_SPA,
      project?.YEAR,
      project?.CURRENT_STATUS_SPA
    )
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <section className="container">
      <div className="descargar">
        <h4 className="text-sections mt-64">Proyectos Relacionados</h4>
      </div>
      <div>
        <Paper className="table" sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={`TRP-${column.id}`}
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
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={`TRPRO - ${row.project}`}
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
    </section>
  );
}
