// var visualizacionProducto = document.getElementById('visualizacionProducto');
// var producto = productos[1];
// var numeroImagenes=producto.fotos.length;
// function addImagen(contenedor, urlImagen){
//   var imagen =  document.createElement('img');
//   contenedor.appendChild(imagen);
//     imagen.src = 'imagenes/' + urlImagen;
// }
//
// var contador;
// for (contador=0; contador<numeroImagenes; contador ++){
//   addImagen(visualizacionProducto, producto.fotos[contador]);
// }

$(document).ready(function() {
  AOS.init();
});

var options = {
  url: "/PadelTenerife/js/productos.json",
  getValue: "name",
  cssClasses: "item-name",
  template: {
    type: "iconLeft",
    fields: {
      iconSrc: "icon"
    }
  },

  list: {
    showAnimation: {
      type: "slide"
    },
    hideAnimation: {
      type: "slide"
    }
  }

};

$("#buscador").easyAutocomplete(options);
