exports.up = function (knex) {
  return knex.schema.createTable('station_drone', (t) => {
    t.integer('drone_id').unsigned();
    t.foreign('drone_id').references('drone.id');
    t.integer('station_id').unsigned();
    t.foreign('station_id').references('place.id');
    t.primary(['station_id', 'drone_id']);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('station_drone');
};
