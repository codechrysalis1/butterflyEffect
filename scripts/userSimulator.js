const fetch = require('isomorphic-fetch');

function randomLocation(originX, originY){
    let r = 6000/111300 // radius is in meters
      , y0 = originX
      , x0 = originY
      , u = Math.random()
      , v = Math.random()
      , w = r * Math.sqrt(u)
      , t = 2 * Math.PI * v
      , x = w * Math.cos(t)
      , y1 = w * Math.sin(t)
      , x1 = x / Math.cos(y0)

      return {lat:  y0 + y1, lng: x0 + x1}
}

const getRoute = async (from, dest) => {
  try {
    const params = {
      from,
      dest };
    const response = await (await fetch('/api/calculate', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })).json();
    console.log(response)
    return response;
  } catch (err) {
    return { status: 'error', message: 'Error occured while fetching from API.' };
  }
};

const time = 5000; // time in ms
setInterval(function() {
  // tokyo location : {lat: 35.664390, lng:139.769869}
  let source = randomLocation(35.652832, 139.839478);
  //get random locatoin around source
  let destination = randomLocation(source.lat, source.lng);
  getRoute(source, destination);
}, time);