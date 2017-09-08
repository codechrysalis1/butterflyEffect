const Station = function (dbStation) {
  this.id = dbStation.id;
  this.latitude = dbStation.latitude;
  this.longitude = dbStation.longitude;
  this.type = dbStation.type;
};

module.exports = (knex) => {
  return {
    list: require('./list')(knex, Station),
  };
};

