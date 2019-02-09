'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notifications: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: true
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false, 
      unique: true
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Group, {
      foreignKey: "userId",
      as: "groups"
    }); 
    User.hasMany(models.Message, {
      foreignKey: "userId",
      as: "messages"
    });
    User.hasMany(models.Item, {
      foreignKey: "userId",
      as: "items"
    });
    User.hasMany(models.Member, {
      foreignKey: "userId",
      as: "members"
    })
  };
  return User;
};