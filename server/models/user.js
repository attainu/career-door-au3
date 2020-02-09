"use strict";
const Sequelize = require("sequelize");
const db = require("../config/config");

const User = db.define("users", {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  dob: {
    type: Sequelize.DATE
  },
  user_type: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.STRING
  },
  confirm_password: {
    type: Sequelize.STRING
  },
  company_name: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    field:'createdat'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field:'updatedat'
  }
});

module.exports = User;
