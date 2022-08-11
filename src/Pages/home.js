import React from "react";
import Nav from "../Components/Nav";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionOne from "../Components/SectionOne";
import About from "../Components/About";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import SimpleMap from "../Components/Map";

const titleFontSize = {
  xs: "13vw",
  sm: "4.3rem",
  md: "5.4rem",
  lg: "6rem",
  xl: "6.5rem",
};

const subTitleFontSize = {
  xs: "4vw",
  sm: "2rem",
  md: "2rem",
  lg: "2rem",
  xl: "2.5rem",
};

export default function Home() {
 
  return (
    <section style={{ position: "relative" }}>
      <Nav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "750px",
          width: "100%",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('images/main-bg.jpg')",
        }}
      >
        <Box sx={{ mt: 30, textAlign: "center" }}>
          <Typography
            sx={{
              color: "common.white",
              fontSize: titleFontSize,
              fontWeight: "bold",
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: { xs: 1, md: 1.4 },
            }}
          >
            Find Your
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontSize: "inherit",
                ml: 2,
              }}
            >
              Home
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: subTitleFontSize,
              color: "primary.contrastText",
              whiteSpace: "nowrap",
            }}
          >
            Explore rentals and sales in the UAE area
          </Typography>

          <Link to="/Search" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: 15, md: 25 },
                mt: 4,
                whiteSpace: "nowrap",
                backgroundColor: "primary.main",
                color: "common.white",
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Find A Home
            </Button>
          </Link>
        </Box>
      </div>
      <SectionOne />
      <SectionTwo />
      <About />
      <SectionThree />
      {/* <SimpleMap /> */}
    </section>
  );
}
