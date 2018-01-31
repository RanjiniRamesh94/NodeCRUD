var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;


  mongoose = require('mongoose'),
  Book = require('./book/models/bookModels'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BookStore'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./book/routes/bookRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Book Store RESTful API server started on: ' + port);