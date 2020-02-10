"use strict";
const Sequelize = require('sequelize');
const user = require('../models/User');
const data = {
  "user":"postgres",
  "password":"postgres",
  "host":"localhost",
  "port":5432,
  "database":"careerdoor"
}

// creating the sequilize instance.

const sequelize = new Sequelize(data.database,data.user,data.password,{
  host:data.host,
  dialect:data.user,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.sync()
    .then(() => console.log('users table has been successfully created'))
    .catch(error => console.log('This error occured', error));


const userModel = user(sequelize,Sequelize);


module.exports = userModel;
// const Sequelize = require('sequelize')
// const accounts = require('./models')
// const sequelize = new Sequelize('postgres://postgres:bhavesh@localhost:5432/guftagu')
//
//
// sequelize.authenticate()
// .then(() => console.log('database connection made!'))
// .catch(() => console.log("connection to db failed!"))
//
// const accountsModel = accounts(sequelize, Sequelize)
// console.log(accountsModel)
//
//
// module.exports =  accountsModel
