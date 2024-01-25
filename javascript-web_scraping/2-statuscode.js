#!/usr/bin/node

const { error } = require('console');
const request = require('request');

// Check if the URL is provided as an argument
if(process.argv.length !== 3) {
  console.error('Usage: node 2-statuscode.js <URL>');
  process.exit(1); // Exit with an error code
}

const URL = process.argv[2];

// Print the status code of a GET request to the provided URL
request(URL, (error, response)) => {
  if (error) {
    console.error(error);
    process.exit(1); // Exit with an error code
  }
}

console.log('code: ${response.statusCode}');
