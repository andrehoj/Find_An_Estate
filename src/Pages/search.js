import { Box } from "@mui/material";
import React from "react";
import EstateCard from "../Components/Card";
import SearchBar from "../Components/SearchBar";

export default function Search() {
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchBar /><EstateCard />
    </Box>
  );
}
