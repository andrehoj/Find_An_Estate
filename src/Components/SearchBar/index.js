import React, { useState } from "react";
import { filterData, defaultData } from "../../utils/filterData";
import {
  TextField,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Fab,
  Menu,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function SearchBar() {
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [baths, setBaths] = useState("Any");
  const [beds, setBeds] = useState("Any");
  const [filters, setFilters] = useState(filterData);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChange({ target }) {
    switch (target.name) {
      case "minPrice":
        setMinPrice(target.value);
        break;
      case "maxPrice":
        setMaxPrice(target.value);
        break;
      case "baths":
        setBaths(target.value);
        break;
      default:
        setBeds(target.value);
    }
  }

  return (
    <Box
      sx={{
        maxWidth: "75%",
        p: 2,
        borderRadius: "16px",
        boxShadow: "5px 5px #30eded",
      }}
    >
      <Grid container alignItems="center" justifyContent={"center"} spacing={3}>
        <Grid item>
          <TextField
            id="standard-basic"
            label="City, Province"
            variant="standard"
          />
        </Grid>
        {defaultData.map((filter) => (
          <Grid item key={filter.placeholder}>
            <InputLabel id="label">{filter.placeholder}</InputLabel>
            <Select
              sx={{ width: 100, height: 30 }}
              labelId="label"
              id="select"
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              {filter.items.map((item) => (
                <MenuItem key={item.name} value={item.name}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        ))}

        <Grid item sx={{ alignSelf: "flex-end" }}>
          <Button variant="outlined" href="#outlined-buttons">
            <SearchIcon />
            Search
          </Button>
        </Grid>
        <Grid item>
          <Fab
            variant="extended"
            onClick={handleClick}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <FilterListIcon sx={{ mr: 1 }} />
            More Filters
          </Fab>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Grid
              container
              style={{ width: 650 }}
              spacing={5}
              justifyContent="center"
            >
              {filters.map((filter) => (
                <Grid item align="center">
                  <InputLabel>{filter.placeholder}</InputLabel>
                  <Select sx={{ width: 100, height: 30 }}>
                    {filter.items?.map((item) => (
                      <MenuItem key={item.name}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </Grid>
              ))}
              <Grid item xs={12} align="center">
                <Button variant="outlined" href="#outlined-buttons">
                  <SearchIcon />
                  Search
                </Button>
              </Grid>
            </Grid>
          </Menu>
        </Grid>
      </Grid>
    </Box>
  );
}
