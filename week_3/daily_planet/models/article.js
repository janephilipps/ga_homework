"use strict";
module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define("Article", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    fiction: DataTypes.BOOLEAN,
    author_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        this.belongsTo(models.Author);
      }
    }
  });
  return Article;
};