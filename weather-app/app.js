const geocode = require('./geocode.js');
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
geocode.geocodeAddress(argv.address);
