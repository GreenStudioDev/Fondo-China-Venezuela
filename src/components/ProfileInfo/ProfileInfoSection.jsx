import React, { useEffect, useState } from "react";
import "../../styles/global.css";
import "../../styles/ProfileInfoSection.css";
import { PersonsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export function ProfileInfoSection() {
  const { personName } = useParams();
  const [loading, setLoading] = useState(true);

  const personInfo = PersonsInfo()?.personsInfo?.Persons_Sectors?.find(
    (person) => person?.NAME === personName
  );

  useEffect(() => {
    if (personInfo?.PHOTO !== "") {
      setLoading(false);
    }
  }, [personInfo]);

  const personInfoFilter =
    PersonsInfo()?.personsInfo?.Persons_Positions_Milestones?.filter(
      (person) => person?.NAME === personName
    );
  const personProjectsFilter =
    PersonsInfo()?.personsInfo?.Persons_Projects?.filter(
      (person) => person?.NAME === personName
    );
  const personAditionalDataFilter =
    PersonsInfo()?.personsInfo?.Persons_InstAds_MixComp_Projectbuysell?.filter(
      (person) => person?.NAME === personName
    );
  const personCasesFilter = PersonsInfo()?.personsInfo?.Persons_Cases?.filter(
    (person) => person?.NAME === personName
  );

  const personPositions = [
    ...new Set(personInfoFilter?.map((position) => position?.POSITION_ENG)),
  ];

  const personMilestones = [
    ...new Set(personInfoFilter?.map((position) => position?.MILESTONE_ENG)),
  ];

  const personInstAdsc = [
    ...new Set(
      personAditionalDataFilter?.map(
        (position) => position?.INSTITUTIONAL_ADSCRIPTION_ENG
      )
    ),
  ];
  const personBuySellLinkage = [
    ...new Set(
      personAditionalDataFilter?.map(
        (position) => position?.PROJECTS_SERVICES_BUY_AND_SELL_LINKAGE_ENG
      )
    ),
  ];
  const personMixedCompLinkage = [
    ...new Set(
      personAditionalDataFilter?.map(
        (position) => position?.MIXED_COMPANIES_LINKAGE_ENG
      )
    ),
  ];
  const personIrregularities = [
    ...new Set(
      personCasesFilter?.map((position) => position?.IRREGULARITIES_ENG)
    ),
  ];
  const personCases = [
    ...new Set(
      personCasesFilter?.map((position) => position?.CORRUPTION_CASES_ENG)
    ),
  ];

  return (
    <>
      <section className="containerfcv mt-64">
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="profile-info-header">
              <img
                alt=""
                src={personInfo?.PHOTO}
                className="profile-info-photo"
              />
              <div className="profile-info-title">
                <div>
                  <h4 className="profile-name">{personInfo?.NAME}</h4>
                  <p className="profile-subtitle">
                    Nacionalidad: {personInfo?.NATIONALITY_ENG}
                  </p>
                  <p className="profile-subtitle">
                    Sector: {personInfo?.SECTOR_NAME_ENG}
                  </p>
                  <p>{personInfo?.DESCRIPTION_ENG}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">
                  ADSCRIPCIÓN INSTITUCIONAL
                </h3>
                {personInstAdsc?.map((adscription) => (
                  <p key={`INST-ADSC-KEY-${adscription}`} className="profile-contents">{adscription}</p>
                ))}
              </div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">
                  CARGO O RESPONSABILIDAD
                </h3>
                {personPositions?.map((position) => (
                  <p key={`POS-KEY-${position}`} className="profile-contents">{position}</p>
                ))}
              </div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">
                  HITOS - RELACIONAMIENTO RPCh
                </h3>
                <ul className="profile-contents">
                  {personMilestones?.map((milestones) => (
                    <li key={`MILE-KEY-${milestones}`} className="profile-list mb-16">{milestones}</li>
                  ))}
                </ul>
              </div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">
                  VINCULACIÓN PROYECTOS FCV ( {personProjectsFilter.length} )
                </h3>
                <List className="list-companys">
                  {personProjectsFilter?.map((project) => (
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
                          <ListItemText primary={project?.PROJECT_NAME_ENG} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">
                  VINCULACIÓN COMPRA DE BIENES Y SERVICIOS FCV
                </h3>
                {personBuySellLinkage?.map((linkage) => (
                  <p key={`LINKAGE-KEY-${linkage}`} className="profile-contents">{linkage}</p>
                ))}
              </div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">
                  VINCULACIÓN EMPRESAS MIXTAS
                </h3>
                {personMixedCompLinkage?.map((linkage) => (
                  <p key={`MX-COMPANIES-KEY-${linkage}`} className="profile-contents">{linkage}</p>
                ))}
              </div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">IRREGULARIDADES</h3>
                {personIrregularities?.map((irregularity) => (
                  <p key={`IRREGULARITIES-KEY-${irregularity}`} className="profile-contents">{irregularity}</p>
                ))}
              </div>
              <div className="profile-texts mt-40">
                <h3 className=".profile-subtitles-contents">
                  CASOS DE CORRUPCIÓN
                </h3>
                {personCases?.map((corruption) => (
                  <p key={`CORRUPTION-KEY-${corruption}`} className="profile-contents">{corruption}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
