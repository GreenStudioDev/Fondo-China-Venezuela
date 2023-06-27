import { Link } from "react-router-dom";
import { PersonsInfo } from "../../api";
import "../../styles/global.css";
import "../../styles/ProfilesSection.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

export function ProfilesSection() {
  const personsData = PersonsInfo()?.personsInfo?.Persons;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (personsData?.length >= 3) {
      setLoading(false);
    }
  }, [personsData]);

  return (
    <>
      <div className="containerfcv-profile mt-64">
        <div className="title-profile">
          <h1>Persons of interest</h1>
          <p className="text-p">Click on the photo to see details</p>
        </div>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <div className="card-profile">
            {personsData
              ?.filter((person) => person?.P_ID < 5)
              .map((person) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/en/china-venezuela-funds/profile/${person?.NAME}`}
                  key={`LPK-${person?.P_ID}`}
                >
                  <Card
                    key={`CPK-${person?.P_ID}`}
                    className="profile-home"
                    sx={{ maxWidth: 345 }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={person?.PHOTO}
                        alt={`Foto de ${person?.NAME}`}
                        sx={{
                          overflowClipMargin: "content-box",
                          overflow: "clip",
                          height: "270px",
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5">
                          {person?.NAME}
                        </Typography>
                        <Typography variant="body2">
                          {person?.DESCRIPTION_ENG}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              ))}
          </div>
        )}
        <Link to="/en/china-venezuela-funds/profile">
          <button className="cta-btn-small">See all</button>
        </Link>
      </div>
    </>
  );
}
