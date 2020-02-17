"use strict";
const Sequelize = require('sequelize');
const user = require('../models/User');
const profile = require('../models/Profile');
const data = {
  "user": "postgres",
  "password": "postgres",
  "host": "localhost",
  "port": 5432,
  "database": "careerdoor"
}

// creating the sequilize instance.

const sequelize = new Sequelize(data.database, data.user, data.password, {
  host: data.host,
  dialect: data.user,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


const model = {};

model.userModel = user(sequelize, Sequelize);
model.profileModel = profile(sequelize, Sequelize);



sequelize.sync()
  .then(() => console.log(' tables has been successfully created'))
  .catch(error => console.log('This error occured', error));


module.exports = model;
