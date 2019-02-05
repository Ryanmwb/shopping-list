'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};