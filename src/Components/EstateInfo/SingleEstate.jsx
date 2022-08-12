import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";
import { singleOptions, singleFetchApi } from "../../utils/axios";
import Nav from "../Nav";
import ClipLoader from "react-spinners/ClipLoader";
import { trimDescription, titleCase } from "../../utils/helpers";
import Map from "./Map";
import { padding } from "@mui/system";

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

   function handleFavorites() {
  //   coverPhoto = property.coverPhoto.url;
  //   propertyTitle = property.location[1].name.concat(
  //     property.location[2].name
  //   );
  //   localStorage.setItem("favoriteProperties", { coverphoto, property });
   }

  if (property) {
    return (
      <div className="">
        <Nav />
        <Grid
          container
          spacing={2}
          sx={{
            paddingX: { xs: 5, sm: 5, md: 5, lg: 10 },
            maxHeight: "50px",
            paddingTop: 10,
          }}
        >
          <Grid item xs={12} lg={7}>
            <Map cords={property.geography} />
          </Grid>

          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <Carousel showIndicators={false}>
                  <div>
                    <img src={`${property.coverPhoto.url}`} alt="img" />
                  </div>
                  {property.photos.map((photo) => (
                    <div key={photo.orderIndex}>
                      <img src={`${photo.url}`} alt="property" />
                    </div>
                  ))}
                </Carousel>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ p: 2, mt: -1 }}>
              <Box className="">
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "space-between" },
                    my: 3,
                    fontSize: {
                      xs: "30px",
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
                  justifyContent: { xs: "center", sm: "start", md: "start" },
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
                <Button
                  variant="contained"
                  sx={{ color: "common.white" }}
                  onClick={handleFavorites}
                >
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
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: {
                    xs: "center",
                    sm: "start",
                    md: "start",
                    lg: "start",
                    xl: "start",
                  },
                  mb: 3,
                }}
              >
                <Typography variant="h6">Categories:</Typography>
                {property.category.map((cat, i) => (
                  <Typography variant="h6">
                    {i == property.category.length ? cat.name : cat.name}
                  </Typography>
                ))}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "start",
                    md: "start",
                    lg: "start",
                    xl: "start",
                  },
                  mb: 3,
                }}
              >
                Furnished: {property.furnishingStatus ? " Yes" : " No"}
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: {
                      xs: "center",
                      sm: "start",
                      md: "start",
                      lg: "start",
                      xl: "start",
                    },
                  }}
                >
                  Description:
                </Typography>
                <Typography variant="body1">
                  {trimDescription(property.description)}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
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
