import React from "react";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// requires a loader
import { Carousel } from "react-responsive-carousel";
// import { GoogleMap, withScriptjs } from "react-google-maps";
// import withGoogleMap from "react-google-maps/lib/withGoogleMap";

// function Map() {
//   return (
//     <GoogleMap
//       googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function SingleEstate() {
  return (
    <div>
      <div style={{ height: "100%", width: "100%" }}>
        {/* <WrappedMap
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        /> */}
      </div>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Carousel>
            <div>
              <img src="https://picsum.photos/700/400" alt='img' />
            </div>
            <div>
              <img src="https://picsum.photos/700/400" alt='img' />
            </div>
            <div>
              <img src="https://picsum.photos/700/400" alt='img' />
            </div>
            <div>
              <img src="https://picsum.photos/700/400" alt='img' />
            </div>
          </Carousel>
          <img src="" alt="" />
        </Box>
        <Box sx={{ p: 2 }}>
          <h3>ottawa ON</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            dolores ut nam suscipit quam? Quisquam, quam tempore eveniet hic quo
            consectetur? Nobis explicabo ipsam cupiditate rem facere autem
            accusantium voluptates!
          </p>
          <p>3 beds</p>
          <p>2 baths</p>
        </Box>
      </Box>
    </div>
  );
}
