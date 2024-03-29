import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { ProjectsInfo, SectorsInfo } from "../../api";
import "../../styles/global.css";
import "../../styles/HomeProjectSection.css";
import "../../styles/CompanySection.css";
import { CircularProgress } from "@mui/material";

export function HomeProjectsSection() {
  const projectsData = ProjectsInfo()?.ProjectsInfo?.projects;
  const sectorsData = SectorsInfo();

  const [year, setYear] = useState([""]);
  const [sector, setSector] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectsData.length >= 6 && sectorsData.length >= 6) {
      setLoading(false);
    }
  }, [projectsData, sectorsData]);

  let searchedProject = [];

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const filterBySector = (event) => {
    setSector(event.target.attributes.value.nodeValue);
  };

  if (!year.length >= 1 && !sector.length >= 1) {
    searchedProject = projectsData;
  } else {
    searchedProject = projectsData.filter((project) => {
      const filterSector = project.SECTOR_NAME_SPA;
      const filterYear = project.YEAR;
      const searchedYear = year;
      const searchedSector = sector;
      return (
        filterYear.includes(searchedYear) &&
        filterSector.includes(searchedSector)
      );
    });
  }

  const yearsduplicates = new Set(
    projectsData?.map((project) => project?.YEAR).sort((a, b) => a - b)
  );

  const years = [...yearsduplicates];

  return (
    <section className="containerfcv mt-64 mb-32">
      <div className="title-search">
        <h1 className="text-sections">Proyectos</h1>
        <div className="year">
          <p className="text-p">
            Selecciona el año que deseas consultar y/o luego selecciona un
            sector
          </p>
          <FormControl fullWidth className="year-field">
            <InputLabel id="demo-simple-select-label">Año</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Año"
              onChange={handleChange}
            >
              <MenuItem value="">Todos</MenuItem>
              {years?.map((year) => (
                <MenuItem key={`home-project-menu-${year}`} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <ul className="projects-icons-home list-projects mb-32">
            <div
              key={`sector-element-none`}
              className="box-projects"
              onClick={filterBySector}
              value=""
            >
              <li
                key={`sector-list-none`}
                className="box-projects-home"
                value=""
              >
                <img
                  key={`sector-image-none`}
                  src={"https://fundacionandresbello.org/agricultura/"}
                  alt={`logo todos`}
                  id="Capa_2"
                  value=""
                />
              </li>
              <label
                key={`sector-label-none`}
                className="text-icons-projects mt-8"
                value=""
              >
                Todos
              </label>
            </div>

            {sectorsData?.map((sector) => (
              <div
                key={`sector-element-${sector?.S_ID}`}
                className="box-projects"
                onClick={filterBySector}
                value={sector?.SECTOR_NAME_SPA}
              >
                <li
                  key={`sector-list${sector?.S_ID}`}
                  className="box-projects-home"
                  value={sector?.SECTOR_NAME_SPA}
                >
                  <img
                    key={`sector-image${sector?.S_ID}`}
                    src={sector?.ICON}
                    alt={`logo ${sector?.SECTOR_NAME_SPA}`}
                    id="Capa_2"
                    value={sector?.SECTOR_NAME_SPA}
                  />
                </li>
                <label
                  key={`sector-label${sector?.S_ID}`}
                  className="text-icons-projects mt-8"
                  value={sector?.SECTOR_NAME_SPA}
                >
                  {sector?.SECTOR_NAME_SPA}
                </label>
              </div>
            ))}
          </ul>
          <div style={{ width: "100%" }}>
            <List className="list-companys">
              {searchedProject?.map((project) => (
                <Link
                  key={`project-link-key-${project?.PR_ID}`}
                  to={`/fondos-china-venezuela/project/${project?.PROJECT_NAME_SPA}`}
                  className="text-link"
                >
                  <ListItem
                    key={`project-${project?.PR_ID}`}
                    className="rows-company p-16"
                  >
                    <ListItemButton>
                      <ListItemIcon sx={{ height: "35px" }}>
                        <img
                          src={project?.ICON}
                          alt={`icono de ${project?.SECTOR_NAME_SPA}`}
                        />
                      </ListItemIcon>
                      <ListItemText primary={project?.PROJECT_NAME_SPA} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </>
      )}
    </section>
  );
}
