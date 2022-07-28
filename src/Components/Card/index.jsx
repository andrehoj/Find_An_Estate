import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { FaDog, FaHeart } from "react-icons/fa";

export default function EstateCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="400"
        image="https://picsum.photos/700/400"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" color="primary.main">
          1500 $
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">2 beds</IconButton>
        <IconButton aria-label="favorite">1 Bath</IconButton>
      </CardActions>
      <CardActions disableSpacing>
        <FaDog aria-label="pets allowed" size={24} />
        <IconButton aria-label="share">
          <FaHeart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
