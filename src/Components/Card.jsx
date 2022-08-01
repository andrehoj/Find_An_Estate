import * as React from "react";
import { Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FaDog, FaBed, FaBath, FaBorderAll } from "react-icons/fa";

export default function EstateCard({ property }) {
  console.log(property);
  return (
    <Link to="/Estate" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 600 }} propertyid={`${property.id}`}>
        <CardMedia
          component="img"
          height="400"
          image={`${property.coverPhoto.url}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h4" color="primary.main">
            ${property.price} {property.rentFrequency}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {property.rooms} rooms
            <FaBed />
          </IconButton>
          <IconButton aria-label="favorite">
            {property.baths} baths
            <FaBath />
          </IconButton>
          <IconButton>
            {Math.round(property.area)} sqft
            <FaBorderAll />
          </IconButton>
        </CardActions>
        <CardActions disableSpacing>
          <FaDog aria-label="pets allowed" size={24} />
        </CardActions>
      </Card>
    </Link>
  );
}
