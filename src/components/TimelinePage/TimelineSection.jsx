import React, { useEffect, useState } from "react";
import { TimelineInfo } from "../../api";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



export const TimelineSection = () => {
  const timelineData = TimelineInfo().timelineInfo;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (timelineData.length >= 5) {
      setLoading(false);
    }
  }, [timelineData]);

  return (
    <section className="containerfcv">
      <section className="title-page-header">
        <h1 className="title-page">Timeline</h1>
      </section>
      <div className="volver-tl">
        <Link to="/en/china-venezuela-funds/">
          <button className="btn-volver">
            <ArrowBackIcon />
            Back
          </button>
        </Link>
      </div>
      <section className="containerfcv">
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <Timeline position="alternate">
            {timelineData.map((item) => (
              <TimelineItem key={item?.ID}>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <div className="hito-year">{item?.TL_YEAR}</div>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <div className="hito-description">
                    <div className="hito-photo">
                      <img
                        alt="imagen-sector-project"
                        src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                      />
                    </div>
                    <p>{item?.TL_MILESTONE_ENG}</p>
                    <h5 className="hito-date font-m-p">{item?.TL_DATE_ENG}</h5>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </section>
    </section>
  );
};
