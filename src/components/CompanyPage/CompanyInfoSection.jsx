import React from "react";
import "../../styles/global.css"
import "../../styles/CompanyProjectsSection.css"
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
  createData("Company", "China CAMC Engineering Co. LTD"),
  createData("公司", "中工國際工程股份有限公司"),
  createData("Company Type", "Public"),
  createData("Social Credit Code", "91110000710928321N"),
  createData("Headquarters PRC", "Beijing, China"),
  createData("Address PRC", ""),
  createData("Subsidiaries in Venezuela", "CAMCE Sudamerica C.A."),
  createData(
    "Address in Venezuela",
    "Av La Estancia cc Ciudad Tamanaco nivel piso 6 of 602 Urb Chuao Caracas, Chacao Miranda - zona postal 1060"
  ),
  createData("Year Registered in Venezuela", "2002"),
  createData("Fiscal ID in Venezuela (RIF)", "J309473859"),
  createData("Shareholders PRC", "State Council"),
  createData(
    "Shareholders VNZ",
    "P-G26223059 Bohuai, Sun; P-G27518269 Peng, Wei; P-G29681862 Yan, Luo; P-G36971057 Decheng, Wang; P-P00872278 Huang, Cui; P-P01111251 Wang, Guoxing; P-P01181789 Zhang, Chunyan; P-P01325848 Huang, Jianzhou; P-P01357281 Luo, Yan; P-P01674227 Shi, Hui; P-Pe0018759 Lizhi, Zhao; P-Pe0940858 Yan, Luo; P-Pe0998814 Wei, Peng; P-S90440433 Luo, Jiamang; P-S90455651 Cai, Weici"
  ),
  createData("Years operating in Venezuela", "2002-Present"),
  createData(
    "Description of operations in Venezuela",
    "Industry: manufacturing of equipment for processing agricultural products. Agricultural: Orinoco Delta Agrarian Development Project; Socialist Agrarian Development Tiznados; Socialist Agrarian Development Piritu Becerra; Sabila plant from Venezuela; Rehabilitation and expansion of the Rio Guárico irrigation system; Supply of agricultural machinery and implements. Hydraulic: Sanitation of the Portuguesa river and tributaries; Falcón State water supply. Electric: Supply of turbines for alcohol plant Cuba Venezuela; El Vigía power generation plant. Others: supply of port machinery."
  ),
];

export function CompanyInfoSection() {
  return (
    <>
    <section className="container mt-64">
      <h3 className="text-sections">Información de la compañía</h3>
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
                <TableCell align="right">{row.content}</TableCell>
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
