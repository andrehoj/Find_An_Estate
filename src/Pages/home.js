import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import View from "../Components/View";
import View2 from "../Components/View2";
import View3 from "../Components/View3";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <Nav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "850px",
          width: "100%",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('images/main-bg.jpg')",
        }}
      >
        <Box sx={{ mx: 5, textAlign: "center" }}>
          <Typography
            sx={{
              color: "common.white",
              fontSize: { md: "5rem", xs: "3.5rem" },
              fontWeight: "bold",
              textAlign: "center",
              display: "inline-block",
              whiteSpace: "nowrap",
              mb: 1,
              lineHeight: { xs: 1, md: 1.4 },
            }}
          >
            Find Your
            <Typography
              sx={{
                display: "inline-block",
                color: "primary.main",
                fontSize: { md: "5rem", xs: "3.5rem" },
                ml: 2
              }}
            >
              Home
            </Typography>
          </Typography>

          <Typography
            sx={{
              mt: -3,
              fontSize: { md: "1.7rem", xs: "1.3rem" },
              color: "primary.contrastText",
            }}
          >
            Explore rentals, sales and more...
          </Typography>

          <Link to="/Search" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: 15, md: 25 },
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
      <View3 />
      <View />
      <View2 />
      <Footer />
    </section>
  );
}
