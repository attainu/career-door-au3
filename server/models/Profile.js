const User = require('./User');
module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
    id:{
      type:Sequelize.UUID,
      primaryKey:true
    },
      cloudResume: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        // references: {
        //   model: "users",
        //   key: "email"
        // }
      },
      employment: {
        type: Sequelize.JSON,
        allowNull: false
      },
      education: {
        type: Sequelize.JSON,
        allowNull: false
      },
      projects: {
        type: Sequelize.JSON,
        allowNull: false
      },
      personalDetails: {
        type: Sequelize.JSON,
        allowNull: false
      },
      skills: {
        type: Sequelize.JSON,
        allowNull: false
      }

    },

    {
      timestamps: false,
      tableName: 'profile',
      freezeTableName: true,
      // classMethods: {
      //   associate: function(models) {
      //     Profile.hasOne(models.User, {
      //       foreignKey: 'email'
      //     });
      //   }
      // }
    })

  return Profile;
}
