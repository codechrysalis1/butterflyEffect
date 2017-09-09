const Telemetry = function (dbTelemetry) {
  this.id = dbTelemetry.id;
  this.latitude = dbTelemetry.latitude;
  this.longitude = dbTelemetry.longitude;
  this.charge = dbTelemetry.charge;
  this.drone_id = dbTelemetry.drone_id;
  this.status = dbTelemetry.status;
};

module.exports = (knex) => {
  return {
    search: require('./search')(knex,Telemetry),
  };
};