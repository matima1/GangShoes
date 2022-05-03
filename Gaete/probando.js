$(document).ready(function(){
    $("formulariomio").submit(function(e){
        e.preventDefault();
        let mensajesMostrar="";
        let entrar=false;

        var nombre=$("#nombre").val();
        if(nombre.trim().length<4 || nombre.trim().lenght>7){
            mensajesMostrar+="La longitud no es correcta";
            entrar=true;
        }

    });

});



