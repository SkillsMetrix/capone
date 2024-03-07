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
  weather(argv.l, function (data) {
    console.log(data);
  });
} else {
  console.log("Location not provided...!");
  location(function (location) {
    if (location) {
      weather(location.city, function (data) {
        console.log(data);
      });
    } else {
      console.log("unable to guess");
    }
  });
}
