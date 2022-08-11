import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Paper, Button } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";
import { singleOptions, singleFetchApi } from "../utils/axios";
import Nav from "./Nav";
import ClipLoader from "react-spinners/ClipLoader";
import { trimDescription, titleCase } from "../utils/helpers";

export default function SingleEstate() {
  const [property, setProperty] = useState();

  const { state } = useLocation();

  const { propertyId } = state;

  singleOptions.params.externalID = propertyId;

  useEffect(() => {
    async function getData() {
      const property = await singleFetchApi(singleOptions);
      setProperty(property);
    }
    getData();
  }, []);

  if (property) {
    return (
      <div className="">
        <Nav />
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            my: 15,
            mx: 5,
            p: 1,
            maxWidth: "1000px",
          }}
        >
          <Box>
            <Carousel showIndicators={false}>
              <div style={{ height: "500px" }}>
                <img src={`${property.coverPhoto.url}`} alt="img" />
              </div>
              {property.photos.map((photo) => (
                <div key={photo.orderIndex}>
                  <img src={`${photo.url}`} alt="property" />
                </div>
              ))}
            </Carousel>
          </Box>
          <Box sx={{ p: 2, mt: -1 }}>
            <Box className="">
              <Typography
                variant="h4"
                sx={{
                  my: 3,
                  fontSize: {
                    xs: "20px",
                    sm: "30px",
                    md: "35px",
                    lg: "45px",
                    xl: "50px",
                  },
                }}
              >
                {property.location[1].name}, {property.location[2].name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "space-between" },
                  flexWrap: "wrap",
                  gap: 4,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "primary.main", mr: 2, textAlign: "center" }}
                >
                  ${property.price} - {titleCase(property.rentFrequency)}
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                  <img
                    src={`${property.agency.logo.url}`}
                    alt="img"
                    height={"35px"}
                    style={{ borderRadius: "50%" }}
                  />
                  <Typography variant="body2">
                    {property.agency.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "Flex",
                columnGap: 2,
                my: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaBed color="#3AAFA9" />
                {property.rooms}
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaBath color="#3AAFA9" />
                {property.baths}
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaBorderAll color="#3AAFA9" /> Sqft:
                {Math.round(property.area * 100) / 100}
              </Typography>
            </Box>
            <Typography>
              <Typography
                variant="h5"
                sx={{ mb: 1, textAlign: { xs: "center", sm: "left" } }}
                className={`${property.state === "active" ? "" : ""}`}
              >
                Status:
                <span
                  style={{
                    color: `${property.state === "active" ? "green" : "red"}`,
                    ml: 2,
                  }}
                >
                  {titleCase(property.state)}
                </span>
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: {
                  xs: "center",
                  sm: "space-between",
                  md: "space-between",
                },
              }}
            >
              <Button variant="contained" sx={{ color: "common.white" }}>
                Add to Favorites
              </Button>
              <Button variant="outlined">Contact</Button>
            </Box>
            <Typography
              variant="h5"
              sx={{ my: 3, textAlign: { xs: "center", sm: "left" } }}
            >
              Additional Information:
            </Typography>
            <Typography variant="h6" sx={{ display: "inline", mr: 1 }}>
              Category:
            </Typography>
            {property.category.map((cat, i) => (
              <Typography variant="h6" sx={{ display: "inline", ml: 2 }}>
                 {i == property.category.length ? cat.name : cat.name} 
              </Typography>
            ))}
            <Typography variant="h6">
            Furnished:  {property.furnishingStatus ? " Yes" : " No"}
            </Typography>
            <Box>
              <Typography variant="h6">Description:</Typography>
              <Typography variant="body1">
                {trimDescription(property.description)}
              </Typography>
            </Box>
          </Box>
        </Paper>
        {/* </Box> */}
      </div>
    );
  } else {
    return (
      <div className="">
        <Nav />
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{ backgroundColor: "primary.main", letterSpacing: 5 }}
          ></Typography>
          <ClipLoader size={150} />
        </div>
      </div>
    );
  }
}
