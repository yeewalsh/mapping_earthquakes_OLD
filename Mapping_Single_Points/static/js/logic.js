// add console log to check code working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Create the tilelayer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,    
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});

// Add the 'graymap' tile layer to the map.
streets.addTo(map);

// add a circle to the map
let circleMarker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillOpacity: 0.2,
    fillColor: '#ffffa1'
}).addTo(map);

