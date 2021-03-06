var server_addres = "http://128.199.60.134:3000/api/sensor-data";
var debugging = false;

var edisons = {
            1: {
                'LatLng': [52.0126500, 4.3815000],
                'class':'circle-a'
            },
            2: {
                'LatLng': [52.0123000, 4.3818000],
                'class':'circle-b'
            },
            3: {
                'LatLng': [52.01266, 4.38094],
                'class':'circle-c'
            },
            4: {
                'LatLng': [52.01251, 4.38174],
                'class':'circle-d'
            },
            5: {
                'LatLng': [52.01236, 4.38134],
                'class':'circle-e'
            }             
        };
        
$(document).ready(function()
{
    map = L.map('map').setView([51.505, -0.09], 18);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
        attribution: 'ikea map',
        maxZoom: 20,
        id: 'mapbox.emerald',
        accessToken: 'pk.eyJ1Ijoia2FuYXRvaG9kZXN0IiwiYSI6ImNpaDh5YzNlMjBzY212ZGt0eXllOHlsZmsifQ.VDtEXP56TZIeGEWQUrpjZQ'
    }).addTo(map);

    map.panTo([52.01252, 4.38142]);

    var data = { "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": { "stroke": "#ddd", "stroke-width": 10, "stroke-opacity": 1, "fill": "#95a5a6", "fill-opacity": 0.5 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.3808358907699585, 52.012722354631435 ], [ 4.381324052810669, 52.012894044095404 ], [ 4.382075071334839, 52.01226176137276 ], [ 4.381750524044037, 52.012141246941844 ], [ 4.381519854068756, 52.012331098295476 ], [ 4.381324052810669, 52.01226011049234 ], [ 4.3808358907699585, 52.012722354631435 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.381849765777588, 52.012448310468145 ], [ 4.381656646728516, 52.01237732285096 ], [ 4.381565451622009, 52.01246647007306 ], [ 4.381753206253052, 52.012532504937894 ], [ 4.381849765777588, 52.012448310468145 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.381715655326843, 52.012562220595285 ], [ 4.3815359473228455, 52.012497836646 ], [ 4.381455481052398, 52.01257047494104 ], [ 4.381645917892456, 52.0126282553188 ], [ 4.381715655326843, 52.012562220595285 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.381643235683441, 52.012631557052416 ], [ 4.3814608454704285, 52.01257212581001 ], [ 4.3813589215278625, 52.012664574375194 ], [ 4.381527900695801, 52.01272895808454 ], [ 4.381643235683441, 52.012631557052416 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.381527900695801, 52.01272730722135 ], [ 4.3813589215278625, 52.0126662252407 ], [ 4.381291866302489, 52.01272400549478 ], [ 4.381458163261414, 52.01278178567428 ], [ 4.381527900695801, 52.01272730722135 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.381179213523865, 52.01284451835608 ], [ 4.381222128868103, 52.01281315202619 ], [ 4.381364285945892, 52.01285937608365 ], [ 4.381324052810669, 52.012894044095404 ], [ 4.381179213523865, 52.01284451835608 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.381458163261414, 52.01278013481305 ], [ 4.381289184093475, 52.012722354631435 ], [ 4.381251633167266, 52.012758673611444 ], [ 4.3814098834991455, 52.0128148028862 ], [ 4.381458163261414, 52.01278013481305 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.381117522716522, 52.01262000098368 ], [ 4.381243586540222, 52.01266292350964 ], [ 4.381442070007324, 52.01248628054277 ], [ 4.3813857436180115, 52.01246812094587 ], [ 4.3812355399131775, 52.01260019057321 ], [ 4.381168484687804, 52.012578729285295 ], [ 4.381117522716522, 52.01262000098368 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.3810343742370605, 52.01275702274935 ], [ 4.381106793880462, 52.012689337351276 ], [ 4.381197988986969, 52.012714100313666 ], [ 4.381152391433716, 52.01274711757556 ], [ 4.381112158298492, 52.012735561536644 ], [ 4.381077289581299, 52.01277022964435 ], [ 4.3810343742370605, 52.01275702274935 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.38151717185974, 52.012331098295476 ], [ 4.381855130195618, 52.012448310468145 ], [ 4.382072389125823, 52.01226011049234 ], [ 4.381750524044037, 52.012141246941844 ], [ 4.38151717185974, 52.012331098295476 ] ] ] } }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 4.380830526351929, 52.01272070376799 ], [ 4.380943179130553, 52.012763626197334 ], [ 4.380970001220703, 52.01273886326234 ], [ 4.380860030651092, 52.0126975916736 ], [ 4.380830526351929, 52.01272070376799 ] ] ] } } ] };

    L.geoJson(data, {color: "#2c3e50", weight: 1}).addTo(map);

    Object.keys(edisons).forEach(function(item, index)
    {
        edisons[item].circle = L.circle(edisons[item].LatLng, 10).setStyle({className: "circle " + edisons[item].class}).addTo(map);
    });

    update();

    function update()
    {
        $.getJSON( server_addres, function( data ) 
        {
                Object.keys(data).forEach(function(item, index)
                {
                    var device = data[item],
                           color = device.temp < 22 ? '#2980b9' : '#e74c3c';

                   //change the style with an awesome animation
                   $('.'+edisons[item].class).css('-webkit-transform', "scale("+ 3.60674 * Math.log(0.0131951 * device.sound) +")");

                                                                        //blue -         red
                   var color = device.temp < 22 ? '#2980b9' : '#e74c3c';
                
                    edisons[item].circle.setStyle(
                        {
                            color: color, 
                            weight: 0
                        });
                    });       
                
                    setTimeout(function()
                    {
                        update();
                    }, 100);
        });
    }

    if(debugging)
        map.on('click', onMapClick);
});

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
