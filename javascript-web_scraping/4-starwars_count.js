#!/usr/bin/node

const request (require('request'));

if (process.argv.length !== 3) {
  console.error('USage: nodde 4-starwars_count.js <url>');
  process.exit(1);
}

const apiUrl = process.argv[2];

resquest(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

if (response.statusCode === 200) {
  const movies = JSON.parse(body).results;
  let count = 0;
  for (const movie of movies) {
    for (const character of movie.characters) {
      if (character.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
} else {
  console.error(`Error: ${response.statusCode}`);
  process.exit(1);
}
});
