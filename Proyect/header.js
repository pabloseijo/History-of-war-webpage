/**
 * Función para mostrar y ocultar el menú de navegación en dispositivos móviles
 */

function myFunction() {
    var x = document.getElementsByClassName("header-list")[0];
    if (window.innerWidth < 768) {
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}

// Evento para manejar el cambio de tamaño de la ventana
window.addEventListener('resize', function() {
    var x = document.getElementsByClassName("header-list")[0];
    if (window.innerWidth >= 768) {
        // Elimina el estilo en línea para permitir que los estilos CSS se apliquen
        x.style.display = "";
    }
});