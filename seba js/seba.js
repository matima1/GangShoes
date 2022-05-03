$(document).ready(function() {

    $("#form1").submit(function(e){
    e.preventDefault();
    let mensajesMostrar= "";
    let entrar = false;

    var nombre= ($("#nom").val())

    if(nombre.trim().length<4 || nombre.trim().length >20 ){
    mensajesMostrar += "la longitud no es la correcta";
    entrar = true;
    }

    var letraInicial = nombre.charAt(0);

    if(!esMayuscula(letraInicial)){
    mensajesMostrar +="la primera letra es minuscula <br>";
    entrar= true;
    }

    if(entrar){
    $("#mensajes").html(mensajesMostrar);
    }
    else{
    $("#mensajes").html("formulario enviado");
    }


    })

    function esMayuscula(letra){
        return letra == letra.toUpperCase();
    }
    });   

