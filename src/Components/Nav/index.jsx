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
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { name: "About", link: "/" },
  { name: "Start searching", link: "/Search" },
  { name: "why us", link: "/" },
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
      <Typography variant="h6" sx={{ my: 2 }}>
        Find Your Esate
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton sx={{}}>
              <ListItemText primary={item.name} sx={{ fontSize: 10 }} />
            </ListItemButton>
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
            Find Your Esate
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link to={`${item.link}`} style={{ textDecoration: "none" }}>
                <Button
                  key={item.name}
                  sx={{ color: "#fff", fontSize: 18, mr: 5 }}
                >
                  {item.name}
                </Button>
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
