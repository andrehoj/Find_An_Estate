import React from "react";
import { Box, Typography, Button } from "@mui/material";
import image from "./images/house-two.avif";
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
        src={image}
        alt="single house"
        sx={{
          height: { xs: "300px", sm: "600px", md: "800px" },
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
          mb: { xs: 30, sm: 25, md: 79, lg: 78 },
          gap: 1,
          textAlign: { xs: "center", sm: "center", md: "inherit" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            mt: { md: "0px", lg: "80px" },
          }}
        >
          Fast search's
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "4vw", sm: "1.3rem" } }}
        >
          We want to make your experience searching for apartments and homes for
          sale and rent in Dubai as easy as possible, which is why all of the
          real estate listings on our site can be searched and browsed in a
          variety of filters. We have your traditional search options along with
          an Interactive Map Search that lets you visually see properties that
          match your search criteria on a map.
        </Typography>

        <Button
          size="large"
          variant="contained"
          sx={{ color: "common.white", width: "fit-content" }}
        >
          Search Homes
        </Button>
      </Box>
    </Box>
  );
}
