import React from "react";
import { Box, Typography } from "@mui/material";
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "200px",
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        gap: 7,
      }}
    >
      <Typography sx={{ textAlign: "center", display: "flex", gap: 2 }}>
        <BsTwitter
          size={28}
          sx={{
            cursor: "pointer",
          }}
        />
        <BsFacebook size={28} />
        <BsLinkedin size={28} />
        <BsInstagram size={28} />
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", textAlign: "center" }}>
        Copyright @ Find Your Estate
      </Typography>
    </Box>
  );
}
