//use npm axios. it supports ptomises. request does not support promise. we need to wrap it
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({ //ths make sures that we always enter the address
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to get the weather',
      string: true //this is to make sure that the address is taken in as a string
    }

  })
  .help()
  .alias('help', 'h') //sets an alia for help
  .argv
//console.log(argv);
var encodedAdress = encodeURIComponent(argv.address); //encodes the address string(the spaces in the string)
var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`;
//axios returns the data in json and returns as a promise
axios.get(url).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Invalid Address');
  }
  console.log(response.data.results[0].formatted_address);
  var latitude = response.data.results[0].geometry.location.lat;
  var longitude = response.data.results[0].geometry.location.lng;
  var weather = `https://api.darksky.net/forecast/3ee5e8cf7b20028fabbf341e3f908c01/${latitude},${longitude}`;
  return axios.get(weather);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var feelsLike = response.data.currently.apparentTemperature;
  console.log(`Current Temperature: ${temperature}`);
  console.log(`Feels Like: ${feelsLike}`);
}).catch((error) => { //error has a eror code
  if (error.code === 'ENOTFOUND') {
    console.log('Could not connect');
  } else {
    console.log(error.message);
  }
})
