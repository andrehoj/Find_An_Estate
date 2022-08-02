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
import trimDescription from "../utils/helpers";

export default function EstateCard({ property }) {
  return (
    <Card sx={{ maxWidth: "550px" }}>
      <CardMedia
        component="img"
        sx={{ height: "400px", maxWidth: "550px" }}
        //image={`${property.coverPhoto.url}`}
        image={`https://picsum.photos/575/300`}
        alt="property cover"
      />
      <CardContent
        sx={{ p: 1, display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Typography variant="h4" sx={{ color: "primary.main", fontSize: 30 }}>
          Ottawa, ON - SunShine Drive 2924
        </Typography>

        <Typography variant="h5">
          {/* ${property.price} {property.rentFrequency} */}
          $590 Monthly - For Rent
          {/* {property.purpose} */}
        </Typography>

        <Typography
          variant="h5"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaBed color="#3AAFA9" />
            {/*Rooms: {property.rooms}*/}
            Room(s): 2
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaBath color="#3AAFA9" /> {/*Bath(s): {property.baths}  */}
            Bath(s): 5
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaBorderAll color="#3AAFA9" />
            {/*  {Math.round(property.area * 100) / 100} */}
            342.342 Sqft
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
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam
          qui tenetur nesciunt adipisci repellendus magnam sunt dignissimos
          ipsam blanditiis assumenda nam aliquam, accusamus, suscipit ipsa
          molestias. Consequatur, quasi modi.
          {/* {trimDescription(property.description)} */}
        </Typography>
        <Link
          to="/Estate"
          // state={{ propertyId: property.externalID }}
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
