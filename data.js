var weather = require("./weather.js");
var location = require("./location.js");
var argv = require("yargs")
  .option("location", {
    alias: "l",
    demand: false,
    description: "Location to fetch the weather for",
    type: "string",
  })
  .help("help").argv;

if (typeof argv.l === "string" && argv.l.length > 0) {
  weather(argv.l)
    .then(function (weather) {
      console.log(weather);
    })
    .catch(function (error) {
      console.log(error);
    });
} else {
  console.log("Location not provided...!");
  location()
    .then(function (loc) {
      return weather(loc.city);
    })
    .then(function (currentweather) {
      console.log(currentweather);
    })
    .catch(function (err) {
      console.log(err);
    });
}
----


  var request = require("request");

module.exports = function (location) {
  return new Promise(function (resolve, reject) {
    var ec = encodeURIComponent(location);
    var URL = `https://api.openweathermap.org/data/2.5/weather?q=${ec}&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric`;

    if (!location) {
      return reject("No Location Provided");
    }
    request(
      {
        url: URL,
        json: true,
      },
      function (error, response, body) {
        if (error) {
          reject("Unable to Fetch Data");
        } else {
          resolve("Its " + body.main.temp + " in " + body.name);
        }
      }
    );
  });
};



----
  const request = require("request");

var URL = "https://ipinfo.io/";

module.exports = function () {
  return new Promise(function (resolve, reject) {
    request(
      {
        url: URL,
        json: true,
      },
      function (error, response, body) {
        if (error) {
          reject("unable to detect");
        } else {
          resolve(body);
        }
      }
    );
  });
};
