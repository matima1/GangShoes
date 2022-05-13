//CONTACTO VALIDACIONES
const form = document.getElementById("formx");
var nom = document.getElementById("nombre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let mensajeNombreApellido = "";

  let contacto = false;

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




  // ENVIAR FORMULARIO REGISTRO
  if (contacto) {
    msj.innerHTML = mensajeNombreApellido;
  } else {
    msj.innerHTML = "Formulario Enviado";
  }
});
// Con esto validamos que sea una mayuscula la letra
function esMayuscula(letra) {
  return letra == letra.toUpperCase();
}
