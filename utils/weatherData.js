const request = require('request');

const openweatherMap = {
  BASE_URL: "http://api.openweathermap.org/data/2.5/weather?q=",
  SECRET_KEY: "41ff67588223eb7aa11e9ebb8fa12e5a"
};

const weatherData = (address,callback) => {
  const url =
    openweatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&appid=" +
    openweatherMap.SECRET_KEY;

  console.log(url);

  request(url, { json: true }, (error, response, body) => {
    if (error) {
      callback(true, "Unable to fetch data, please try again: " + error);
    } else {
      callback(false, body);
    }
  });
};

module.exports = weatherData;
