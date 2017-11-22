const express = require('express');

var app = express();

//request containas headers, body information...
//response contains what to send back for the http request
app.get('/', (request, response) => {
  //  response.send('Hello Express!!');
  //  response.send('<h1>Hello Express!!</h1>');//html data
  response.send({
    name: 'Danyal',
    age: '23'
  });
});

//we can make multiple pages
//this page loads whndn you visit the about url in this case localhost:3000/about
app.get('/about', (request, response) => {
  response.send('About Page');
})

app.get('/bad', (request, response) => {
  response.send({
    error: '1000',
    errorMessage: 'Bad Connection'
  })
})

app.listen(3000); //listens to the port
