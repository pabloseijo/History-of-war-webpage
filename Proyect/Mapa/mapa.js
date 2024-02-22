let map = L.map('map').setView([42.873140, -8.553193], 18);

var swordIcon = L.icon({
    iconUrl: '../Images/espadasMapa.png', // Asegúrate de que la ruta a tu imagen es correcta y accesible
    iconSize: [30, 30], // Tamaño del icono, ajustado a 30x30
    iconAnchor: [15, 30], // Ajustado para que el pico del corazón apunte al lugar exacto
    popupAnchor: [0, -30] // Ajustado para que el popup se abra hacia arriba del corazón
});



// Agregar tileLayer mapa base de CartoDB estilo Positron (estilo minimalista)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e) {
    let coords = e.target.value.split(",");
    map.flyTo(coords, 13);
});

L.marker([43.312085, -5.058803], {icon: swordIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Covadonga</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    });

