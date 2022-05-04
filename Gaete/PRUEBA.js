
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

 
//REGISTRO VALIDACIONES
const form = document.getElementById("formulario__register");
//  EXPRESIONES REGULARES
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const regexTel = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
const regexPas = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
// VALIDACIONES
var nom = document.getElementById("nombre");
var apel = document.getElementById("apellido");
var correo = document.getElementById("correoregistro");
var tel = document.getElementById("telefono");
var passR = document.getElementById("passwordregistro");
var passR2 = document.getElementById("passwordregistro2");

//MENSAJE QUE ENVIAREMOS
var msj = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let msjMostrar = "";
  let entrarRegistro = false;

  //         NOMBRE
  if (nom.value.length < 2 || nom.value.length > 10) {
    msjMostrar += "Longitud invalida del Nombre, intente nuevamente <br>";
    entrarRegistro = true;
  }
  //         APELLIDO
  if (apel.value.length < 2 || apel.value.length > 10) {
    msjMostrar += "Longitud invalida del Apellido, intente nuevamente <br>";
    entrarRegistro = true;
  }
  //          CORREO
  if (!regexEmail.test(correo.value)) {
    msjMostrar += "El email no es valido <br>";
    entrarRegistro = true;
  }
  //          TELEFONO
  if (!regexTel.test(tel.value)) {
    msjMostrar += "El telefono no es valido<br>";
    entrarRegistro = true;
  }
  //          CONTRASEÑA
  if (!regexPas.test(passR.value)) {
    msjMostrar += "Contraseña incorrecta, intente nuevamente <br>";
    entrarRegistro = true;
  }
  if (passR != passR2) {
    msjMostrar += "Contraseña no coinciden"
    entrarRegistro = true;
  } 

  // Con esto validamos que la letra sea mayuscula del nombre y el apellido
  var letraInicialNombre = nom.value.charAt(0);
  var letraInicialApellido = apel.value.charAt(0);
  if (!esMayuscula(letraInicialNombre) || !esMayuscula(letraInicialApellido)) {
    msjMostrar += "La primera letra es minúscula del Nombre o Apellido <br>";
    entrarRegistro = true;
  }

  // ENVIAR FORMULARIO REGISTRO
  if (entrarRegistro) {
    msj.innerHTML = msjMostrar;
  } else {
    msj.innerHTML = "Enviado";
  }
});
// Con esto validamos que sea una mayuscula la letra
function esMayuscula(letra) {
  return letra == letra.toUpperCase();
}

