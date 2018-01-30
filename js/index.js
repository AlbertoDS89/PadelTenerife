
$(document).ready(function () {
    AOS.init();
});

$(document).ready(function() {
  $.cookieBar({
    message: 'Esta web utiliza cookies. ¿Acepta las condiciones de uso?.',
    acceptButton: true,
    acceptText: 'Acepto',
    acceptFunction: null,
    declineButton: true,
    declineText: 'No acepto',
    fixed: true,
    bottom: true,
    zindex: '9',
    policyButton: true,
    policyText: 'Leer más',
    policyURL: 'https://albertods89.github.io/PadelTenerife/paginasadicionales/Pcookies.html'
  });
});

function mostrarProducto(elemento) {
    $('.nombreProduc > h1').html(elemento.name);
    $('.precio > p').html('<strong>Precio:</strong> ' + elemento.precio);
    $('.preciodesc > p').html('<strong>Precio final:</strong> ' + elemento.precioDto);
    $('.marca > p').html('<strong>Marca:</strong> ' + elemento.marca);
    $('.year > p').html('<strong>Año:</strong>'  + elemento.temporada);
    $('.tipo > p').html('<strong>Tipo:</strong> ' + elemento.tipo);
    $('.unidRest > p').html('<strong>Unidades Restantes:</strong> ' + elemento.cantidad);
    $('.unidVend > p').html('<strong>Unidades Vendidas:</strong> ' + elemento.vendidas);

    if (elemento.enStock === true) {
      $('.stock > p').html('<a title="comprar" href="./paginasadicionales/comprar.html"><img src="./imagenes/comprar.png" alt="comprar" />');
    } else {
      $('.stock > p').html('<strong>En stock:</strong> No');
    }

    $('.desc > p').html(elemento.descripcion);

    // Arreglar (con elementos y no como cadena de texto)
    $('#foto-producto').html("<a id=\"enlace-producto\" href=\"#\" class=\"swipebox\"><img id=\"imagen-producto\"></a>");

    $('#imagen-producto').attr('src', './imagenes/' + elemento.fotos[0]);

    $( '#enlace-producto' ).click( function( e ) {
      e.preventDefault();

      var datos = [];
      for (i = 0; i < elemento.fotos.length; i++) {
        var obj = {};
        obj.href = './imagenes/' + elemento.fotos[i];
        obj.title = elemento.name;
        datos.push(obj);
      }

      console.log('muestra:', datos);
      $.swipebox( datos );
    } );
}

var options = {
    url: "./js/productos.json",
    getValue: "name",
    cssClasses: "item-name",
    template: {
        type: "iconLeft",
        fields: {
            iconSrc: "icon"
        }
    },

    list: {
        onClickEvent: function () {
            var elemento = $("#buscador").getSelectedItemData();
            mostrarProducto(elemento);
        },
        maxNumberOfElements: 10,
        match: {
            enabled: true
        },
        showAnimation: {
            type: "slide"
        },
        hideAnimation: {
            type: "slide"
        }

    },
    theme: "round"

};

$("#buscador").easyAutocomplete(options);

$("#enviarform").click(function(e) {
    var correcto = ($(".marcas-padel input[type=checkbox]:checked").length > 0);

    if (correcto == false) {
      alert('Selecciona al menos una de las marcas');
      return false;
    }
});
