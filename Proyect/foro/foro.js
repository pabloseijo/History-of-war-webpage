$(document).ready(function () {
    // Cargar los posts desde el archivo XML
    $("#btn_mostrar").click(function () {
        $(this).hide(); // Oculta el botón

        $.ajax({
            type: "GET",
            url: "datos.xml", // Ajusta esta ruta
            dataType: "xml",
            success: function (xml) {
                $('#fill_data').empty();
                $(xml).find('post').each(function () {
                    let postId = $(this).attr('id');
                    let imagenSrc = $(this).find('imagen').attr('src');
                    let titulo = $(this).find('titulo').text();
                    let autor = $(this).find('autor').text();
                    let pfpSrc = $(this).find('pfp').attr('src') || "../Images/pfp.png";
                    let likes = $(this).find('likes').text() || "0"; 
                    let dislikes = $(this).find('dislikes').text() || "0";
                    let texto = $(this).find('texto').text();

                    let postDiv = $('<div class="post" id="' + postId + '"></div>');
                    if (imagenSrc) {
                        postDiv.append($('<img class="img_post" src="' + imagenSrc + '" alt="Imagen del post">'));
                    }
                    postDiv.append($('<h2 class="titulo">' + titulo + '</h2>'));
                    let infoDiv = $('<div class="info"></div>').append(
                        $('<img class="pfp" src="' + pfpSrc + '" width="50px" height="50px" alt="Imagen de perfil">'),
                        $('<p class="autor">' + autor + '</p>')
                    );
                    postDiv.append(infoDiv);
                    postDiv.append($('<p class="texto oculto">' + texto + '</p>'));
                    postDiv.append($('<button class="mostrar-descripcion"><i class="fas fa-plus"></i> Descripción</button>'));

                    // Añadir contadores de likes y dislikes
                    let votingDiv = $('<div class="voting-buttons"></div>').append(
                        $('<i class="fa fa-arrow-up like-button" aria-hidden="true"></i>'),
                        $('<span class="likes-count">' + likes + '</span>'),
                        $('<i class="fa fa-arrow-down dislike-button" aria-hidden="true"></i>'),
                        $('<span class="dislikes-count">' + dislikes + '</span>')
                    );
                    postDiv.append(votingDiv);

                    $('#fill_data').append(postDiv);
                });
            },
            error: function (xhr, status, error) {
                console.error("Error al cargar el archivo XML:", error);
            }
        });
    });

    // Manejador de clic para mostrar/ocultar la descripción
    $(document).on('click', '.mostrar-descripcion', function() {
        $(this).prev('.texto').toggleClass('oculto');
        // Cambia el ícono y el texto del botón dependiendo del estado
        let icon = $(this).find('i');
        if (icon.hasClass('fa-plus')) {
            icon.removeClass('fa-plus').addClass('fa-minus');
            // Cambiar solo el texto, manteniendo el ícono
            $(this).contents().filter(function(){
                return this.nodeType == 3;
            }).remove();
            $(this).append(' Ocultar');
        } else {
            icon.removeClass('fa-minus').addClass('fa-plus');
            // Cambiar solo el texto, manteniendo el ícono
            $(this).contents().filter(function(){
                return this.nodeType == 3;
            }).remove();
            $(this).append(' Descripción');
        }
    });


    // Manejador de eventos para los botones de like y dislike
    $(document).on('click', '.like-button, .dislike-button', function() {
        let isLikeButton = $(this).hasClass('like-button');
        let likesCount = $(this).siblings('.likes-count');
        let dislikesCount = $(this).siblings('.dislikes-count');

        // Toggle active class
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            // Incrementa o decrementa el contador adecuadamente
            if (isLikeButton) {
                likesCount.text(parseInt(likesCount.text()) + 1);
                // Si el botón opuesto está activo, ajusta su contador también
                if ($(this).siblings('.dislike-button').hasClass('active')) {
                    $(this).siblings('.dislike-button').removeClass('active');
                    dislikesCount.text(parseInt(dislikesCount.text()) - 1);
                }
            } else {
                dislikesCount.text(parseInt(dislikesCount.text()) + 1);
                if ($(this).siblings('.like-button').hasClass('active')) {
                    $(this).siblings('.like-button').removeClass('active');
                    likesCount.text(parseInt(likesCount.text()) - 1);
                }
            }
        } else {
            if (isLikeButton) {
                likesCount.text(parseInt(likesCount.text()) - 1);
            } else {
                dislikesCount.text(parseInt(dislikesCount.text()) - 1);
            }
        }
    });
     // Evento de clic para mostrar la imagen ampliada
            //lo ponemos con on para que tambien se apliqeu a las posts nuevos que introducimos y no solo a los que estan por defecto.
    $(document).on('click', '.img_post, .pfp', function () {
        let src = $(this).attr('src');
        if (src == null) console.log("source = NULL");
        $('#imagenAmpliadaContenido').attr('src', src);
        $('#imagenAmpliada').fadeIn();
    });

    // Evento de clic para ocultar la imagen ampliada
    $('#imagenAmpliada').click(function () {
        $(this).fadeOut();
    });

    $('.lista_nav li a').mouseover(function () {
        $(this).find('i').css('visibility', 'visible');
    });

    $('.lista_nav li a').mouseout(function () {
        $(this).find('i').css('visibility', 'hidden');
    });

    $("#mostrarFormBtn").click(function() {
        var formVisible = $("#formContainer").is(":visible");
        $("#formContainer").slideToggle();
        // Cambiar el ícono del botón dependiendo del estado del formulario
        $(this).html(formVisible ? '<i class="fas fa-plus"></i>' : '<i class="fas fa-minus"></i>');
    });
    // Manejo del envío del formulario para crear un nuevo post
    $('#miForm').submit(function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado

        // Recopilar la información del formulario
        let titulo = $('#input_titulo').val();
        let texto = $('#input_txt').val();
        let archivo = $('#myfile')[0].files[0];

        // Crear el nuevo post, incluyendo el botón de eliminar
        let nuevoPostHTML = '<div class="post">' +
                                (archivo ? '<img class="img_post" src="' + URL.createObjectURL(archivo) + '">' : '') +
                                '<h2 class="titulo">' + titulo + '</h2>' +
                                '<div class="info"><img class="pfp" src="../Images/pfp.png" width="50px" height="50px"><p class="autor">GUEST</p></div>' +
                                '<p class="texto oculto">' + texto + '</p>' +
                                '<button class="mostrar-descripcion"><i class="fas fa-plus"></i> Descripción</button>' +
                                '<div class="voting-buttons">' +
                                    '<i class="fa fa-arrow-up like-button" aria-hidden="true"></i><span class="likes-count">0</span>' +
                                    '<i class="fa fa-arrow-down dislike-button" aria-hidden="true"></i><span class="dislikes-count">0</span>' +
                                '</div>' +
                                '<button class="boton-eliminar"> <span class="texto-eliminar animate__animated">Delete</span><i class="fas fa-trash animate__animated"></i></button>'
                            '</div>';

        // Añadir el nuevo post al principio de la sección principal
        $('#fill_data').prepend(nuevoPostHTML);

        // Limpiar el formulario y ocultarlo
        $('#miForm')[0].reset();
        $("#formContainer").slideUp();
        // Restablecer el ícono del botón flotante
        $("#mostrarFormBtn").html('<i class="fas fa-plus"></i>');
    });

    // Evento de clic para eliminar un post
    $(document).on('click', '.boton-eliminar', function() {
        $(this).closest('.post').remove(); // Elimina el post más cercano al botón clickeado
    });


});

