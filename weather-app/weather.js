//API key for forecast.io: 3ee5e8cf7b20028fabbf341e3f908c01
// URL format:https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//long and lat we get fromgeocode API
// for mississauga: https://api.darksky.net/forecast/3ee5e8cf7b20028fabbf341e3f908c01/43.5890452,-79.6441198

const request = require('request');

var currentWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/3ee5e8cf7b20028fabbf341e3f908c01/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => { //everything went well
    if (!error && response.statusCode === 200) {
      //console.log(`Current weather is ${body.currently.temperature}`);
      callback(undefined, {
        Current_Weather: body.currently.temperature,
        Feels_Like: body.currently.apparentTemperature
      });
    } else { //in case of error
      //  console.log('Unable to get weather for this location ');
      callback('Unable to get weather for this location ');
    }
  })

}
module.exports = {
  currentWeather
}
