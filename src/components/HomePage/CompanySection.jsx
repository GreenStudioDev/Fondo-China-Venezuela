import "../../styles/global.css"
import "../../styles/CompanySection.css"
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
// import InboxIcon from '@mui/icons-material/Inbox';
import { CompanyInfo } from "../../api";
import { Link } from "react-router-dom";

export function CompanySection() {

const companyData = CompanyInfo().CompaniesInfo
console.log("🚀 ~ file: CompanySection.jsx:18 ~ CompanySection ~ companyData:", companyData)

  return (
    <>
      <section className="container mt-64">
        <h1 className="text-sections">Empresas</h1>
        <div className="search-company">
          <p className="text-p">Busca o selecciona una empresa de la lista</p>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <List className="list-companys">
          {companyData.companies.map((company) => (
            <Link key={`company-link${company.C_ID}`} to={`/company/${company.C_ID}`} className="text-link">
          <ListItem key={`company-li${company.C_ID}`} className="rows-company p-16">
            <ListItemButton>
              <ListItemIcon sx={{height: "35px"}}>
                <img src={company.LOGO} alt={`logo de ${company.COMPANY_NAME_SPA}`} />
              </ListItemIcon>
              <ListItemText primary={company.COMPANY_NAME_SPA} />
            </ListItemButton>
          </ListItem>
            </Link>
          ))}
        </List>
      </section>
    </>
  );
}
