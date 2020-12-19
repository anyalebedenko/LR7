function MapInKiev(map){
  map.setCenter({lat:50.4501, lng:30.5234});
  map.setZoom(15);
}
var platform = new H.service.Platform({
  apikey: 'oD3Qp2nEt9OF31ilSJv8rQqyVJW3OPJmR6DHSn-k1pU'
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);
map.addLayer(defaultLayers.vector.normal.traffic);
map.addLayer(defaultLayers.vector.normal.trafficincidents);
window.onload = function () {
  MapInKiev(map);
}