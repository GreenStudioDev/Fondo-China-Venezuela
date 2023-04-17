import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../../styles/global.css"
import "../../styles/ProfileCardsSection.css"

export function ProfileCardsSection() {
  return (
    <>
    <section className="container mt-64">
      <p>Click sobre la foto para ver detalles</p>  
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
    </section>  
    </>
  );
}
