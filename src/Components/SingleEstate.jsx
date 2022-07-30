import React from "react";
import { Paper, Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SingleEstate() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Carousel>
          <div>
            <img src="https://picsum.photos/700/400" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400" />
          </div>
        </Carousel>
        <img src="" alt="" />
      </Box>
      <Box sx={{ p: 2 }}>
        <h3>ottawa ON</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores
          ut nam suscipit quam? Quisquam, quam tempore eveniet hic quo
          consectetur? Nobis explicabo ipsam cupiditate rem facere autem
          accusantium voluptates!
        </p>
        <p>3 beds</p>
        <p>2 baths</p>
      </Box>
    </Box>
  );
}
