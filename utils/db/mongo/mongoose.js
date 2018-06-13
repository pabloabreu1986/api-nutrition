const mongoose = require('mongoose');
const { mongo, env } = require('./../../../config/config');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  // if you need to crash when you can't connnect to db use this...
  // process.exit(-1);
});

mongoose.connection.on('connected', function(){
  console.log("Mongoose connection is open to", mongo.uri);
});

mongoose.connection.on('disconnected', function(){
  console.log("Mongoose connection is disconnected");
});

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
      console.log("Mongoose connection is disconnected due to application termination");
      process.exit(0);
  });
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: 1,
  });
  return mongoose.connection;
};
