import React from "react";
import Card from "./Card";

export default function EstateContainer({ properties }) {
  console.log(properties);
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginTop: 50,
        marginRight: 10,
        marginLeft: 10,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {properties.map((property, i) => (
        <Card property={property} key={i} />
      ))}
    </div>
  );
}
