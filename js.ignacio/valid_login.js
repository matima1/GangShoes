
//REGISTRO VALIDACIONES
const form = document.getElementById("formulario__register");

var nom = document.getElementById("nombre");
var apel = document.getElementById("apellido");
var correoRegistro = document.getElementById("correoregistro");

var tel = document.getElementById("telefono");
var passR = document.getElementById("passwordregistro");
var passR2 = document.getElementById("passwordregistro2");

var msj = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let msjMostrar = "";
  let expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
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
  if (!expReg.test(correoRegistro.value)) {
    msjMostrar += "El email no valido <br>";
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
