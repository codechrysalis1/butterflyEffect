exports.up = function (knex) {
  return knex.schema.createTable('telemetry', (t) => {
    t.float('latitude');
    t.float('longitude');
    t.integer('charge');
    t.integer('drone_id').unsigned().primary();
    t.foreign('drone_id').references('drone.id');
    t.text('status');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('telemetry');
};
