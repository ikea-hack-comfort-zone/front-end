<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <!--The viewport meta tag is used to improve the presentation and behavior of the samples 
      on iOS devices-->
    <meta name="viewport"
          content="initial-scale=1, maximum-scale=1,user-scalable=no">
    <title>
        Map test
    </title>

    <link rel="stylesheet"
          href="http://js.arcgis.com/3.14/esri/css/esri.css"/>
    <style>
      html, body, #mapDiv {
        padding: 0;
        margin: 0;
        height: 100%;
      }

    </style>

    <script src="http://js.arcgis.com/3.14/"></script>
    <script>
      var map;

      require([
        "esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/ImageParameters",
        "dojo/domReady!"
      ],
        function (Map, ArcGISDynamicMapServiceLayer, ImageParameters) {

          map = new Map("mapDiv", {
            basemap: "streets",
            center: [-52.0131627,4.3799595],
            zoom: 7
          });

          //Use the ImageParameters to set map service layer definitions and map service visible layers before adding to the client map.
          var imageParameters = new ImageParameters();

          //layer.setLayerDefinitions takes an array.  The index of the array corresponds to the layer id.
          //In the sample below I add an element in the array at 3,4, and 5.
          //Those array elements correspond to the layer id within the remote ArcGISDynamicMapServiceLayer
          var layerDefs = [];
          layerDefs[5] = "STATE_NAME='Kansas'";
          layerDefs[4] = "STATE_NAME='Kansas' and POP2007>25000";
          layerDefs[3] = "STATE_NAME='Kansas' and POP2007>25000";
          imageParameters.layerDefinitions = layerDefs;

          //I want layers 5,4, and 3 to be visible
          imageParameters.layerIds = [5, 4, 3];
          imageParameters.layerOption = ImageParameters.LAYER_OPTION_SHOW;
          imageParameters.transparent = true;

          //construct ArcGISDynamicMapServiceLayer with imageParameters from above
          var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer",
            {"imageParameters": imageParameters});

          map.addLayer(dynamicMapServiceLayer);
        });
    </script>
  </head>
  <body>
    <div id="mapDiv"></div>
  </body>
</html>