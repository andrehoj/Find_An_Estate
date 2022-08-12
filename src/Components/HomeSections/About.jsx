import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function About() {
  return (
    <Box
      variant="section"
      sx={{
        height: "fit",
        p: {
          xs: 0,
          sm: 5,
          md: 10,
          lg: 10,
          xl: 10,
        },
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "common.white",
          height: "fit",
          width: "fit",
          display: "flex",
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "start",
            xl: "start",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            width: { md: "100%" },
            display: "flex",
            height: "60%",
            flexShrink: 2,
            justifyContent: { md: "md", lg: "center" },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "start",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "start",
            },
            flexDirection: "column",
            gap: 3,
            p: 4,
          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: "4vw", sm: "4vw" } }}>
            What We Do
          </Typography>
          <Typography
            variant="body1"
            sx={{
              px: { xs: 0, sm: 2, md: 5, lg: 0, xl: 0 },
              fontSize: {
                xs: "3.5vw",
                sm: "3vw",
                md: "2vw",
                lg: "1.1vw",
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            cupiditate eum voluptatem sequi deleniti placeat quaerat consectetur
            consequatur optio neque perferendis dolores, unde illum molestias
            quis voluptatibus magni velit eaque. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Omnis, alias nesciunt, quas quibusdam
            commodi.
          </Typography>
          <Link component="button" variant="body2" sx={{ fontSize: "20px" }}>
            Read More
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: "100%", lg: "50%" },
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              component="img"
              src="/images/photo-grid-one.jpeg"
              sx={{ width: "50%", height: "auto" }}
            />

            <Box
              component="img"
              src="/images/photo-grid-two.jpeg"
              sx={{ width: "50%", height: "auto" }}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              component="img"
              src="/images/photo-grid-three.jpeg"
              sx={{ width: "50%", height: "auto" }}
            />

            <Box
              component="img"
              src="/images/photo-grid-four.jpeg"
              sx={{ width: "50%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
