var map = L.map('map').setView([34.002234, -117.943685], 10);

//Code to add Basemap
var latimes = L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png').addTo(map);

//Create locations for geojson
var locations="data/mu_locations.geojson";

//Styles and loads the Meeting Locations of the Neighborhood Councils
$.getJSON(locations, function(data) {
    L.geoJson(data, {
        style: {
            radius: 7,
            fillColor: "#FFA95D",
            color: "#000",
            weight: 0,
            opacity: 0,
            fillOpacity: 0.8
        },
        pointToLayer: function(feature, latlon) {
            return L.circleMarker(latlon).bindPopup("<h2>"+feature.id+"</h2>"+feature.properties["Meetup address"]);
        }
    }).addTo(map)
});
