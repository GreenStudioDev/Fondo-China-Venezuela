import { Link } from "react-router-dom";
import { PersonsInfo } from "../../api";
import "../../styles/global.css"
import "../../styles/ProfilesSection.css"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";



export function ProfilesSection() {

const personsData = PersonsInfo().personsInfo


  return (
    <>
    <div className="container-profile mt-64">
      <div className="title-profile">
        <h1>Personas de interés</h1>
        <p className="text-p">Click sobre la foto para ver detalles</p>
      </div>
      <div className="card-profile">
        {personsData.Persons.filter((person) => person.P_ID < 6).map((person) => (
        <Card key={person.P_ID} className="profile-home" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image={person.PHOTO}
            alt={`Foto de ${person.NAME}`}
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
        ))}
      </div>
      <Link to="/profile">
      <button className="cta-btn-small">
        Ver todos
        </button>
      </Link>
    </div>
    {/* <div className="cta-footer">
      <p className="cta-text">Descarga el documento  de análisis completo</p>
        <button className="cta-btn">
        Descargar documento
        </button>
      </div> */}
    </>
  );
}
