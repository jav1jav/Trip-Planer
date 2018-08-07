console.log("Hello from JavaScript");

const makeMarker = require('./marker');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoidGVhbW1hcGJveHBwbCIsImEiOiJjamtrNTJ3YjYxbmFkM3JreG5iYm8wbndrIn0.Fl0bn63LH-mDX8pv3AffYQ';

const map = new mapboxgl.Map({
	container: 'map',
	center: [-74.009, 40.705],
	zoom: 12,
	style: 'mapbox://styles/mapbox/streets-v10'
})

const markerHotel = makeMarker('hotel', [-74.009151, 40.705086]);
const markerActivity = makeMarker('activity', [-74.009151, 40.805086]);
const markerRest = makeMarker('restaurant', [-74.009151, 40.905086]);
markerHotel.addTo(map);
markerActivity.addTo(map);
markerRest.addTo(map);

