import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import ClipLoader from "react-spinners/ClipLoader";
import { Typography } from "@mui/material";

export default function Map({ cords }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAt3SVM3OZL5r1A5gJ_QrbccwzS3J5AvfE",
  });

  if (!isLoaded)
    return (
      <div className="">
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "primary.main", letterSpacing: 5 }}
          >
            Loading.....
          </Typography>
          <ClipLoader size={150} />
        </div>
      </div>
    );

  return (
    <GoogleMap zoom={10} mapContainerClassName="map" center={cords}>
      <Marker position={cords} />
    </GoogleMap>
  );
}
