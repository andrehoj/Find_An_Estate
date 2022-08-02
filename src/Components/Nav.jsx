import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { name: "Home", link: "/" },
  { name: "Search", link: "/Search" },
  { name: "Why Us", link: "/" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [show, setShow] = useState(true);

  let lastScroll = window.scrollY;

  const controllNav = () => {
    if (lastScroll < window.scrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScroll = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNav);
    return () => {
      window.removeEventListener("scroll", controllNav);
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "none" }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "100%",
          color: "#3AAFA9",
        }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          Find Your Esate
          <Typography
            variant="span"
            sx={{
              color: "orange",
              fontSize: 14,
              position: "relative",
              bottom: 10,
            }}
          >
            (UAE)
          </Typography>
        </Typography>
      </Link>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <Link
              key={item.name}
              to={`${item.link}`}
              style={{
                textDecoration: "none",
                width: "100%",

                color: "#3AAFA9",
              }}
            >
              <ListItemButton sx={{}}>
                <ListItemText
                  primary={item.name}
                  sx={{ fontSize: 10, textAlign: "center" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: `${show ? "flex" : "none"} ` }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon className="hamburger" sx={{ color: "common.white" }} />
          </IconButton>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "block" },
                fontSize: 35,
                color: "common.white",
              }}
            >
              Find Your Estate
              <Typography
                variant="span"
                sx={{
                  color: "orange",
                  fontSize: 18,
                  position: "relative",
                  bottom: 14,
                }}
              >
                (UAE)
              </Typography>
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={`${item.link}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    mr: 5,
                    display: "inline",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
