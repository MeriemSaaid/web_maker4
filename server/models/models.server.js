var connectionString = "mongodb://127.0.0.1:27017/web-maker"; // for local

if (process.env.MLAB_USERNAME_WEBDEV) {
  // check if running remotely

  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = "mongodb://" + username + ":" + password;
  connectionString += "@ds127954.mlab.com:27954/web_maker"; // use yours
}
// import mongoose library
var mongoose = require("mongoose");

// connect server with database
var db = mongoose.connect(
  connectionString,
  { useNewUrlParser: true }
);

// export this file
module.exports = db;
