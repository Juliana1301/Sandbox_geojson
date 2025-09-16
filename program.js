// Mapa y capa base
var map = L.map("map");
map.setView([4.628, -74.145], 15); // Centrado en tu polígono

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Cargar y mostrar GeoJSON
async function cargarGeoJSON() {
    try {
        const response = await fetch("map.geojson");
        const data = await response.json();
        
        // Crear capa con estilo visible
        const capa = L.geoJSON(data, {
            style: {
                color: "black",
                weight: 3,
                fillColor: "gray",
                fillOpacity: 0.5
            }
        }).addTo(map);
        
        // Ajustar vista al polígono
        map.fitBounds(capa.getBounds());
        
    } catch (error) {
        console.error("Error cargando GeoJSON:", error);
    }
}

// Ejecutar
cargarGeoJSON();