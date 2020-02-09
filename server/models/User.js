"use strict";
const bcrypt = require('bcrypt');


module.exports = (sequelize,Sequelize) =>{
  const User = sequelize.define("users",{
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

  },
  {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
        user.confirm_password = bcrypt.hashSync(user.confirm_password,10);
        console.log(user.password);
      }
    }
  });


  User.prototype.validPassword = function (password) {
    return  bcrypt.compareSync(password, this.password);
  }

  User.prototype.validConfirmPassword = function (confirm_password) {
    return bcrypt.compareSync(confirm_password,this.confirm_password);
  }
  return User;
}
