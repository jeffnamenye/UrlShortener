// sets up contant for express and body-parser
const express = require('express');
const body_parser = require('body-parser');

// express functionality
const app = express();

// port to 3000
const port = process.env.POST ||3000;

//sets body-parser to json
app.use(body_parser.json());

//sets body-parser as url encoded data
app.use(body_parser.urlencoded({
  extended: true,
}));

//links routes
app.use('/', require('../routes')(express));

// server to listen on port 3000
exports.server = app.listen(port, () =>{
  console.log('Good to go on port ' +port);
});
