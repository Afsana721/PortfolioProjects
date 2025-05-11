const axios = require('axios');

//Get Api data for Research.jsx 
const getNasaApiData = async function (req, res) {
  try {
    const search = req.body.query || 'earth';
    //console.log("NASA search:", search); // checking if data is available
    const response = await axios.get(`https://images-api.nasa.gov/search`, {
      params: { q: search }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Get images for Explore.jsx
//Get Nasa Api data and send to frontend to the handler function.
const getApiNasaData = async function (req, res) {
  //Use req object to get request url and query to fetch data from network.
  const search = req.query.query;    //get what title, and what request from frontend
  //Store response 
  try {
    const response = await axios.get('https://images-api.nasa.gov/search', {
      params: { q: search }
    });
    //take first index nasa data from items by slice method.
    const data = response.data.collection.items.slice(0, 1);
    const item = data[0];
    const image = item?.links?.[0]?.href || '';
    //console.log(image);
    res.status(200).json({ ...item, image });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error. Please try again."
    })
  }
};

//Get GBIF Api data and send to frontend to the handler function.
const getGbifData = async function (req, res) {
  const search = req.query.query;
  if (!search) {
    return res.status(400).json({ error: "Query string is required" });
  }
  try {
    const response = await axios.get('https://api.gbif.org/v1/occurrence/search', {
      params: { q: search }
    });
    const data = response.data.results.slice(0, 1);
    const item = data[0];
    const image = item?.media?.[0]?.identifier || '';
    //console.log(image);
    res.status(200).json({ ...item, image });
  } catch (error) {
    return res.status(500).json({ message: "Server Error. Please try again." });
  }
};

module.exports = {
  getNasaApiData,
  getApiNasaData,
  getGbifData
};