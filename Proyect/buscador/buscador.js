let pages = [];

// Función para cargar las páginas desde el archivo JSON usando XMLHttpRequest
function loadPages() {
    // Creamos un objeto XMLHttpRequest, que nos permite hacer peticiones HTTP asíncronas
    var xhr = new XMLHttpRequest();

    // Configuramos la petición
    xhr.open('GET', './buscador.json', true);

    xhr.onload = function() {
        // Si la respuesta del servidor es satisfactoria
        if (this.status >= 200 && this.status < 300) {
            // Parsea y carga los datos en la variable 'pages'
            pages = JSON.parse(this.responseText);
        } else {
            // Maneja errores de respuesta del servidor
            console.error('Error al cargar el archivo JSON:', this.statusText);
        }
    };

    xhr.onerror = function() {
        // Maneja errores de red
        console.error('Error de red.');
    };
    // Envía la petición
    xhr.send();
}


// Cargar las páginas al iniciar
loadPages();

document.getElementById('searchForm').onsubmit = function(event) {
    document.getElementById('noResults').style.display = 'none';
    
    event.preventDefault(); // Prevenir la recarga de la página
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Filtrar las páginas que coincidan con el término de búsqueda
    let searchResults = pages.filter(function(page) {
        return page.title.toLowerCase().indexOf(searchTerm) > -1;
    });

    // Si hay resultados, redirige al primero. Podrías mejorar esto para mostrar una lista.
    if (searchResults.length > 0) {
        window.location.href = searchResults[0].url;
    } else {
        document.getElementById('noResults').style.display = 'block';   

    }
};