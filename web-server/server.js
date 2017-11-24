const express = require('express');
const hbs = require('hbs'); //wecan pass in data into an html file using this, this allows us to create templates instead of rendering every page seperately

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); // this allows us to refractor the areas that are same on every page i.e. footers
app.set('view engine', 'hbs'); //this is a key value pair it tells express what to use
app.use(express.static(__dirname + '/public')); //to use the static directory. this uses the htmll page in public directory
//static directory can be used to add js, html, css...

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
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'welcome to my page'
  })
});

//we can make multiple pages
//this page loads whndn you visit the about url in this case localhost:3000/about
app.get('/about', (request, response) => {
  //response.send('About Page');
  response.render('about.hbs', { //we pass in the information to display
    pageTitle: 'About page',
    currentYear: new Date().getFullYear() //gets the current year
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
