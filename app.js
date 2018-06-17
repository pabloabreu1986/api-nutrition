var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const error = require('./api/middleware/error');
var logger = require('morgan');


// Load Environment Variables
// require('dotenv').load();

const { port } = require('./config/config');

const mongoose = require('./utils/db/mongo/mongoose');

var productsRouter = require('./api/routes/products');
var recipessRouter = require('./api/routes/recipes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(productsRouter);
app.use(recipessRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler, send stacktrace only during development
app.use(error.handler);

// open mongoose connection (if needed)
mongoose.connect();

app.listen(port, () => console.log(`Server listening at port: ${port}`));

module.exports = app;
