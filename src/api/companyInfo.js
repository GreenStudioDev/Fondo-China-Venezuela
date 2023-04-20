import { useEffect, useState } from "react";
import { fcvInstance } from "./apiInstace";

export const CompanyInfo = () => {
  const [companies, setCompanies] = useState([]);
  const [companiesAll, setCompaniesAll] = useState([]);
  const [companiesPersons, setCompaniesPersons] = useState([]);
  const [companiesSectors, setCompaniesSectors] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      try {
        const response = await fcvInstance.get("/fcv-companies");
        setCompanies(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCompanies();

    async function getCompaniesAll() {
      try {
        const response = await fcvInstance.get("/fcv-companies/all");
        setCompaniesAll(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCompaniesAll();

    async function getCompaniesPersons() {
      try {
        const response = await fcvInstance.get("/fcv-companies-persons");
        setCompaniesPersons(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCompaniesPersons();

		async function getCompaniesSectors() {
      try {
        const response = await fcvInstance.get("/fcv-companies-sectors");
        setCompaniesSectors(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCompaniesSectors();


  }, []);

  return {
    CompaniesInfo: {
      companies: companies,
      companies_AllInfo: companiesAll,
      companies_Persons: companiesPersons,
			companies_Sectors: companiesSectors,
    },
  };
};
