const path = require("path");
const express = require("express");
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const xssClean = require('xss-clean');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({windoMs: 10 * 60 * 1000, max: 100})
const routes = require('./src/routes');

const app = express(); // create express app

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(helmet());
app.use(hpp());
app.use(limiter);
app.use(xssClean());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});