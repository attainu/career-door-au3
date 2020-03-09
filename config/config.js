"use strict";
const Sequelize = require("sequelize");
const user = require("../models/User");
const profile = require("../models/Profile");
const review = require("../models/Review");
const data = {
  user: "rqiarvit",
  password: "so8vBnBRq8GxZGc46dhOrFrDCNXsT7je",
  host: "localhost",
  port: 5432,
  database: "rqiarvit"
};

const url =
  "postgres://rqiarvit:so8vBnBRq8GxZGc46dhOrFrDCNXsT7je@drona.db.elephantsql.com:5432/rqiarvit";

// creating the sequilize instance.

// const sequelize = new Sequelize(data.database, data.user, data.password, {
//   host: data.host,
//   dialect: "postgres",
//   logging: false,
//   operatorsAliases: false,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

const sequelize = new Sequelize(url);

const model = {};

model.userModel = user(sequelize, Sequelize);
model.profileModel = profile(sequelize, Sequelize);
model.reviewModel = review(sequelize, Sequelize);

sequelize
  .sync()
  .then(() => console.log(" tables has been successfully created"))
  .catch(error => console.log("This error occured", error));

module.exports = model;
