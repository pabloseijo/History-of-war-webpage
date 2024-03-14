// Supongamos que tienes un arreglo de objetos que representan tus páginas
let pages = [
    // Páginas principales
    {title: "mapa", url: "../Mapa/mapa.html"},
    {title: "aconteicmientos historicos", url: "../AcontecimientosHistoricos/AH.html"},
    {title: "biblioteca", url: "../biblioteca/biblioteca.html"},
    {title: "iniciar sesion", url: "../login/login.html"},
    {title: "batallas", url: "../AcontecimientosHistoricos/batallas.html"},
    {title: "guerras", url: "../AcontecimientosHistoricos/guerras.html"},

    // Batallas
    {title: "stalingrado", url: "../AcontecimientosHistoricos/batallas/batallaStalingrado.html"},
    {title: "stalingrado", url: "../AcontecimientosHistoricos/batallas/batallaStalingrado.html"},
    {title: "cannas", url: "../AcontecimientosHistoricos/batallas/batallaCannas.html"},
    {title: "covadonga", url: "../AcontecimientosHistoricos/batallas/batallaCovadonga.html"},
    {title: "hulao", url: "../AcontecimientosHistoricos/batallas/batallaHulao.html"},
    {title: "san quintin", url: "../AcontecimientosHistoricos/batallas/batallaSanQuintin.html"},
    {title: "shangai", url: "../AcontecimientosHistoricos/batallas/batallaShangai.html"},
    {title: "termopilas", url: "../AcontecimientosHistoricos/batallas/batallaTermopilas.html"},
    {title: "teutoburgo", url: "../AcontecimientosHistoricos/batallas/batallaTeutoburgo.html"},

    // Guerras
    {title: "conquista de america", url: "../AcontecimientosHistoricos/guerras/conquistaAmerica.html"},
    {title: "an lushan", url: "../AcontecimientosHistoricos/guerras/conquistaAmerica.html"},
    {title: "conquista de america", url: "../AcontecimientosHistoricos/guerras/guerraAnLushan.html"},
    {title: "guerra civil rusa", url: "../AcontecimientosHistoricos/guerras/guerraCivilRusa.html"},
    {title: "guerra civil taiping", url: "../AcontecimientosHistoricos/guerras/guerraCivilTaiping.html"},
    {title: "guerras napoleonicas", url: "../AcontecimientosHistoricos/guerras/guerrasNapoleonicas.html"},
    {title: "guerra de los treinta años", url: "../AcontecimientosHistoricos/guerras/guerraTreintaAnhos.html"},
    {title: "segunda guerra mundial", url: "../AcontecimientosHistoricos/guerras/segundaGuerraMundial.html"},
    {title: "segunda guerra sino japonesa", url: "../AcontecimientosHistoricos/guerras/segundaGuerraMundiaSino-Japonesa.html"},

    //Libros
    {title: "libros edad antigua", url: "../biblioteca/LibrosEA"},
    {title: "libros edad media", url: "../biblioteca/LibrosEMed"},
    {title: "libros edad moderna", url: "../biblioteca/LibrosEM"},
    {title: "libros edad contemporanea", url: "../biblioteca/LibrosEC"},
];

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