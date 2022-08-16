import React from "react";
import Home from "./Pages/home";
import Search from "./Pages/search";
import Estate from "./Pages/Estate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  palette: {
    common: {
      black: "#1725A",
      white: "#e8e8e8",
    },
    primary: {
      main: "#3AAFA9",
      light: "#DEF2F1",
      dark: "#2B7A78",
      contrastText: "#ababab",
    },
  },
  typography: {
    fontFamily: "Nunito Sans, Georgia, serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="Estate" element={<Estate />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
