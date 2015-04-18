

/*$(document).ready(function () {
 alert("Hello world!");
 });*/

var rendererOptions = {
    suppressMarkers : true

    /*markerOptions: {
     icon: "http://icdn.pro/images/es/c/o/coche-de-transporte-de-ambulancia-de-emergencia-del-vehiculo-icono-6274-96.png"
     }*/
};


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {

    var mapOptions = {
        center: new google.maps.LatLng(40.406170, -3.700261),
        zoom:17
    };
    map = new google.maps.Map(document.getElementById('map-container'), mapOptions);




}
function drawParent(zones){
    for (key in zones.params.zones) {
        var geometry = zones.params.zones[key].shape;
        var coordinates = geometry.coordinates[0];
        //console.log(zones.params.zones[key]);
       // map.data.loadGeoJson(geometry);

        var polygonCoords = [];
        for (var i = 0; i < coordinates.length; i++ ){
            polygonCoords.push(new google.maps.LatLng(coordinates[i][0], coordinates[i][1]));
        }
        //console.log(polygonCoords);
        // Construct the polygon.
        var polygon = new google.maps.Polygon({
            paths: polygonCoords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map
        });


    }

}
function drawZones(zones) {


    console.log(zones.params.zones);
    for (key in zones.params.zones) {
        var geometry = zones.params.zones[key].shape;
        var coordinates = geometry.coordinates;
        console.log(geometry);
        console.log(coordinates);

        var color = '#' + (function co(lor) {
                return (lor +=
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)])
                && (lor.length == 6) ? lor : co(lor);
            })('');

        var center = new google.maps.LatLng(coordinates[0], coordinates[1]);

        var circleOptions = {
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            map: map,
            center: center,
            radius: 30
        };
        // Add the circle for this city to the map.
        lightCircle = new google.maps.Circle(circleOptions);

        var light = new google.maps.Marker({
            position: center,
            map: map,
            icon: "http://www.basicgo.com/bundles/basicgo/frontend/imagenes/exclamacionAviso.png"
        });

    }

}

//google.maps.event.addDomListener(window, 'load', initialize);
