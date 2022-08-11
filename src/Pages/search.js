import { Box, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../Components/SearchBar";
import Nav from "../Components/Nav";

export default function Search() {
  return (
    <Box>
      <Nav />
      <Box
        sx={{
          my: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="span"
          sx={{ fontSize: "50px", textAlign: "center" }}
        >
          Find your
          <Typography variant="span" sx={{ color: "#3AAFA9" }}>
            Estate
          </Typography>
          <Typography
            variant="span"
            sx={{
              color: "orange",
              fontSize: 18,
              position: "relative",
              bottom: 18,
            }}
          >
            (UAE)
          </Typography>
          <Typography>
            Search for properties in the United Arab Emirates
          </Typography>
        </Typography>
        <SearchBar />
      </Box>
    </Box>
  );
}
