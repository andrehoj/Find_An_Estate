import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const fontSizes = {
  xs: "6vw",
  sm: "2rem",

  lg: "2.4rem",
  xl: "3rem",
};

const fontSizesSubHeading = {
  xs: "5.5vw",
  sm: "1.8rem",

  lg: "1.8rem",
  xl: "2.2rem",
};

export default function View3() {
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        height: "fit",
        justifyContent: "center",
        px: 10,
        py: 3,
        mx: 2,
        gap: 5,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{ fontSize: fontSizes, color: "primary.black", mb: 2 }}
        >
          Exceptional Properties
        </Typography>
        <img
          src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/170860810/3a5d42cc8759482393538d8449303740"
          style={{ width: "90%", height: "auto" }}
          alt="house kitchen"
        />
        <Typography
          variant="body2"
          sx={{
            boxShadow: "none",
            fontWeight: "md",
            whiteSpace: "nowrap",
            lineHeight: 1.6,
            py: 1,
            fontSize: fontSizesSubHeading,
          }}
        >
          One Bed Two Baths House
        </Typography>
        <Link
          to="/Estate"
          state={{ propertyId: "5014874" }}
          style={{
            textDecoration: "none",
            width: "fit-content",
          }}
        >
          <Button
            size="large"
            variant="contained"
            sx={{ color: "common.white", whiteSpace: "nowrap" }}
            endIcon={<ArrowForwardIcon />}
          >
            Details
          </Button>
        </Link>
      </Box>
      <Box sx={{}}>
        <img
          src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/182157323/868b47d5c6194f789a9d79242122e0f5"
          style={{ maxWidth: "100%", height: "auto" }}
          alt="house kitchen"
        />
        <Typography
          variant="body2"
          sx={{
            boxShadow: "none",
            fontWeight: "md",
            whiteSpace: "nowrap",
            py: 1,
            lineHeight: 1.6,
            fontSize: fontSizesSubHeading,
          }}
        >
          One Bed One Bath Apartment
        </Typography>
        <Link
          to="/Estate"
          state={{ propertyId: "5447802" }}
          style={{
            textDecoration: "none",
            width: "fit-content",
          }}
        >
          <Button
            size="large"
            variant="contained"
            sx={{ color: "common.white", whiteSpace: "nowrap" }}
            endIcon={<ArrowForwardIcon />}
          >
            Details
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
