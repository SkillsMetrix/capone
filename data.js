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







const request= require('request')

var URL='https://ipinfo.io/'
module.exports= function(callback) {

request({
    url:URL,
    json:true
},function(error,response,body){
    if(error){
        callback('unable to detect');
    }else{
        
        callback(body);
    }
})
}





var request= require('request')


module.exports= function(location,callback){

    var ec= encodeURIComponent(location)
    var URL='https://api.openweathermap.org/data/2.5/weather?q=' +ec+ '&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric'

    if(!location){
        return callback('No Location Provided')
    }
request({
    url:URL,
    json:true
},function(error,response,body){
    if(error){
        callback('Unable to Fetch Data');
    }else {
        callback('Its ' + body.main.temp + ' in ' +   body.name);
    }

})
}
