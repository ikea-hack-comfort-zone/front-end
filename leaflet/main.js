$(document).ready(function()
{
    map = L.map('map').setView([51.505, -0.09], 13);
    a = L.circle([52.0131627, 4.3799595], 200).addTo(map);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'ikea map',
        maxZoom: 18,
        id: 'mapbox.pirates',
        accessToken: 'pk.eyJ1Ijoia2FuYXRvaG9kZXN0IiwiYSI6ImNpaDh5YzNlMjBzY212ZGt0eXllOHlsZmsifQ.VDtEXP56TZIeGEWQUrpjZQ'
    }).addTo(map);

    map.panTo([52.0131627, 4.3799595]);

    window.setInterval(function()
    {
        var random = Math.floor(Math.random() * 100);
        map.removeLayer(a); 
        a = L.circle([52.013162, 4.3799595], random).addTo(map);
    }, 2000);
});
