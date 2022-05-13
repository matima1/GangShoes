const form = document.getElementById("formulario");

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const regexTel = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
//VALIDACIONES
var nom = document.getElementById("nombre");
var correo = document.getElementById("correo");
var tel = document.getElementById("telefono");
var asunto = document.getElementById("asunto");
var comentario = document.getElementById("comentario");

var msj = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let msjMostrar = "";
  let enviar = false;

  // NOMBRE
  if (nom.value.length < 2 || nom.value.length > 20) {
    msjMostrar += "Longitud del nombre incorrecto, intente nuevamente <br>";
    enviar = true;
  }
  var letraInicialNombre = nom.value.charAt(0);
  if (!esMayuscula(letraInicialNombre)) {
    msjMostrar += "La primera letra es minúscula del Nombre <br>";
    enviar = true;
  }

  //  CORREO
  if (!regexEmail.test(correo.value)) {
    msjMostrar += "El email no es valido <br>";
    enviar = true;
  }
  //    TELEFONO
  if (!regexTel.test(tel.value)) {
    msjMostrar += "El telefono no es valido<br>";
    enviar = true;
  }
  //    ASUNTO
  if (asunto.value.length < 2 || asunto.value.length > 100) {
    msjMostrar += "Longitud del asunto incorrecto, intente nuevamente <br>";
    enviar = true;
  }
  //    COMENTARIO
  if (comentario.value.length < 2 || comentario.value.length > 100) {
    msjMostrar += "Longitud del comentario incorrecto, intente nuevamente <br>";
    enviar = true;
  }

  if (enviar) {
    msj.innerHTML = msjMostrar;
  } else {
    msj.innerHTML = "Enviado";
  }
});
function esMayuscula(letra) {
  s;
  return letra == letra.toUpperCase();
}
