import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(category, content) {
  return { category, content };
}

const rows = [
  createData(
    "Nombre o descripción del proyecto",
    "Proyecto Integral de Desarrollo Agrario Socialista Tiznados"
  ),
  createData("Área o sector", "Agricultura"),
  createData("Ubicación", "Guárico"),
  createData("Año de inicio", "2007"),
  createData("Estado actual", "No concluido"),
  createData("Monto del proyecto (MM/US$)", "570"),
  createData("Monto Fondos Chinos (MM/US$)", "226.42"),
  createData("Tipo de Fondo (FCCV o FGVLP)", "FCCV y FGVLP"),
  createData(
    "Empresas particiantes (China)",
    "China CAMC Engineering Co., LTD (CAMCE)"
  ),
  createData("Empresas participantes (Extranjeras)", ""),
  createData(
    "Empresas participantes (Venezuela)",
    "Empresa Socialista de Riego Río Tiznados S.A"
  ),
  createData(
    "Ministerios (Venezuela)",
    "Ministerio del Poder Popular para Agricultura y Tierras"
  ),
  createData(
    "Ente u órgano ejecutor (Venezuela)",
    "Empresa Socialista de Riego Río Tiznados S.A."
  ),
  createData(
    "Personas claves (Nombre y cargo)",
    "- Juan Carlos Loyo (ministro de Agricultura y Tierras 2010-2012); - Elías Jaua Milano (ministro de agricultura 2012-2013); - Yvan Gil (ministro de Agricultura y Tierras 2013 y 2015); Wilmar Castro Soteldo (ministro de Producción Nacional y Tierras 2016-actualidad)"
  ),
  createData("Irregularidades", "Comprobado"),
  createData("Casos de corrupción", "Sospecha"),
  createData("Notas adicionales", ""),
];

export function ProjectInfoSection() {
  return (
    <>
      <h3>Descripción del proyecto</h3>
      <TableContainer component={Paper}>
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
                <TableCell align="right">{row.content}</TableCell>
                {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
