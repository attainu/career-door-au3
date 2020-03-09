"use strict";
const bcrypt = require("bcrypt");
//const Profile = require("./Profile");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.UUID,
        unique: true,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      user_type: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      confirm_password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "users",
      classMethods: {
        associate: function(models) {
          User.hasOne(models.Profile, {
            foreignKey: "email"
          });
        }
      },
      hooks: {
        beforeCreate: user => {
          user.password = bcrypt.hashSync(user.password, 10);
          user.confirm_password = bcrypt.hashSync(user.confirm_password, 10);
        }
      }
    }
  );

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.prototype.validConfirmPassword = function(confirm_password) {
    return bcrypt.compareSync(confirm_password, this.confirm_password);
  };
  return User;
};
