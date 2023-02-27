const express = require("express");
const NodeGeocoder = require("node-geocoder");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

const options = {
  provider: "openstreetmap",
};
const geocoder = NodeGeocoder(options);

app.use(cors());

app.get("/geocode/:address", (req, res) => {
  const address = req.params.address;

  geocoder
    .geocode(address)
    .then((result) => {
      res.json({
        address: {
          formattedAddress: result[0].formattedAddress,
          street: result[0].streetName,
          streetNumber: result[0].streetNumber,
          zipCode: result[0].zipcode,
          city: result[0].city,
          state: result[0].state,
        },
        latitude: result[0].latitude,
        longitude: result[0].longitude,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error geocoding address");
    });
});

app.get("/suggest/:query", (req, res) => {
  const query = req.params.query;

  geocoder
    .geocode(`${query}, Germany`, { limit: 5 })
    .then((result) => {
      const suggestions = result.map((address) => ({
        address: {
          formattedAddress: address.formattedAddress,
          street: address.streetName,
          streetNumber: address.streetNumber,
          city: address.city,
          state: address.state,
          zipCode: address.zipcode,
          lat: address.latitude,
          lng: address.longitude,
        },
      }));
      res.json(suggestions);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error suggesting addresses");
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
