
exports.up = function (knex) {
  return knex.schema.createTable('drone', (t) => {
    t.increment().index();
    t.bigInteger('flytime');
    t.float('speed');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('drone');
};
