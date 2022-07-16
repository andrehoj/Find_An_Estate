import React from "react";
import {Image} from "./main-bg";
import { Paper } from "@mui/material";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

export default function Home() {
  return <Paper style={styles.paperContainer}></Paper>;
}
