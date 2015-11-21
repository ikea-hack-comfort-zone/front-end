var server_addres = "http://128.199.60.134:3000/api/sensor-data";

$(document).ready(function()
{
    window.setInterval(getData, 2000);
});

function getData()
{
    //updateDom({ "temp" : 20, "light" : 5, "mic" : 45 });
    $.getJSON( server_addres, function( data ) 
    {
            updateDom(data);    
    });
}

function updateDom(data)
{
    $('.light').html('Light: '+data.light);
    $('.temp').html('Temp: '+data.temp);
    $('.mic').html('Mic: '+data.mic);
}