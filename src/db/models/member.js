'use strict';
module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('Member', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
    Member.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Member.belongsTo(models.Group, {
      foreignKey: "groupId",
      onDelete: "CASCADE"
    });
  };
  return Member;
};