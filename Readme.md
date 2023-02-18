# Geocoding API for LJS Map

This is a simple Express app that provides an API for geocoding addresses and suggesting addresses based on user input. The app uses the `node-geocoder` package to perform geocoding and address suggestion, and enables Cross-Origin Resource Sharing (CORS) to allow requests from other domains.

## Prerequisites

Before running the app, you need to have [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) installed on your machine.

## Installation

1. Clone the repository: `git clone https://github.com/tlmn/zoff-ljs-map-api.git`
2. Install dependencies: `yarn install`

## Usage

To start the app, run `yarn start`. The app will be available at `http://localhost:3000`.

### Endpoints

The app provides the following endpoints:

#### `/geocode/:address`

GET request to geocode an address. Returns the latitude and longitude of the address in JSON format.

Example: `http://localhost:3000/geocode/1600 Pennsylvania Ave NW, Washington, DC`

Response:
```json
{
  "address": "1600 Pennsylvania Avenue Northwest, President's Park, Washington, District of Columbia 20500, USA",
  "latitude": 38.8976633,
  "longitude": -77.0365739
}

#### `/suggest/:query`

GET request to suggest up to 5 addresses based on user input. Returns an array of suggested addresses in JSON format.

Example: `http://localhost:3000/suggest/new`

Response:
```json
[
  "New York, NY, USA",
  "Newark, NJ, USA",
  "New Orleans, LA, USA",
  "Newcastle upon Tyne, UK",
  "Newport, RI, USA"
]
```