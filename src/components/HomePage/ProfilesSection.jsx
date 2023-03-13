import "../../styles/global.css"
import "../../styles/ProfilesSection.css"

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export function ProfilesSection() {
  return (
    <>
    <div className="container-profile">
      <div className="title-profile">
        <h1>Personas de interés</h1>
        <p className="text-p">Click sobre la foto para ver detalles</p>
      </div>
      <div className="cards-profiles">
        <Card className="profile" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        <Card className="profile" sx={{ maxWidth: 345 }}>
          <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
       <Card className="profile" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
       <Card className="profile" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
      </div>
    </div>
    <div className="cta-footer">
      <p className="cta-text">Descarga el documento  de análisis completo</p>
        <button className="cta-btn" role="button">
        Descargar documento
        </button>
      </div>
    </>
  );
}
