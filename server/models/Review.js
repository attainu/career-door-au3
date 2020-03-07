// const User = require('./User');
module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("Review", {
    id:{
      type:Sequelize.UUID,
      primaryKey:true
    },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
        // references: {
        //   model: "users",
        //   key: "email"
        // }
      },
       company: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jobtitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ratings: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: false
      }

    },

    {
      timestamps: false,
      tableName: 'review',
      freezeTableName: true,
      // classMethods: {
      //   associate: function(models) {
      //     Review.hasOne(models.User, {
      //       foreignKey: 'email'
      //     });
      //   }
      // }
    })

  return Review;
}
