#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Check if both URL and file path are provided as command line arguments
if (process.argv.length !== 4) {
  console.error('Usage: node 5-request_store.js <URL> <file-path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  // Write the body response to the specified file path
  fs.writeFileSync(filePath, body, 'utf-8');

  // Read the content of the file and print it
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(data);
});
