'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull:false 
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false 
    },
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    Group.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Group.hasMany(models.List, {
      foreignKey: "groupId",
      as: "lists"
    });
    Group.hasMany(models.Member, {
      foreignKey: "memberId",
      as: "members"
    });
  };
  return Group;
};