import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../../styles/global.css";
import "../../styles/ProfileCardsSection.css";
import { PersonsInfo } from "../../api";
import { Link } from "react-router-dom";

export function ProfileCardsSection() {
  const personData = PersonsInfo().personsInfo.Persons;

  return (
    <>
      <section className="container mt-64">
        <p>Click sobre la foto para ver detalles</p>
        <div className="cards-profiles">
          {personData.map((person) => (
            <Link to={ `/profile/${person.NAME}`} style={{textDecoration: "none"}}>
              <Card className="profile" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="270"
                    image={person.PHOTO}
                    alt={`foto de ${person.NAME}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {person.NAME}
                    </Typography>
                    <Typography variant="body2">
                      {person.DESCRIPTION_SPA}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
