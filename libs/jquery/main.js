$(document).ready(function () {
    
    /*Esta variable se encarga de almacenar el total de li que posee el div de slider*/
    var imgItems = $('.slider li').length;
    
    imgItemsG = imgItems;

    /**Recorrer todos los items que contiene el imgItems para asignar los li correspondientes */
    for(i = 1; i <= imgItems; i++){
        /*Agregar la cantidad de li(circulos) dependiendo de la cantidad de sliders que haya */
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }

    $('.slider li').hide(); //ocultar todos los slides al inicio
    $('.slider li:first').show(); //mostrar solo el primer slide al inicio de la pagina

    /* Llamar a la pagination para llamar a sus li, llamamos al primero de estos
    y asignamos un color naranja */
    $('.pagination li:first').css({'color':'#ff6347'});

    /* Funcion para elegir que slide se muestra al dar click a los li circulos o flechas */
    $('.pagination li').click(paginacion);
    $('.derecha span').click(derSlide);
    $('.izquierda span').click(izqSlide);
    
    // Pasar los slides de manera automatica cada x tiempo a x direccion
    setInterval(function () {
        derSlide();
    }, 6000);

});

function paginacion() {

    //para saber a que circle le estamos dando click +1 es para que no empiece en 0
    var paginacionPos = $(this).index() + 1;

    $('.slider li').hide();//esconder todos los slide igual
    $('.slider li:nth-child('+ paginacionPos +')').fadeIn(); //Mostrar al slider que se le da click con los li circle

    $('.pagination li').css({'color': '##808080'});
    $(this).css({'color': '#ff6347'});//Poner de color naranja al cicrle de la pagination que se le de click

}

var imgItemsG = 0; //var global que almacena la cantidad de imgItems
var imgPos = 1;//posicion de la imagen

function derSlide() {
    
    if (imgPos >= imgItemsG) { imgPos = 1; }
    else{imgPos++;} //aumentar la var para asignar ese valor y cambiar entre los slides dependiendo del valor

    $('.slider li').hide();//esconder todos los slide igual
    $('.slider li:nth-child('+ imgPos +')').fadeIn(); //Mostrar al slider que se le da click con los li circle

    $('.pagination li').css({'color': '##808080'});
    $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#ff6347'});//Poner de color naranja al cicrle de la pagination que se le de click

}

function izqSlide() {
    
    if (imgPos <= 1) { imgPos = 4; }
    else {imgPos--;} //disminuir la var para asignar ese valor y cambiar entre los slides dependiendo del valor

    $('.slider li').hide();//esconder todos los slide igual
    $('.slider li:nth-child('+ imgPos +')').fadeIn(); //Mostrar al slider que se le da click con los li circle

    $('.pagination li').css({'color': '##808080'});
    $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#ff6347'});//Poner de color naranja al cicrle de la pagination que se le de click

}

