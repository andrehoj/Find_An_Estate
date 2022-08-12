import React from "react";
import { Box, Button, Typography } from "@mui/material";

const titleFont = {
  xs: "1rem",
  sm: "1.5rem",
  md: "1.5rem",
  lg: "2.6rem",
  xl: "3rem",
};

const subTitleFont = {
  xs: "",
  sm: "",
  md: "",
  lg: "",
  xl: "1vw",
};

export default function View() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        height: "fit",
        display: "flex",
        justifyContent: "center",
        p: { xs: 5, sm: 5, md: 5, lg: 16 },
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          height: { xs: "", sm: "", md: "", lg: "", xl: "" },
          maxWidth: {
            md: "300px",
            lg: "400px",
            xl: "500px",
          },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mr: -15,
          mt: 5,
          p: 4,
          zIndex: 1,
        }}
      >
        <Typography variant="h3" sx={{ fontSize: titleFont }}>
          Explore home's in Dubai
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: subTitleFont, display: { xs: "none", sm: "block" } }}
        >
          Vitae perferendis vero beatae aut impedit officiis eius quo nisi
          numquam dolorum itaque assumenda.
        </Typography>
      </Box>
      <Box
        component="img"
        alt="The house from the offer."
        src="/images/house-one.avif"
        sx={{
          height: {
            xs: "180px",
            sm: "280px",
            md: "325px",
            lg: "450px",
            xl: "600px",
          },
        }}
      />
    </Box>
  );
}
