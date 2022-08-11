const axios = require("axios");

export const options = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    hitsPerPage: "1",
    lang: "en",
    sort: "city-level-score",
  },
  headers: {
    "X-RapidAPI-Key": "0695970a9emsh6cb2345612e8d11p1aebd9jsn66ab022a2d3b",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

export const singleOptions = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/detail",
  params: { externalID: `` },
  headers: {
    "X-RapidAPI-Key": "0695970a9emsh6cb2345612e8d11p1aebd9jsn66ab022a2d3b",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

export async function singleFetchApi(singleOptions) {
  try {
    const { data } = await axios.request(singleOptions);
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchApi(options, defaultFormData) {
  console.log(defaultFormData);

  for (const key in defaultFormData) {
    options.params[key] = defaultFormData[key];
  }

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    return error;
  }
}
