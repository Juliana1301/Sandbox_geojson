
var map = L.map("map");

map.setView ([4.628229870972342, -74.06588664838725],15);



var urlMap = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

var config = {
    maxZoom: 19


};
var layer = L.tileLayer(urlMap, config);


layer.addto(map)




async function leerGeoJSON(url) {
   
    var response = await fetch (url);
    return await response.json();
}
var myfile = leerGeoJSON("map.geojson");

const geoLayer = L.geoJSON(myfile);

geoLayer.addto(map)
