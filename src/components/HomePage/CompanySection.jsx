import "../../styles/global.css";
import "../../styles/CompanySection.css";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { CompanyInfo } from "../../api";
import { Link } from "react-router-dom";

export function CompanySection() {
  const [searchValue, setSearchValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const companyData = CompanyInfo()?.CompaniesInfo?.companies;

  useEffect(() => {
    if (companyData.length >= 6) {
      setLoading(false);
    }
  }, [companyData]);

  const onChageCompany = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  let searchedCompany = [];

  if (!searchValue.length >= 1) {
    searchedCompany = companyData;
  } else {
    searchedCompany = companyData.filter((company) => {
      const name = company.COMPANY_NAME_ENG.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return name.includes(searchText);
    });
  }

  return (
    <>
      <section className="containerfcv mt-64">
        <h1 className="text-sections">Companies</h1>
        <div className="search-company">
          <p className="text-p">Search or select a company from the list</p>
          <TextField
            className="search-field"
            id="company-search"
            label="Search by company"
            variant="outlined"
            value={searchValue}
            onChange={onChageCompany}
          />
        </div>
        {loading ? (
          <List>
            <ListItem sx={{ justifyContent: "center" }}>
              <CircularProgress />
            </ListItem>
          </List>
        ) : (
          <List className="list-companys">
            {searchedCompany.map((company) => (
              <Link
                key={`company-link${company.C_ID}`}
                to={`/fondos-china-venezuela/en/company/${company.COMPANY_NAME_ENG}`}
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
                        alt={`logo de ${company.COMPANY_NAME_ENG}`}
                      />
                    </ListItemIcon>
                    <ListItemText primary={company.COMPANY_NAME_ENG} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            {searchedCompany.length === 0 && (
              <ListItem>
                <ListItemText
                  primary={"No hay empresas con los criterios seleccionados"}
                />
              </ListItem>
            )}
          </List>
        )}
      </section>
    </>
  );
}
