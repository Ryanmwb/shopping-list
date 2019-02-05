'use strict';
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define('List', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
    
  }, {});
  List.associate = function(models) {
    // associations can be defined here
  };
  return List;
};