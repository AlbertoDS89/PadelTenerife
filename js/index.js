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

function mostrarProducto(elemento){

  console.log('elemento', elemento);
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
    onSelectItemEvent: function() {
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
