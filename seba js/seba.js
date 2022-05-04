//CONTACTO VALIDACIONES
const form = document.getElementById("formx");
var nom = document.getElementById("nombre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let mensajeNombreApellido = "";

  let contacto = false;

  function validanombre(){
    var elemento = document.getElementById("nom");
    if(elemento.value == ""){
        alert ("El campo no puede quedar vacio ");
        return false;
    }
    return true;
}
    

function validatelefono(){
    var elemento = document.getElementById("precio");
    if( isNaN(elemento.value)){
        alert("el campo debe ser numerico");
        return false;
    }
    return true;
}

    

function validaasunto(){
    var elemento = document.getElementById("desc");
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
