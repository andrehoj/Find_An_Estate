import * as React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";
import {
  Button,
  Box,
  Typography,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import { trimDescription, titleCase } from "../utils/helpers";

export default function EstateCard({ property }) {
  console.log(property)
  return (
    <Card sx={{ maxWidth: "550px" }}>
      <CardMedia
        component="img"
        sx={{ height: "400px", maxWidth: "550px" }}
        image={`${property.coverPhoto.url}`}
        alt="property cover"
      />
      <CardContent
        sx={{ p: 1, display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Typography variant="h4" sx={{ color: "primary.main", fontSize: 30 }}>
           {property.location[2].name}, {property.location[3].name}
        </Typography>

        <Typography variant="h4">
          ${property.price} {titleCase(property.rentFrequency)}
        </Typography>

        <Typography variant="h4">{property.purpose}</Typography>

        <Typography
          variant="h5"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaBed color="#3AAFA9" />
            Rooms(s): {property.rooms}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaBath color="#3AAFA9" /> Bath(s): {property.baths}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaBorderAll color="#3AAFA9" />
            sqft {Math.round(property.area * 100) / 100}
          </Box>
        </Typography>
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            maxWidth: "80%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        ></Typography>
        <Link
          to="/Estate"
          state={{ propertyId: property.externalID }}
          style={{
            textDecoration: "none",
            width: "fit-content",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              color: "common.white",
            }}
          >
            View Estate
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
