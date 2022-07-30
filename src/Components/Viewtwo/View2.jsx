import React from "react";
import { Box, Paper, Button } from "@mui/material";

export default function View2() {
  return (
    <Box sx={{ display: "flex", p: 10, gap: 20 }}>
      <img src="/images/house-two.avif" height={"700px"} alt="" />
      <Box sx={{ maxWidth: "690px" }}>
        <Paper sx={{ mt: 10, fontSize: 50, boxShadow: 0, fontWeight: "bold" }}>
          Fast search's
        </Paper>
        <Paper sx={{ mt: 5, fontSize: 24, boxShadow: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          sapiente quis ipsum ex est tempora eius odit.
        </Paper>
        <Paper sx={{ my: 3, fontSize: 24, boxShadow: 0 }}>
          Vitae perferendis vero beatae aut impedit officiis eius quo nisi
          numquam dolorum itaque assumenda.
        </Paper>
        <Button size="large" variant="contained" sx={{ color: "common.white" }}>
          Search Homes
        </Button>
      </Box>
    </Box>
  );
}
