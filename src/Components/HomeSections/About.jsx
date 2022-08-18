import React from "react";
import { Box, Typography, Link } from "@mui/material";
import gridImageOne from "./images/photo-grid-one-min.jpeg";
import gridImageTwo from "./images/photo-grid-two-min.jpeg";
import gridImageThree from "./images/photo-grid-three-min.jpeg";
import gridImageFour from "./images/photo-grid-four-min.jpeg";

export default function About() {
  return (
    <Box
      variant="section"
      sx={{
        height: "fit",
        p: {
          xs: 0,
          sm: 5,
          md: 10,
          lg: 10,
          xl: 10,
        },
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "common.white",
          height: "fit",
          width: "fit",
          display: "flex",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            width: { md: "100%" },
            display: "flex",
            height: "60%",
            flexShrink: 2,
            justifyContent: { md: "md", lg: "center" },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "start",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "start",
            },
            flexDirection: "column",
            gap: 3,
            p: 4,
          }}
        >
          <Typography variant="h3" sx={{  fontWeight: "bold", fontSize: { xs: "4vw", sm: "4vw" } }}>
            What We Do
          </Typography>
          <Typography
            variant="body1"
            sx={{
              px: { xs: 0, sm: 2, md: 5, lg: 0, xl: 0 },
              fontSize: {
                xs: "3.5vw",
                sm: "3vw",
                md: "2vw",
                lg: "1.1vw",
              },
            }}
          >
            We created this online destination with a goal of being the ultimate
            Dubai real estate site for buyers and renters. Our site features the
            most recent Dubai area listings that are updated on a daily basis
            and includes everything from commercial property, rentals, vacant
            land, townhouses, condos, single family homes for sale and more.
          </Typography>
          <Link component="button" variant="body2" sx={{ fontSize: "20px" }}>
            Read More
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", lg: "50%" },
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              component="img"
              src={gridImageOne}
              sx={{ width: "50%", height: "auto" }}
            />

            <Box
              component="img"
              src={gridImageTwo}
              sx={{ width: "50%", height: "auto" }}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              defer
              component="img"
              src={gridImageThree}
              sx={{ width: "50%", height: "auto" }}
            />

            <Box
              component="img"
              src={gridImageFour}
              sx={{ width: "50%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
