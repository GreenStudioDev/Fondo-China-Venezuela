import React from "react";
import "../../styles/global.css";
import "../../styles/ProfileInfoSection.css";
import { PersonsInfo } from "../../api";
import { Link, useParams } from "react-router-dom";

export function ProfileInfoSection() {

  const { personName } = useParams();

  const personInfo = PersonsInfo()?.personsInfo?.Persons_Sectors?.find(
    (person) => person?.NAME === personName
  );
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
    ...new Set(personInfoFilter?.map((position) => position?.POSITION_SPA)),
  ];
  const personMilestones = [
    ...new Set(personInfoFilter?.map((position) => position?.MILESTONE_SPA)),
  ];
  const personInstAdsc = [
    ...new Set(
      personAditionalDataFilter?.map(
        (position) => position?.INSTITUTIONAL_ADSCRIPTION_SPA
      )
    ),
  ];
  const personBuySellLinkage = [
    ...new Set(
      personAditionalDataFilter?.map(
        (position) => position?.PROJECTS_SERVICES_BUY_AND_SELL_LINKAGE_SPA
      )
    ),
  ];
  const personMixedCompLinkage = [
    ...new Set(
      personAditionalDataFilter?.map(
        (position) => position?.MIXED_COMPANIES_LINKAGE_SPA
      )
    ),
  ];
  const personIrregularities = [
    ...new Set(
      personCasesFilter?.map((position) => position?.IRREGULARITIES_SPA)
    ),
  ];
  const personCases = [
    ...new Set(
      personCasesFilter?.map((position) => position?.CORRUPTION_CASES_SPA)
    ),
  ];

  return (
    <>
      <section className="container mt-64">
        <div className="profile-info-header">
          <img alt="" src={personInfo?.PHOTO} className="profile-info-photo" />

          <div className="profile-info-title">
            <div>
              <h4 className="profile-name">{personInfo?.NAME}</h4>
              <p className="profile-subtitle">{personInfo?.NATIONALITY_SPA}</p>
              <p className="profile-subtitle">
                Sector: {personInfo?.SECTOR_NAME_SPA}
              </p>
              <p>{personInfo?.DESCRIPTION_SPA}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">
              ADSCRIPCIÓN INSTITUCIONAL
            </h3>
            {personInstAdsc?.map((adscription) => (
              <p className="profile-contents">{adscription}</p>
            ))}
          </div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">
              CARGO O RESPONSABILIDAD
            </h3>
            {personPositions?.map((position) => (
              <p className="profile-contents">{position}</p>
            ))}
          </div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">
              HITOS - RELACIONAMIENTO RPCh
            </h3>
            <ul className="profile-contents">
              {personMilestones?.map((milestones) => (
                <li className="profile-list mb-16">{milestones}</li>
              ))}
            </ul>
          </div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">
              VINCULACIÓN PROYECTOS FCV
            </h3>
            {personProjectsFilter?.map((project) => (
              <Link to={`/project/${project?.PROJECT_NAME_SPA}`}>
                <p className="profile-contents">{project?.PROJECT_NAME_SPA}</p>
              </Link>
            ))}
          </div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">
              VINCULACIÓN COMPRA DE BIENES Y SERVICIOS FCV
            </h3>
            {personBuySellLinkage?.map((linkage) => (
              <p className="profile-contents">{linkage}</p>
            ))}
          </div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">
              VINCULACIÓN EMPRESAS MIXTAS
            </h3>
            {personMixedCompLinkage?.map((linkage) => (
              <p className="profile-contents">{linkage}</p>
            ))}
          </div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">IRREGULARIDADES</h3>
            {personIrregularities?.map((irregularity) => (
              <p className="profile-contents">{irregularity}</p>
            ))}
          </div>
          <div className="profile-texts mt-40">
            <h3 className=".profile-subtitles-contents">CASOS DE CORRUPCIÓN</h3>
            {personCases?.map((corruption) => (
              <p className="profile-contents">{corruption}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
