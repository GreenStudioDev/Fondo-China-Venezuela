import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../styles/global.css"
import "../../styles/CompanyProjectsSection.css"

function createData(category, project1, project2) {
  return { category, project1, project2 };
}

const rows = [
  createData("Área o sector", "Energía Eléctrica", "Energía Eléctrica"),
  createData(
    "Nombre o descripción del proyecto",
    "Planta Termoeléctrica 'Don Luis Zambrano'", "Planta Termocarabobo II"
  ),
  createData("Ubicación", "Mérida", "Carabobo"),
  createData("Año de inicio", "2011", "2010"),
  createData("Estado actual", "Concluida", "Concluida"),
  createData("Monto del proyecto (MM/US$)", "1.145", "1.116"),
  createData("Monto Fondos Chinos (MM/US$)", "1.145", "1.116"),
  createData("Tipo de Fondo (FCCV o FGVLP)", "FCCV", ""),
  createData(
    "Empresas particiantes (China)",
    "China CAMC Engineering Co., LTD (CAMCE)", "China CAMC Engineering Co., LTD (CAMCE) y Sinohydro Corporation Ltd."
  ),
  createData("Empresas participantes (Venezuela)", "N/D", "N/D"),
  createData("Ministerios (Venezuela)", "Ministerio de Energía Eléctrica", "Ministerio de Energía Eléctrica"),
  createData("Ente u órgano ejecutor (Venezuela)", "Corpoelec", "Corpoelec"),
  createData("Irregularidades", "Comprobado", "Comprobado"),
  createData("Casos de corrupción", "Comprobado.", "Comprobado"),
];

export function CompanyProjectsSection() {
  return (
    <>
    <section className="container mt-64">
      <h3 className="text-sections">Proyectos asociados</h3>
      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {/* <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow> */}
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.category}
                </TableCell>
                <TableCell align="right">{row.project1}</TableCell>
                <TableCell align="right">{row.project2}</TableCell>
                {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </section>
    </>
  );
}
