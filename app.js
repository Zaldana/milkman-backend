require("dotenv").config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products/productsRouter');
var userRouter = require('./routes/users/userRouter');
var app = express();

mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log('connected to database successfully'))
    .catch(() => console.log('did NOT connect to the database successfully'));

app.use(cors("*"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/products/', productsRouter);
app.use('/api/users/', userRouter);

module.exports = app;
