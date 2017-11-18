const request = require('request');

var geocodeAddress = (address, callback) => {
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
      callback('Unable to connect to server');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Invalid Address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
}
