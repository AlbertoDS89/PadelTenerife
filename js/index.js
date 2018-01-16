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

$(document).ready(function () {
    AOS.init();
});

function mostrarProducto(elemento) {
    $('.nombreProduc > h1').html(elemento.name);
    $('.precio > p').html('Precio:' + elemento.precio);
    $('.preciodesc > p').html('Precio final:' + elemento.precioDto);
    $('.marca > p').html('Marca:' + elemento.marca);
    $('.year > p').html('Año:' + elemento.temporada);
    $('.tipo > p').html('Tipo:' + elemento.tipo);
    $('.unidRest > p').html('Unidades Restantes:' + elemento.cantidad);
    $('.unidVend > p').html('Unidades Vendidas:' + elemento.vendidas);
    $('.desc > p').html(elemento.descripcion);
    $('#imagen-producto').attr('src', '/imagenes/' + elemento.fotos[0]);
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
