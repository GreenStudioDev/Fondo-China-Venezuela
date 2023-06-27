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
import "../../styles/ProjectsSection.css";
import { ProjectsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export function ProjectsSection() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { prName } = useParams();
  const projectInfo = ProjectsInfo()?.ProjectsInfo.projects?.find(
    (project) => project?.PROJECT_NAME_ENG === prName
  );
  let sector = projectInfo?.SECTOR_ID;
  const projectData = ProjectsInfo()?.ProjectsInfo?.projects?.filter(
    (project) => project?.SECTOR_ID === sector
  );
  const [loading, setLoading] = useState(true);

  const columns = [
    { id: "sector", label: "Sector", minWidth: 170 },
    { id: "project", label: "Project", minWidth: 100 },
    {
      id: "location",
      label: "Location",
      minWidth: 170,
      align: "right",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "year",
      label: "Year initiated",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "currentState",
      label: "Current Status",
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
      project?.SECTOR_NAME_ENG,
      <Link
        
        to={`/en/china-venezuela-funds/project/${project?.PROJECT_NAME_ENG}`}
        style={{ textDecoration: "none" }}
        key={project?.SECTOR_NAME_ENG}
      >
        {project?.PROJECT_NAME_ENG}
      </Link>,
      project?.LOCATION_ENG,
      project?.YEAR,
      project?.CURRENT_STATUS_ENG
    )
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (rows.length !== 0) {
      setLoading(false);
    }
  }, [rows]);



  return (
    <section className="containerfcv">
      <h4 className="text-sections mt-64">Related Projects</h4>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
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
      )}
    </section>
  );
}
