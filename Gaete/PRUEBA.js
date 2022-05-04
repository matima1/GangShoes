const form = document.getElementById("formx");


window.onload = iniciar;




function iniciar (){
    document.getElementById("enviar").addEventListener('click',validar,false);
}

       function validanombre(){
    var elemento = document.getElementById("nombre");
    if(elemento.value == ""){
        alert ("El campo no puede quedar vacio ");
        return false;
    }
    return true;
}

function validaemail(){
    var elemento = document.getElementById("email");
    if(email.elemento("@") == -1 || email.length < 6){       
        alert("Completa correctamente tu email.");
        return false;
    }
    return true;
}    



function validatelefono(){
    var elemento = document.getElementById("telefono");
    if( isNaN(elemento.value)){
        alert("el campo debe ser numerico");
        return false;
    }
    return true;
}

    function validaasunto(){
        var elemento = document.getElementById("asunto");
        if(elemento.value == ""){
            alert ("El campo no puede quedar vacio ");
            return false;
        }
        return true;
}

function validaasunto(){
    var elemento = document.getElementById("comentario");
    if(elemento.value == ""){
        alert ("El campo no puede quedar vacio ");
        return false;
    }
    return true;
}

 




