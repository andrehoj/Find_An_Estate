import React from "react";
import Card from "./Card";
import { Container } from "@mui/material";

export default function EstateContainer({ properties }) {

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 5,
        my: 10,
      }}
    >
      {properties.map((property, i) => (
        <Card property={property} key={i} />
      ))}
    </Container>
  );
}
