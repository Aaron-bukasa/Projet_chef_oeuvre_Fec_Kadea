require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

const dashboardRouter = require('./routes/dashboard');
const demandesRouter = require('./routes/demandes');
const rapportRouter = require('./routes/rapport');
const suiviDemande = require('./routes/suiviDemande')
const suiviUser = require('./routes/suiviUser')

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashboardRouter);

app.use('/demandes', demandesRouter);
app.use('/rapport', rapportRouter);
app.use('/suivi_demande', suiviDemande);
app.use('/suivi_utilisateur', suiviUser);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
