$(document).ready(function()
{
    map = L.map('map').setView([51.505, -0.09], 13);
    circle_a = L.circle([52.0131627, 4.3799595], 200).addTo(map);
    circle_b = L.circle([52.0161627, 4.3729595], 200).addTo(map);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'ikea map',
        maxZoom: 20,
        minZoom: 18,
        id: 'mapbox.pirates',
        accessToken: 'pk.eyJ1Ijoia2FuYXRvaG9kZXN0IiwiYSI6ImNpaDh5YzNlMjBzY212ZGt0eXllOHlsZmsifQ.VDtEXP56TZIeGEWQUrpjZQ'
    }).addTo(map);

    map.panTo([52.0131627, 4.3799595]);

    var data = { "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.380900263786316, 52.012699242537884 ], [ 4.382160902023315, 52.01304922439026 ], [ 4.38255250453949, 52.012702544266254 ], [ 4.381345510482788, 52.012270015773964 ], [ 4.380900263786316, 52.012699242537884 ] ] ] } } ] };

    L.geoJson(data).addTo(map);

    window.setInterval(function()
    {
        var random = Math.floor(Math.random() * 20);
        var random_2 = Math.floor(Math.random() * 20);

        //Set radius and latlng
        circle_a.setRadius(random);
        //circle_a.setLatLng([52.0129000, 4.3820000]);
        circle_a.setLatLng([52.0123000, 4.3818000]);
        circle_a.setStyle({color: "#e74c3c", weight: 1});

        //Set radius and latlng
        circle_b.setRadius(random_2);
        circle_b.setLatLng([52.0123000, 4.3818000]);
        circle_b.setStyle({color: "#2980b9", weight: 3});

    }, 1000);
});
