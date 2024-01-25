#!/usr/bin/node

const request = require('request');

// Check if the URL is a provided argument

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie-id>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Make a request to get the Start Ward api
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  if (response.statusCode === 200) { // Response was successful
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  } else {
    console.error(`Error: Unable to fetch movie data. ${response.StatusCode}`);
    process.exit(1);
  }
});
