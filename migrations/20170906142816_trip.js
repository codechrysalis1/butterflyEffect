
exports.up = function (knex) {
  return knex.schema.createTable('trip', (t) => {
    t.increments().index();
    t.integer('tracknum');
    t.text('status');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('trip');
};
