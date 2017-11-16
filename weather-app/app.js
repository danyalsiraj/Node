const request = require('request');
const yargs = require('yargs');

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
console.log(argv);
var encodedAdress = encodeURIComponent(argv.address); //encodes the address string(the spaces in the string)
//to decode use decodeURIComponent
console.log(encodedAdress);
//gets long and lat from google api
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
  json: true
}, (error, response, body) => { //these are default arguments for request read documentation for more details
  //  console.log(body);
  //  console.log(JSON.stringify(body, undefined, 2)); //pretty print objects
  //console.log(JSON.stringify(response, undefined, 2));
  //console.log(JSON.stringify(error, undefined, 2));
  //from response we can find out where address is stored
  console.log(`Address: ${body.results[0].formatted_address}`); //address is the first element of result array
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
});
