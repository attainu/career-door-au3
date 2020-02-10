"use strict";
const bcrypt = require('bcrypt');


module.exports = (sequelize,Sequelize) =>{
  const User = sequelize.define("users",{
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
      primaryKey:true
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      type: Sequelize.DATE,
      allowNull: false
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
    },
    createdAt: {
      type: Sequelize.DATE,
      field:'createdat',
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      field:'updatedat',
      allowNull: false
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
