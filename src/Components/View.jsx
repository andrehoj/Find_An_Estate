import React from "react";
import { Box, Button } from "@mui/material";

export default function View() {
  return (
    <Box sx={{ bgcolor: "black", height: "fit", display: "flex", p: 16 }}>
      <Box
        sx={{
          bgcolor: "white",
          height: { xs: "", sm: "", md: "", lg: "", xl: "" },
          display: "flex",
          flexDirection: "column",
          mr: -15,
          mt: 5,
          zIndex: 1,
        }}
      >
        <Box sx={{ p: 5 }}>
          <h2 style={{ fontSize: "40px" }}>Fast Search's</h2>
          <p style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            sapiente quis ipsum ex est tempora eius odit.
          </p>
          <p style={{ fontSize: "20px" }}>
            Vitae perferendis vero beatae aut impedit officiis eius quo nisi
            numquam dolorum itaque assumenda.
          </p>
          <Button
            size="large"
            variant="contained"
            sx={{ color: "common.white" }}
          >
            Search Homes
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        alt="The house from the offer."
        src="/images/house-one.avif"
        sx={{ height: { md: "400px", lg: "550px" } }}
      />
    </Box>
  );
}
