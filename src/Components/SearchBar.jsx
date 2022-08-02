import React, { useState } from "react";
import { filterData, defaultData } from "../utils/filterData";
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

import { options, fetchApi } from "../utils/axios";

import EstateContainer from "./EstateContainer";

export default function SearchBar() {
  const [properties, setProperties] = useState([]);

  const [defaultFormData, setDefaultFormData] = useState({
    purpose: "",
    maxPrice: 0,
    minPrice: 0,
    baths: "any",
    beds: "any",
  });

  function handleChange({ target }) {
    setDefaultFormData({ ...defaultFormData, [target.name]: target.value });
    console.log(defaultFormData);
  }

  const [moreFilters, setMoreFilters] = useState(filterData);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  async function handleSubmit() {
    console.log(defaultFormData);
    try {
      // fetchApi(options).then((results) => {
      //   setProperties(results.hits);
      // });
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function searchProperties(filterValues) {}

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          maxWidth: "70%",
          p: 2,
          borderRadius: "16px",
          boxShadow: "5px 5px #30eded",
          bgcolor: "common.white",
        }}
      >
        <form>
          <Grid
            container
            alignItems="center"
            justifyContent={"center"}
            spacing={3}
          >
            {defaultData.map((filter) => (
              <Grid item key={filter.placeholder}>
                <InputLabel id="label">{filter.placeholder}</InputLabel>
                <Select
                  sx={{ width: 100, height: 30 }}
                  value={defaultFormData[filter.queryName]}
                  labelId="label"
                  id="select"
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  name={filter.queryName}
                >
                  {filter.items.map((item) => (
                    <MenuItem key={item.name} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            ))}

            <Grid item sx={{ alignSelf: "flex-end" }}>
              <Button
                variant="outlined"
                href="#outlined-buttons"
                onClick={handleSubmit}
              >
                <SearchIcon />
                Search
              </Button>
            </Grid>

            <Grid item xs={12} textAlign="center">
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
                  p={1}
                  container
                  spacing={3}
                  justifyContent="center"
                  maxWidth={525}
                >
                  {moreFilters.map((filter) => (
                    <Grid
                      item
                      justifyContent={"center"}
                      key={filter.placeholder}
                    >
                      <InputLabel>{filter.placeholder}</InputLabel>
                      <Select
                        onChange={(e) => {
                          searchProperties({
                            [filter.queryName]: e.target.value,
                          });
                        }}
                        sx={{ width: 100, height: 30 }}
                      >
                        {filter.items.map((item) => (
                          <MenuItem key={item.name}>{item.name}</MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  ))}
                  <Grid item xs={12} align="center">
                    <Button
                      variant="outlined"
                      href="#outlined-buttons"
                      type="submit"
                      onSubmit={setMoreFilters}
                    >
                      <SearchIcon />
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Menu>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* {properties ? (
        <EstateContainer properties={properties} />
      ) : (
        <EstateContainer />
      )} */}
      <EstateContainer />
    </div>
  );
}

//Optional chaining on line 152 caused this error...

// ./src/Components/SearchBar/index.jsx 303:20
// Module parse failed: Unexpected token (303:20)
// You may need an appropriate loader to handle this file type.
// |         columnNumber: 21
// |       }
// >     }, filter.items?.map(function (item) {
// |       return /*#__PURE__*/React.createElement(MenuItem, {
// |         key: item.name,
