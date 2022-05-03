//REGISTRO VALIDACIONES
const form = document.getElementById("formulario__register");
var nom = document.getElementById("nombre");
var apel = document.getElementById("apellido");

var expReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var cRegistro = expReg.test("correoregistro");
var correoRegistro = document.getElementById("correoregistro");

var tel = document.getElementById("telefono");
var pRegistro = document.getElementById("passwordregistro");
var msj = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let mensajeNombreApellido = "";

  let entrarRegistro = false;

  //         NOMBRE
  if (nom.value.length < 3 || nom.value.length > 10 & apel.value.length < 3 || apel.value.length > 10) {
    mensajeNombreApellido += "Longitud invalida del Nombre o Apellido, intente nuevamente <br>";
    entrarRegistro = true;
  }
  // Con esto validamos que la letra sea mayuscula del nombre y el apellido
  var letraInicialNombre = nom.value.charAt(0);
  var letraInicialApellido = apel.value.charAt(0);
  if (!esMayuscula(letraInicialNombre) || !esMayuscula(letraInicialApellido)) {
    mensajeNombreApellido += "La primera letra es minúscula del Nombre o Apellido <br>";
    entrarRegistro = true;
  }




  // ENVIAR FORMULARIO REGISTRO
  if (entrarRegistro) {
    msj.innerHTML = mensajeNombreApellido;
  } else {
    msj.innerHTML = "Formulario Enviado";
  }
});
// Con esto validamos que sea una mayuscula la letra
function esMayuscula(letra) {
  return letra == letra.toUpperCase();
}
