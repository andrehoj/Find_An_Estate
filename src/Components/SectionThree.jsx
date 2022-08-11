import React from "react";
import Footer from "../Components/Footer"
import { Box, Typography, Button } from "@mui/material";

export default function SectionThree() {
  return (
    <Box
      sx={{
        display: "flex",
        p: 7,
        gap: 7,
        justifyContent: { xs: "center", md: "start" },
        flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
      }}
    >
      <Box
        component="img"
        src="/images/house-two.avif"
        alt="single house"
        sx={{
          height: {xs: "300px", sm: "600px", md: "800px"},
          maxWidth: { md: "425px", lg: "475px", xl: "575px" },
        }}
      />
      <Box
        sx={{
          maxWidth: "690px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "center", md: "start" },
          mb: { xs: 30, sm: 25, md: 90, lg: 100 },
          gap: 1,
          textAlign: { xs: "center", sm: "center", md: "inherit" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          Fast search's
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "4vw", sm: "1.3rem" } }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          sapiente quis ipsum ex est tempora eius odit.
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "4vw", sm: "1.3rem" } }}>
          Vitae perferendis vero beatae aut impedit officiis eius quo nisi
          numquam dolorum itaque assumenda.
        </Typography>
        <Button
          size="large"
          variant="contained"
          sx={{ color: "common.white", width: "fit-content" }}
        >
          Search Homes
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}
