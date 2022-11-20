import React, { useState } from "react";
import { defaultData } from "../utils/filterData";
import {
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
import SearchIcon from "@mui/icons-material/Search";
import { options, fetchApi } from "../utils/axios";
import EstateContainer from "./EstateInfo/EstateContainer";

export default function SearchBar() {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const [defaultdivData, setDefaultdivData] = useState({
    purpose: "",
    priceMax: 0,
    priceMin: 0,
    bathsMin: "",
    roomsMin: "",
  });

  function handleChange({ target }) {
    setDefaultdivData({ ...defaultdivData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      fetchApi(options, defaultdivData, defaultData).then((results) => {
        setLoading(false);

        console.log(results);

        setProperties(results.hits);
      });
    } catch (error) {
      setLoading(false);
    }
  }

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
        <div>
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
                type="button"
                variant="outlined"
                href="#outlined-buttons"
                onClick={handleSubmit}
              >
                <SearchIcon type="button" />
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
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
            Popular
          </Typography>
          <EstateContainer properties={placeHolderProperties} />
        </Box>
      )}
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
