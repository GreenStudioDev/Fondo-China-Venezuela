import { useEffect, useState } from "react";
import { fcvInstance } from ".";

export const PersonsInfo = () => {

  const loading = []
  const [persons, setpersons] = useState(loading);
  const [personsPositionsMilestones, setPersonsPositionsMilestones] =
    useState(loading);
  const [personsCases, setPersonsCases] = useState(loading);
  const [personsInstMixCompPrbuysell, setPersonsInstMixCompPrbuysell] =
    useState(loading);
  const [personsProjects, setPersonsProjects] = useState(loading);
  const [personsSectors, setPersonsSectors] = useState(loading);

  useEffect(() => {
    async function getpersons() {
      try {
        const response = await fcvInstance.get("/fcv-persons");
        setpersons(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getpersons();

    async function getPersonsPositionsMilestones() {
      try {
        const response = await fcvInstance.get(
          "/fcv-persons/positions-milestones"
        );
        setPersonsPositionsMilestones(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPersonsPositionsMilestones();

    async function getPersonsCases() {
      try {
        const response = await fcvInstance.get("/fcv-persons/cases");
        setPersonsCases(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPersonsCases();

    async function getPersonsInstMixCompPrbuysell() {
      try {
        const response = await fcvInstance.get(
          "/fcv-persons/inst-mixcomp-prbuysell"
        );
        setPersonsInstMixCompPrbuysell(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPersonsInstMixCompPrbuysell();

    async function getPersonsProjects() {
      try {
        const response = await fcvInstance.get("/fcv-persons-projects");
        setPersonsProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPersonsProjects();

    async function getPersonsSectors() {
      try {
        const response = await fcvInstance.get("/fcv-persons-sectors");
        setPersonsSectors(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPersonsSectors();
  }, []);

  return {
    personsInfo: {
      Persons: persons,
      Persons_Positions_Milestones: personsPositionsMilestones,
      Persons_Cases: personsCases,
      Persons_InstAds_MixComp_Projectbuysell: personsInstMixCompPrbuysell,
      Persons_Projects: personsProjects,
      Persons_Sectors: personsSectors,
    },
  };
};
