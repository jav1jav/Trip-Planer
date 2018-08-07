const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoidGVhbW1hcGJveHBwbCIsImEiOiJjamtrNTJ3YjYxbmFkM3JreG5iYm8wbndrIn0.Fl0bn63LH-mDX8pv3AffYQ';

function makeMarker (type, latLong) {
  const markerDomEl = document.createElement('div')
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === 'hotel') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  } else { //default to activity
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  //new mapboxgl.Marker(YOUR_DOM_ELEMENT).setLngLat(YOUR_COORDS_ARRAY).addTo(map);
  const returnMarker = new mapboxgl.Marker(markerDomEl).setLngLat(latLong);
  return returnMarker;
}

module.exports = makeMarker;
