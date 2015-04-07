"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.removeColumn('Articles', 'author').done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.addColumn('Articles', 'author', DataTypes.STRING).done(done);
  }
};
