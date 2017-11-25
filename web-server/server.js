const express = require('express');
const hbs = require('hbs'); //wecan pass in data into an html file using this, this allows us to create templates instead of rendering every page seperately
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); // this allows us to refractor the areas that are same on every page i.e. footers
app.set('view engine', 'hbs'); //this is a key value pair it tells express what to use
//app.use(express.static(__dirname + '/public')); //to use the static directory. this uses the htmll page in public directory
//static directory can be used to add js, html, css...

//middleware same get has respose and request but also has next. plogram does not move on until next is called
app.use((request, response, next) => { //we can use it to create logs
  var now = new Date().toString();
  var log = `${now} : ${request.method} ${request.url}`; //this tells us waht page user requested
  console.log(log); //print log
  fs.appendFile('server.log', log + '\n', (err) => { //save the log in a file
    if (err) {
      console.log('unable to write to server log');
    }
  })

  next(); //if we dont call next the app will not move on
});
// below is an example of how middleware can be used
//app.use((request, response, next) => {
//   response.render('maintenance.hbs', { //we pass in the information to display
//     pageTitle: 'We will be right back!!'
//   });
// });
app.use(express.static(__dirname + '/public')); //we moved it rom above because it still loads the help.html if it is before even when we say the page is under maintanence

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => { //this converts the text to uppercase. example in home page
  return text.toUpperCase();
});

//request containas headers, body information...
//response contains what to send back for the http request
app.get('/', (request, response) => {
  //  response.send('Hello Express!!');
  //  response.send('<h1>Hello Express!!</h1>');//html data
  // response.send({
  //   name: 'Danyal',
  //   age: '23'
  // });
  response.render('home.hbs', {
    pageTitle: 'Home Page',
    //  currentYear: new Date().getFullYear(),//we created get current year helper
    welcomeMessage: 'welcome to my page'
  })
});

//we can make multiple pages
//this page loads whndn you visit the about url in this case localhost:3000/about
app.get('/about', (request, response) => {
  //response.send('About Page');
  response.render('about.hbs', { //we pass in the information to display
    pageTitle: 'About page',
  });
})

app.get('/bad', (request, response) => {
  response.send({
    error: '1000',
    errorMessage: 'Bad Connection'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000!');
}); //listens to the port
