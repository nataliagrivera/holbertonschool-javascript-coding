#!/usr/bin/node

const fs = require('fs');

// Check if the file path is provided as an argument
if (process.argv.length !== 4) {
  console.error('Usage: node 1-writeme.js <file-path> <text>');
  process.exit(1); // Exit with an error code
}

const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.writeFile(filePath, process.argv[3], 'utf-8', (err) => {
  if (err) {
    // Print the error object if an error occurred during reading
    console.error(err);
    process.exit(1); // Exit with an error code
  }
});
