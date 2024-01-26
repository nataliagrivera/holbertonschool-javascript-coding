#!/usr/bin/node

const request = require('request');
const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: node 5-request_store.js <url>')
  process.exit(1)
}

const url = process.argv[2]
const filePath = process.argv[3]


// Make a request to get the specified URL
request(filePath, (error, response, body) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }

  /// The body response to the sopecified file path
  fs.writeFile(filePath, body, 'utf8', (error) => {
    if (error) {
      console.error(`Error writing to ${filePath}: ${error}`)
      process.exit(1);
    }

  console.log(`Content sucesfully written to ${filePath}`);

  });
});
