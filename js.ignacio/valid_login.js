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
  if (nom.value.length < 2 || nom.value.length > 20) {
    msjMostrar += "Longitud invalida del Nombre, intente nuevamente <br>";
    entrarRegistro = true;
  }
  //         APELLIDO
  if (apel.value.length < 2 || apel.value.length > 20) {
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
  if (passR.value != passR2.value) {
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
