
$(document).ready(function () {
    AOS.init();
});

//var disponibilidad = {
//  if (elemento.stock === true){
//  disponibilidad = 'Si';
//  {
//    else
//    disponibilidad = 'No';
//  }
//  }
//}

function mostrarProducto(elemento) {
    $('.nombreProduc > h1').html(elemento.name);
    $('.precio > p').html('<strong>Precio:</strong> ' + elemento.precio);
    $('.preciodesc > p').html('<strong>Precio final:</strong> ' + elemento.precioDto);
    $('.marca > p').html('<strong>Marca:</strong> ' + elemento.marca);
    $('.year > p').html('<strong>Año:</strong>'  + elemento.temporada);
    $('.tipo > p').html('<strong>Tipo:</strong> ' + elemento.tipo);
    $('.unidRest > p').html('<strong>Unidades Restantes:</strong> ' + elemento.cantidad);
    $('.unidVend > p').html('<strong>Unidades Vendidas:</strong> ' + elemento.vendidas);
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
