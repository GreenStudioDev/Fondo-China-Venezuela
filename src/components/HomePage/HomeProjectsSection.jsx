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
      const filterSector = project.SECTOR_NAME_ENG;
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
    <>
      <section className="containerfcv mt-64">
        <h1 className="text-sections">Projects</h1>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="year">
              <p className="text-p">
              Select the year you wish to consult and/or then select a sector
              </p>
              <FormControl fullWidth className="year-field">
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Year"
                  onChange={handleChange}
                >
                  <MenuItem value="">All</MenuItem>
                  {years?.map((year) => (
                    <MenuItem key={`home-project-menu-${year}`} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

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
                  All
                </label>
              </div>

              {sectorsData?.map((sector) => (
                <div
                  key={`sector-element-${sector?.S_ID}`}
                  className="box-projects"
                  onClick={filterBySector}
                  value={sector?.SECTOR_NAME_ENG}
                >
                  <li
                    key={`sector-list${sector?.S_ID}`}
                    className="box-projects-home"
                    value={sector?.SECTOR_NAME_ENG}
                  >
                    <img
                      key={`sector-image${sector?.S_ID}`}
                      src={sector?.ICON}
                      alt={`logo ${sector?.SECTOR_NAME_ENG}`}
                      id="Capa_2"
                      value={sector?.SECTOR_NAME_ENG}
                    />
                  </li>
                  <label
                    key={`sector-label${sector?.S_ID}`}
                    className="text-icons-projects mt-8"
                    value={sector?.SECTOR_NAME_ENG}
                  >
                    {sector?.SECTOR_NAME_ENG}
                  </label>
                </div>
              ))}
            </ul>

            <List className="list-companys">
              {searchedProject?.map((project) => (
                <Link
                  
                  key={`project-link-key-${project?.PR_ID}`}
                  to={`/fondos-china-venezuela/en/project/${project?.PROJECT_NAME_ENG}`}
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
                          alt={`icono de ${project?.SECTOR_NAME_ENG}`}
                        />
                      </ListItemIcon>
                      <ListItemText primary={project?.PROJECT_NAME_ENG} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </>
        )}
      </section>
    </>
  );
}
