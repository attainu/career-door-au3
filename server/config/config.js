"use strict";
const sequelize = require('sequelize');

const data = {
  "user":"postgres",
  "password":"postgres",
  "host":"localhost",
  "port":5432,
  "database":"careerdoor"
}

// creating the sequilize instance.

module.exports = new sequelize(data.database,data.user,data.password,{
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
