//this sets up my contant for express and body-parser
const express = require('express');
const body_parser = require('body-parser');

//this sets up the express functionality
const app = express();

//this sets my port to 3000
const port = 3000;

//sets body-parser to json
app.use(body_parser.json());

//sets the body-parser as url encoded data
app.use(body_parser.urlencoded({
  extended: true,
}));

//links routes
app.use('/api/v1.0.0', require('../routes/api')(express));

//sets my server to listen on port 3000
const server = app.listen(port, () =>{
  console.log('Good to go on port ' +port);
});

module.exports = server;
