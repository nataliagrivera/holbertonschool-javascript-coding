#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

// Computes number of tasks completed by user ID
request(url, function (err, response, body) {
  if (err) {
    console.error(err);
  } else { // Print content of the response (body)
    const tasks = JSON.parse(body);
    const completed = {}; // Dictionary of completed tasks by user ID
    for (const task of tasks) {
      if (task.completed === true) {
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } else {
          completed[task.userId] += 1;
        }
      }
    }
    console.log(completed);
  }
}
);
