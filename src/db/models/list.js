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
    },
    groupName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: "Add Description"
    }
    
  }, {});
  List.associate = function(models) {
    // associations can be defined here
    List.belongsTo(models.Group, {
      foreignKey: "groupId",
      onDelete: "CASCADE"
    });
    List.hasMany(models.Item, {
      foreignKey: "listId",
      as: "items"
    });
  };
  return List;
};