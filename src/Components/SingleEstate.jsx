import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Paper, Button } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";
import { FaBed, FaBath, FaBorderAll, FaProductHunt } from "react-icons/fa";
import { singleOptions, singleFetchApi } from "../utils/axios";
import Nav from "./Nav";
import ClipLoader from "react-spinners/ClipLoader";
import trimDescription from "../utils/helpers";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { color } from "@mui/system";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={props.cords}>
      {props.isMarkerShown && <Marker position={props.cords} />}
    </GoogleMap>
  ))
);

function Map(props) {
  return <GoogleMap defaultZoom={10} defaultCenter={props.cords} />;
}

const Wrappedmap = withScriptjs(withGoogleMap(Map));

export default function SingleEstate() {
  const [cords, setCords] = useState({ lat: -34.397, lng: 150.644 });
  // const [property, setProperty] = useState();

  // const { state } = useLocation();
  // console.log(state);
  // const { propertyId } = state;

  // singleOptions.params.externalID = propertyId;

  // useEffect(() => {
  //   async function getData() {
  //     const property = await singleFetchApi(singleOptions);
  //     setProperty(property);
  //   }
  //   getData();
  // }, []);

  // console.log(property);

  // if (property) {
  return (
    <div className="">
      <Nav />
      <Box style={{ display: "flex" }}>
        <div style={{ width: "100px", height: "100px" }}>
          <Wrappedmap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBxsida3GZFYx9qFMfknC25N1afiIff1aE&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            cords={cords}
          />
        </div>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            my: 9,
            mr: 3,
            p: 1,
          }}
        >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Ottawa, ON - Gardenway Drive 2057
            {/* {property.location[0].name}, {property.location[1].name} -
            {property.location[2].name} */}
          </Typography>
          <Box>
            <Carousel showIndicators={false}>
              {/* <div>
                <img src={`${property.coverPhoto.url}`} alt="img" />
              </div>
              {property.photos.map((photo) => (
                <div key={photo.orderIndex}>
                  <img src={`${photo.url}`} alt="property" />
                </div>
              ))} */}
              <div>
                <img src="https://picsum.photos/700/300" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/700/300" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/700/300" alt="" />
              </div>
              <div>
                <img src="https://picsum.photos/700/300" alt="" />
              </div>
            </Carousel>
            <img src="" alt="" />
          </Box>
          <Box sx={{ p: 2, mt: -8 }}>
            <Box
              className="styles"
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                flexWrap: { xs: "wrap" },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "primary.main", mr: 2, textAlign: "center" }}
              >
                500 $ - Monthly
                {/* {property.price} $ - {property.rentFrequency} */}
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <img
                  // src={`${product.agency.logo.url}`}
                  src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/27681814/9c7b944fa4344803a4cc318dd6160c78"
                  alt="img"
                  height={"35px"}
                  style={{ borderRadius: "50%" }}
                />
                <Typography variant="body2">
                  Manzel Kareem Real Estate
                  {/* {product.agency.name} */}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "Flex",
                columnGap: 2,
                my: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              {/* <Typography variant="h6">
                Room(s) <FaBed />
              </Typography>
              <Typography variant="h6">
                 Bath(s) <FaBath />
              </Typography>
              <Typography variant="h6">
                {Math.round( * 100) / 100} Sqft <FaBorderAll />
              </Typography> */}
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaBed color="#3AAFA9" /> Rooms: 1{/* {property.rooms}   */}
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaBath color="#3AAFA9" /> Baths: 3{/* {property.baths} */}
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FaBorderAll color="#3AAFA9" /> Sqft:{" "}
                {Math.round(150.434555 * 100) / 100}
                {/* {property.area} */}
              </Typography>
            </Box>
            <Typography>
              <Typography
                variant="h5"
                sx={{ mb: 1 }}
                // className={`${property.state === "active" ? "" : ""}`}
              >
                Status: <span style={{ color: "green" }}>ACTIVE</span>
                {/* {property.state} */}
              </Typography>
              <Typography variant="h6">Description</Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              totam qui tenetur nesciunt adipisci repellendus magnam sunt
              dignissimos ipsam blanditiis assumenda nam aliquam, accusamus,
              suscipit ipsa molestias. Consequatur, quasi modi.
              {/* {trimDescription(property.description)} */}
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button variant="contained" sx={{ color: "common.white" }}>
                Add to Favorites
              </Button>
              <Button variant="outlined">Contact</Button>
            </Box>

            <Typography variant="h4" sx={{ my: 3 }}>
              Additional Information:
              {/* {property.category.map((cat) => (
               {cat.name},
              ))} */}
              {/* {product.furnishingStatus} */}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
  // } else {
  //   return (
  //     <div className="">
  //       <Nav />
  //       <div
  //         style={{
  //           display: "flex",
  //           width: "100vw",
  //           height: "100vh",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           flexDirection: "column",
  //         }}
  //       >
  //         <Typography variant="h2" sx={{ color: "primary.main" }}>
  //           Loading.....
  //         </Typography>
  //         <ClipLoader size={150} />
  //       </div>
  //     </div>
  //   );
  // }
}

{
  /* <div className="">
        <Nav />
        <Box style={{ display: "flex" }}>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxsida3GZFYx9qFMfknC25N1afiIff1aE&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%`, width: "100%" }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%`, width: "100%" }} />}
            isMarkerShown={true}
          />

          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              my: 9,
              mr: 3,
              p: 1,
            }}
          >
            <Typography variant="h4" sx={{ mb: 1 }}>
              {property.location[0].name}, {property.location[1].name} -
              {property.location[2].name}
            </Typography>
            <Box>
              <Carousel showIndicators={false}>
                <div>
                  <img src={`${property.coverPhoto.url}`} alt="img" />
                </div>
                {property.photos.map((photo) => (
                  <div key={photo.orderIndex}>
                    <img src={`${photo.url}`} alt="property" />
                  </div>
                ))}
              </Carousel>
              <img src="" alt="" />
            </Box>
            <Box sx={{ p: 2, mt: -8 }}>
              <Typography variant="h5" sx={{ color: "primary.main" }}>
                {property.price} $ - {property.rentFrequency}
              </Typography>
              <Box sx={{ display: "Flex", columnGap: 2, mt: 1 }}>
                <Typography variant="h6">
                  {property.rooms} Room(s) <FaBed />
                </Typography>
                <Typography variant="h6">
                  {property.baths} Bath(s) <FaBath />
                </Typography>
                <Typography variant="h6">
                  {Math.round(property.area)} Sqft <FaBorderAll />
                </Typography>
              </Box>
              <Typography>
                <Typography variant="h6">Description</Typography>
                {trimDescription(property.description)}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </div> */
}
