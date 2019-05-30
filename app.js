var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var scenariosRegularRouter = require('./routes/regular');
var scenariosCookieRouter = require('./routes/cookie');
var scenariosRefererRouter = require('./routes/referer');
var scenariosFiltersRouter = require('./routes/filters');
var scenariosUserAgentRouter = require('./routes/agent');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.enable('trust proxy')

app.use('/', indexRouter);
app.use('/scenarios/regular', scenariosRegularRouter);
app.use('/scenarios/cookie', scenariosCookieRouter);
app.use('/scenarios/referer', scenariosRefererRouter);
app.use('/scenarios/filters', scenariosFiltersRouter);
app.use('/scenarios/user-agent', scenariosUserAgentRouter);

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

const port = 80
app.listen(port, () => console.log(`SSJI-Testbed app listening on port ${port}!`))

module.exports = app;
