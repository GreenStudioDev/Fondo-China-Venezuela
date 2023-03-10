import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export function ProfilesSection() {
  return (
    <>
      <h1>Personas de interés</h1>
      <p>Click sobre la foto para ver detalles</p>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
