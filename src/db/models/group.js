'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull:false 
    }
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    Group.hasMany(models.List, {
      foreignKey: "groupId",
      as: "lists"
    });
    Group.hasMany(models.Member, {
      foreignKey: "groupId",
      as: "members"
    });
  };
  return Group;
};