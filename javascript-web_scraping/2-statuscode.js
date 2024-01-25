#!/usr/bin/node

const request = require('request');

// Check if the URL is provided as an argument
if(process.argv.length !== 3) {
  console.error('Usage: node 2-statuscode.js <URL>');
  process.exit(1); // Exit with an error code
}

const url = process.argv[2];

// Print the status code of a GET request to the provided URL
request(url, (err, response) => {
  if (err) {
    console.error(err);
    process.exit(1); // Exit with an error code
  }

console.log('code: ${response.statusCode}');
});