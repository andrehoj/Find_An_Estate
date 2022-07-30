import React from "react";
import EstateCard from "./Card";

export default function EstateContainer() {
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
      <EstateCard />
      <EstateCard />
      <EstateCard />
      <EstateCard />
    </div>
  );
}
