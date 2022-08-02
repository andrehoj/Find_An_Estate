import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ width: "100%" }}>
      <div
        style={{
          height: "250px",
          width: "100%",
          backgroundImage: `url("images/footer-img.jpg")`,
          backgroundPosition: "cover",
          backgroundRepeat: "repeat-x",
          objectFit: "cover",
          textAlign: "center",
          border: "none",
        }}
      />
      <Typography sx={{ fontSize: "1rem", textAlign: "center" }}>
        Copyright @ Find Your Estate
      </Typography>
    </Box>
  );
}
