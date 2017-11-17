const request = require('request');

var geocodeAddress = (address) => {
  var encodedAdress = encodeURIComponent(address); //encodes the address string(the spaces in the string)
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
    if (error) { //check if there is an error
      console.log('Unable to connect to server');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Invalid Address');
    } else if (body.status === 'OK') {
      console.log(`Address: ${body.results[0].formatted_address}`); //address is the first element of result array
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    }
  });
}

module.exports = {
  geocodeAddress
}
