import React from "react";
import { Box, Paper, Button, CardHeader } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function View3() {
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        maxWidth: "fit",
        height: "fit",
        justifyContent: "center",
        alignItems: "center",
        p: 10,
        gap: 15,
      }}
    >
      <Box sx={{ mt: -10, maxWidth: "fit" }}>
        <img
          src="/images/house-three.avif"
          style={{ width: "100%", height: "auto" }}
          alt=""
        />
        <Paper
          sx={{
            boxShadow: "none",
            fontWeight: "md",
            whiteSpace: "nowrap",
            fontSize: { xs: 28, lg: 38 },
            lineHeight: 1.6,
            py: 1,
          }}
        >
          4 beds 3 baths house in Toronto
        </Paper>
        <Button
          size="large"
          variant="contained"
          sx={{ color: "common.white", whiteSpace: "nowrap" }}
          endIcon={<ArrowForwardIcon />}
        >
          View now
        </Button>
      </Box>
      <Box sx={{ mt: 10 }}>
        <img
          src="/images/house-four.avif"
          style={{ maxWidth: "100%", height: "auto" }}
          alt=""
        />
        <Paper
          sx={{
            boxShadow: "none",
            fontWeight: "md",
            whiteSpace: "nowrap",
            fontSize: { xs: 28, lg: 38 },
            py: 1,
            lineHeight: 1.6,
          }}
        >
          4 beds 3 baths house in Ottawa
        </Paper>
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
