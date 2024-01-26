#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const file = process.argv[3];

request(url, function (err, response, body) {
  if (err) { // Print the error if one occurred
    console.error(err);
  } else { // Print content of the response (body)
    fs.writeFile(file, body, 'utf8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}
);
