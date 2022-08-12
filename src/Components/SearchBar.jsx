import React, { useState } from "react";
import { filterData, defaultData } from "../utils/filterData";
import {
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Fab,
  Menu,
  Box,
  Typography,
} from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { options, fetchApi } from "../utils/axios";
import EstateContainer from "./EstateInfo/EstateContainer";

export default function SearchBar() {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const [defaultFormData, setDefaultFormData] = useState({
    purpose: "",
    priceMax: 0,
    priceMin: 0,
    bathsMin: "",
    roomsMin: "",
  });

  function handleChange({ target }) {
    console.log(target);
    setDefaultFormData({ ...defaultFormData, [target.name]: target.value });
  }

  const [moreFilters, setMoreFilters] = useState(filterData);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  async function handleSubmit() {
    try {
      setLoading(true);
      fetchApi(options, defaultFormData, defaultData).then((results) => {
        setLoading(false);
        setProperties(results.hits);
      });
    } catch (error) {
      setLoading(false);
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
                  labelId="label"
                  id="select"
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  name={filter.queryName}
                >
                  {filter.items.map((item) => (
                    <MenuItem key={item.name} value={item.value}>
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

      {loading ? (
        <div className="">
          <div
            style={{
              display: "flex",
              width: "100vw",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "primary.main", letterSpacing: 5 }}
            >
              Loading.....
            </Typography>
            <ClipLoader size={150} />
          </div>
        </div>
      ) : properties.length ? (
        <EstateContainer properties={properties} />
      ) : (
        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "30px",
              textAlign: "center",
              mb: -8,
            }}
          >
            Popular Homes
          </Typography>
          <EstateContainer properties={placeHolderProperties} />
        </Box>
      )}

      {/* <EstateContainer /> */}
    </div>
  );
}

const placeHolderProperties = [
  {
    purpose: "for-rent",
    price: "13000",
    rentFrequency: "monthly",
    externalID: "5665626",
    location: [
      {
        name: "UAE",
      },
      {
        name: "",
      },
      {
        name: "Dubai",
      },
      {
        name: "Downtown Dubai",
      },
    ],
    rooms: "1",
    baths: "1",
    area: "73.57920768000001",
    coverPhoto: {
      externalID: "117105732",
      url:
        "https://bayut-production.s3.eu-central-1.amazonaws.com/image/181052265/28afb11642f140c0bf880ee3e834e27b",
    },
  },

  {
    purpose: "for-rent",
    price: "8000",
    rentFrequency: "monthly",
    externalID: "5562934",
    location: [
      {
        name: "UAE",
      },
      {
        name: "",
      },
      {
        name: "Dubai",
      },
      {
        name: "Jumeirah Beach Residence (JBR)",
      },
    ],
    rooms: "0",
    baths: "1",
    area: "66.23986752",
    coverPhoto: {
      externalID: "185910348",
      url:
        "https://bayut-production.s3.eu-central-1.amazonaws.com/image/185910348/d3bd0023a7d5403b88f822c026569e73",
    },
  },

  {
    purpose: "for-rent",
    price: "14250",
    rentFrequency: "monthly",
    externalID: "5447802",
    location: [
      {
        name: "UAE",
      },
      {
        name: "",
      },
      {
        name: "Dubai",
      },
      {
        name: "Downtown Dubai",
      },
    ],
    rooms: "1",
    baths: "1",
    area: "92.90304",
    coverPhoto: {
      externalID: "115122248",
      url:
        "https://bayut-production.s3.eu-central-1.amazonaws.com/image/182157323/868b47d5c6194f789a9d79242122e0f5",
    },
  },
];

//Optional chaining on line 152 caused this error...

// ./src/Components/SearchBar/index.jsx 303:20
// Module parse failed: Unexpected token (303:20)
// You may need an appropriate loader to handle this file type.
// |         columnNumber: 21
// |       }
// >     }, filter.items?.map(function (item) {
// |       return /*#__PURE__*/React.createElement(MenuItem, {
// |         key: item.name,
