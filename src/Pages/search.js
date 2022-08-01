import { Box } from "@mui/material";
import React from "react";
import SearchBar from "../Components/SearchBar";
import Nav from "../Components/Nav";

export default function Search() {
  return (
    <div>
      <Nav />
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", textAlign: "center" }}>
          Find your <span style={{ color: "#3AAFA9" }}>Estate</span>{" "}
        </h1>
        <SearchBar />
      </Box>
    </div>
  );
}
