import { useEffect, useState } from "react";
import { fcvInstance } from "./";


export const ProjectsInfo = () => {

    const loading = []
  
    const [projects, setProjects] = useState(loading);
    const [projectsCasesMinisteries, setProjectsCasesMinisteries] = useState(loading);
    const [projectsUnrelatedPeople, setProjectsUnrelatedPeople] = useState(loading);
    const [projectsCompanies, setProjectsCompanies] = useState(loading);
  
    useEffect(() => {
      
  
      async function getProjects() {
        try {
          const response = await fcvInstance.get("/fcv-projects");
          setProjects(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getProjects();
  
      async function getProjectsCasesMinisteries() {
        try {
          const response = await fcvInstance.get(
            "/fcv-projects/cases-ministeries"
          );
          setProjectsCasesMinisteries(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getProjectsCasesMinisteries();
  
      async function getProjectsUnrelatedPeople() {
        try {
          const response = await fcvInstance.get(
            "/fcv-projects/unrelated-people"
          );
          setProjectsUnrelatedPeople(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getProjectsUnrelatedPeople();
  
      async function getProjectsCompanies() {
        try {
          const response = await fcvInstance.get("/fcv-projects-companies");
          setProjectsCompanies(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getProjectsCompanies();
  
  
    }, []);
  
    return {
      ProjectsInfo: {
        projects: projects,
        projects_Cases_Ministeries: projectsCasesMinisteries,
        projects_UnrelatedPeople: projectsUnrelatedPeople,
        projects_Companies: projectsCompanies,
      },
    };
  }