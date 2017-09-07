const Station = function (dbStation) {
  this.id = dbStation.id;
  this.latitude = dbStation.latitude;
  this.longitude = dbStation.longitude;
  this.type = dbStation.type;
};

Station.prototype.serialize = function(){
  // use a serializer to format the object and
  // clean out any information that shouldn't be
  // sent to the client
  return {
    id: this.id,
    latitude: this.latitude,
    longitude: this.longitude,
    type: this.type,
  };
};

module.exports = (knex) => {
  return {
    list: require('./list')(knex, Station),
  };
};
