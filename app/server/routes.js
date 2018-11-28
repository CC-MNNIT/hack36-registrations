var User = require('./models/User');
const {join} = require('path');

module.exports = function (app) {

  // Application ------------------------------------------
  app.get('/', function (req, res) {
    res.sendFile(join(__dirname,'../client/index.html'));
  });

  // Wildcard all other GET requests to the angular app
  app.get('*', function (req, res) {
    res.sendFile(join(__dirname,'../client/index.html'))
  });

};
