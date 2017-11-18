const geocode = require('./geocode.js');
const weather = require('./weather.js');

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
//console.log(argv);
geocode.geocodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(result.address);
    weather.currentWeather(result.latitude, result.longitude, (errorMessage, weatherResult) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        //console.log(JSON.stringify(weatherResult, undefined, 2));
        console.log(`Temperature: ${weatherResult.Current_Weather}`);
        console.log(`Feels Like: ${weatherResult.Feels_Like}`);
      }

    });
    //console.log(JSON.stringify(result, undefined, 2));
  }
});
