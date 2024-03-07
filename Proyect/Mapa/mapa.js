
//-------------------- Mapa --------------------
// Crear el mapa y asignarle una vista con una ubicación y un nivel de zoom
let map = L.map('map').setView([42.873140, -8.553193], 4);

//-------------------- Iconos Personalizados --------------------

// Icono personalizado para el marcador 
var swordIcon = L.icon({
    iconUrl: '../Images/espadasMapa.png', 
    iconSize: [30, 30], // Tamaño del icono
    iconAnchor: [15, 15], // El centro del icono se corresponderá con la coordenada del mapa
    popupAnchor: [0, -15] // Ajusta si es necesario para que el popup se abra en la posición deseada
});

// Icono personalizado para el marcador 
var shipIcon = L.icon({
    iconUrl: '../Images/barcoMapa.png', 
    iconSize: [30, 30], // Tamaño del icono
    iconAnchor: [15, 15], // El centro del icono se corresponderá con la coordenada del mapa
    popupAnchor: [0, -15] // Ajusta si es necesario para que el popup se abra en la posición deseada
});

// Icono personalizado para el marcador 
var gunIcon = L.icon({
    iconUrl: '../Images/gunMapa.png', 
    iconSize: [30, 30], // Tamaño del icono
    iconAnchor: [15, 15], // El centro del icono se corresponderá con la coordenada del mapa
    popupAnchor: [0, -15] // Ajusta si es necesario para que el popup se abra en la posición deseada
});

// Icono personalizado para el marcador 
var explosionIcon = L.icon({
    iconUrl: '../Images/boomMapa.png', 
    iconSize: [30, 30], // Tamaño del icono
    iconAnchor: [15, 15], // El centro del icono se corresponderá con la coordenada del mapa
    popupAnchor: [0, -15] // Ajusta si es necesario para que el popup se abra en la posición deseada
});

//-------------------- Mapa Base --------------------

// Agregar tileLayer mapa base de CartoDB estilo Positron (estilo minimalista)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

//-------------------- Barra de Navegación --------------------
// Agregar barra de navegación que nos permitira movernos por el mapa
document.getElementById('select-location').addEventListener('change', function(e) {
    let coords = e.target.value.split(",");
    map.flyTo(coords, 10);
});

//-------------------- Marcadores de las Batallas --------------------


// Marcador de la Batalla de Covadonga
L.marker([43.312085, -5.058803], {icon: swordIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Covadonga</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaCovadonga.html";
    });

// Marcador de la Batalla de Cannas
L.marker([41.306381, 16.132502], {icon: swordIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Cannas</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaCannas.html";
    });

// Marcador de la Batalla de Hulao
L.marker([34.843591, 113.206388], {icon: swordIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Hulao</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaHulao.html";
    });

// Marcador de la Batalla de Lepanto
L.marker([38.199982, 21.299997], {icon: shipIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Lepanto</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaLepanto.html";
    });

// Marcador de la Batalla de san Quintin
L.marker([49.849993, 3.290003], {icon: swordIcon}).addTo(map)
    .bindPopup('<h2>Batalla de San Quintin</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaSanQuintin.html";
    });

// Marcador de la Batalla de Shangai
L.marker([31.161227, 121.464406], {icon: gunIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Shanghai</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaShanghai.html";
    });

// Marcador de la Batalla de Stalingrado
L.marker([48.699035, 44.515133], {icon: gunIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Stalingrado</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaStalingrado.html";
    });

// Marcador de la Batalla de las Termopilas
L.marker([38.795876, 22.537006], {icon: swordIcon}).addTo(map)
    .bindPopup('<h2>Batalla de las Termópilas</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batatallaTermopilas.html";
    });

// Marcador de la Batalla del Bosque de TeutoBurgo
L.marker([52.408012, 8.129444], {icon: swordIcon}).addTo(map)
    .bindPopup('<h2>Batalla del Bosque de TeutoBurgo</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaTeutoburgo.html";
    });

// Marcador de la bomba de Hiroshima
L.marker([34.392938, 132.452553], {icon: explosionIcon}).addTo(map)
    .bindPopup('<h2>Destrucción de Hiroshima</h2>' + 
    '<p>La bomba atómica de Hiroshima fue lanzada por Estados Unidos el 6 de agosto de 1945, durante la Segunda Guerra Mundial. Resulto en la muerte de más de 140.000 personas.</p>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })

// Marcador de la bomba de Nagasaki
L.marker([32.772810, 129.864185], {icon: explosionIcon}).addTo(map)
    .bindPopup('<h2>Destrucción de Nagasaki</h2>' + 
    '<p>La bomba atómica de Nagasaki fue lanzada por Estados Unidos el 9 de agosto de 1945, durante la Segunda Guerra Mundial. Resulto en la muerte de más de 70.000 personas.</p>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })

// Marcador de la batalla de Avdiivka
L.marker([48.129628, 37.767856], {icon: gunIcon}).addTo(map)
    .bindPopup('<h2>Batalla de Avdiivka</h2>')
    .on('mouseover', function(e) {
        this.openPopup();
    })
    .on('mouseout', function(e) {
        this.closePopup();
    })
    .on('click', function(e) {
        window.location.href = "../AcontecimientosHistoricos/Batallas/batallaAvdiivka.html";
    });