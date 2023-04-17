import React from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../../styles/global.css"
import "../../styles/ProjectsSection.css"

const columns = [
  { id: "sector", label: "Área o sector", minWidth: 170 },
  { id: "project", label: "Proyecto", minWidth: 100 },
  {
    id: "location",
    label: "Ubicación",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
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

const rows = [
  createData("Agricultura", "Proyecto Integral de Desarrollo Agrario Socialista Tiznados", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "Proyecto Integral de Desarrollo Agrario Socialista Tiznados", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "Proyecto Integral de Desarrollo Agrario Socialista Tiznados", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "US", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "CA", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "AU", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "DE", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "IE", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "MX", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "JP", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "FR", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "GB", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "RU", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "Proyecto Integral de Desarrollo Agrario Socialista Tiznados", "Guárico", "2007", "No terminado"),
  createData("Agricultura", "Proyecto Integral de Desarrollo Agrario Socialista Tiznados", "Guárico", "2007", "No terminado"),
];

export function ProjectsSection() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        <button className="btn-descargar">
          Descargar documento <BorderAllIcon />
        </button>
      </div>
      <div>
        <Paper className="table" sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
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
                        key={row.code}
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
