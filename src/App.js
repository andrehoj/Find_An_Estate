import React from "react";
import SearchBar from "./Components/SearchBar";
import Home from "./Pages/home";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    common: {
      black: "#1725A",
      white: "#FEFFFF",
    },
    primary: {
      main: "#3AAFA9",
      light: "DEF2F1",
      dark: "#2B7A78",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <SearchBar />
    </ThemeProvider>
  );
}
