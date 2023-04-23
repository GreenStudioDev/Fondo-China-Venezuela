import React from "react";
import { TimelineInfo } from "../../api";

export const TimelineSection = () => {
  const timelineData = TimelineInfo().timelineInfo;

  return (
    <section className="hito mt-140">
      <h1 className="title-page">Linea de tiempo</h1>

      {timelineData.map((tl) => (
        <>
          <div key={tl.ID} className="hito-description">
            <div className="hito-photo">
              <img
                alt="imagen-sector-project"
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              />
            </div>
            <p>{tl.TL_MILESTONE}</p>
            <h5 className="hito-date font-m-p">{tl.TL_DATE}</h5>
          </div>
          <div key={`year-${tl.ID}`} className="hito-year">
            {tl.TL_YEAR}
          </div>
        </>
      ))}
    </section>
  );
};
