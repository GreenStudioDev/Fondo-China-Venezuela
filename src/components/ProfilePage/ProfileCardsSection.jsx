import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function ProfileCardsSection() {
  return (
    <>
      <p>Click sobre la foto para ver detalles</p>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="foto-persona"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proyecto Integral de Desarrollo Agrario Socialista Tiznados
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
