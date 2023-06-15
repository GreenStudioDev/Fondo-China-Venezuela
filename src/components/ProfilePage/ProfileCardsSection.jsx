import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import "../../styles/global.css";
import "../../styles/ProfileCardsSection.css";
import { PersonsInfo } from "../../api";
import { Link } from "react-router-dom";



export function ProfileCardsSection() {

  const personData = PersonsInfo()?.personsInfo?.Persons;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (personData.length >= 6) {
      setLoading(false);
    }
  }, [personData]);

  return (
    <>
      <section className="containerfcv mt-64">
        <p>Click sobre la foto para ver detalles</p>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : (
        <div className="cards-profiles">
          {personData.map((person) => (
            <Link
              to={`/fondos-china-venezuela/en/profile/${person?.NAME}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <CardActionArea
                  sx={{
                    backgroundColor: "var(--bluedark-color)",
                    color: "#ffffff",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={person?.PHOTO}
                    alt={`foto de ${person?.NAME}`}
                    sx={{
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {person.NAME}
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
      </section>
    </>
  );
}
