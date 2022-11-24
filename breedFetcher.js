const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) {
    return console.log('Error:', error);
  } const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('no data for you');
    return;
  }
  console.log(data[0].description);
  console.log(typeof data);
});