import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const fontSizes = {
  xs: "6vw",
  sm: "2rem",
 
  lg: "2.4rem",
  xl: "3rem",
};

export default function View3() {
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        maxWidth: "fit",
        height: "fit",
        justifyContent: "center",
        px: 10,
        py: 5,
        gap: 5,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Box sx={{ maxWidth: "fit" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: fontSizes, color: "primary.main", mb: 2 }}
        >
          View Home's near you
        </Typography>
        <img
          src="/images/house-three.avif"
          style={{ width: "100%", height: "auto" }}
          alt="house kitchen"
        />
        <Typography
          variant="h5"
          sx={{
            boxShadow: "none",
            fontWeight: "md",
            whiteSpace: "nowrap",
            lineHeight: 1.6,
            py: 1,
          }}
        >
          4 beds 3 baths house in Toronto
        </Typography>
        <Button
          size="large"
          variant="contained"
          sx={{ color: "common.white", whiteSpace: "nowrap" }}
          endIcon={<ArrowForwardIcon />}
        >
          View now
        </Button>
      </Box>
      <Box sx={{}}>
        <img
          src="/images/house-four.avif"
          style={{ maxWidth: "100%", height: "auto" }}
          alt="house kitchen"
        />
        <Typography
          variant="h5"
          sx={{
            boxShadow: "none",
            fontWeight: "md",
            whiteSpace: "nowrap",
            py: 1,
            lineHeight: 1.6,
          }}
        >
          4 beds 3 baths house in Ottawa
        </Typography>
        <Button
          size="large"
          variant="contained"
          sx={{ color: "common.white", whiteSpace: "nowrap" }}
          endIcon={<ArrowForwardIcon />}
        >
          View now
        </Button>
      </Box>
    </Box>
  );
}
