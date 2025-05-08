const axios = require('axios');

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
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error. Please try again."
    })
  }
};

//Get GBIF Api data and send to frontend to the handler function.

const getGbifNasaData = async function (req, res) {
  //Use req object to get request url and query to fetch data from network.
  const search = req.query.query;    //get what title, and what request from frontend
  //Store response 
  try {
    const response = await axios.get('https://api.gbif.org/v1/occurrence/search', {
      params: { q: search }
    });
    //take first index nasa data from items by slice method.
    const data = response.data.collection.items.slice(0, 1);
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error. Please try again."
    })
  }
};

module.exports = {
  getNasaApiData,
  getApiNasaData,
  getGbifNasaData
};