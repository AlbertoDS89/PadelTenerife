function recopilarFotosProducto(elemento){
  var datos = [];
  for (i = 0; i < elemento.fotos.length; i++) {
    var obj = {};
    obj.href = './imagenes/' + elemento.fotos[i];
    obj.title = elemento.name;
    datos.push(obj);
  }
  return datos;
}

function inicializarCookieBar(){
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
    policyURL: './paginasadicionales/Pcookies.html'
  });
}

function mostrarProducto(elemento) {
    $('.nombreProduc > h1').html(elemento.name);
    $('.precio-value').html(elemento.precio);
    $('.preciodesc-value').html(elemento.precioDto);
    $('.marca-value').html(elemento.marca);
    $('.year-value').html(elemento.temporada);
    $('.tipo-value').html(elemento.tipo);
    $('.unidRest-value').html(elemento.cantidad);
    $('.unidVend-value').html(elemento.vendidas);

    if (elemento.enStock) {
      $('.stock > p').html('<a title="comprar" href="./paginasadicionales/comprar.html"><img src="./imagenes/comprar.png" alt="comprar" />');
    } else {
      $('.stock > p').html('<strong>En stock:</strong> No');
    }

    $('.desc > p').html(elemento.descripcion);

    // Arreglar (con elementos y no como cadena de texto)
    $('#foto-producto').html('<a id="enlace-producto" href="#" class="swipebox"><img id="imagen-producto\"></a>');

    $('#imagen-producto').attr('src', './imagenes/' + elemento.fotos[0]);

    $('#enlace-producto').click(function(e) {
      e.preventDefault();
      var fotosDelProducto = recopilarFotosProducto(elemento);
      $.swipebox(fotosDelProducto);
    });
}

function inicializarBuscador(){
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
}

$(document).ready(function() {
  AOS.init();
  inicializarCookieBar();
  inicializarBuscador();
});
