import "../../styles/global.css";
import "../../styles/CompanySection.css";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
// import InboxIcon from '@mui/icons-material/Inbox';
import { CompanyInfo } from "../../api";
import { Link } from "react-router-dom";

export function CompanySection() {
  const [searchValue, setSearchValue] = useState([]);
  let companyData = CompanyInfo().CompaniesInfo.companies;
  console.log("🚀 ~ file: CompanySection.jsx:19 ~ CompanySection ~ companyData:", companyData)

  const onChageCompany = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  let searchedCompany = []

  if (!searchValue.length >= 1) {
    searchedCompany = companyData
  } else {
    searchedCompany = companyData.filter(company => {
      const name = company.COMPANY_NAME_SPA.toLowerCase()
      const searchText =  searchValue.toLowerCase()
      return name.includes(searchText)
    })
  }

  return (
    <>
      <section className="containerfcv mt-64">
        <h1 className="text-sections">Empresas</h1>
        <div className="search-company">
          <p className="text-p">Busca o selecciona una empresa de la lista</p>
          <TextField
            className="search-field"
            id="company-search"
            label="Busca por empresas"
            variant="outlined"
            value={searchValue}
            onChange={onChageCompany}
          />
        </div>
        <List className="list-companys">
          {searchedCompany.map((company) => (
            <Link
              key={`company-link${company.C_ID}`}
              to={`/fondos-china-venezuela/company/${company.COMPANY_NAME_SPA}`}
              className="text-link"
            >
              <ListItem
                key={`company-li${company.C_ID}`}
                className="rows-company p-16"
              >
                <ListItemButton>
                  <ListItemIcon sx={{ height: "35px" }}>
                    <img
                      src={company.LOGO}
                      alt={`logo de ${company.COMPANY_NAME_SPA}`}
                    />
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
