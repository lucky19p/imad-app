var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').pool;

var config = {
    user:'lucky19p',
    database:'lucky19p',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};