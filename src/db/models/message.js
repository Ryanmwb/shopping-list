'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};