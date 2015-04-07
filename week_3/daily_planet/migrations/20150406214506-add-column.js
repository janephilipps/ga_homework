"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn('Articles','author_id',DataTypes.INTEGER).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.removeColumn('Articles', 'author_id').done(done);
  }
};
