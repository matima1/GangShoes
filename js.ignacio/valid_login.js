const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

//REGISTRO VALIDACIONES
const form = document.getElementById("formulario__register");
var nom = document.getElementById("nombre");
var apel = document.getElementById("apellido");
var cRegistro = document.getElementById("correoregistro");
var tel = document.getElementById("telefono");
var pRegistro = document.getElementById("passwordregistro");
var msj = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let mensajesMostrar = "";
  let entrarRegistro = false;

  if (
    nom.value.length < 3 ||
    (nom.value.length > 10) & (apel.value.length < 3) ||
    apel.value.length > 10 & (cRegistro.value.length < 0)
  ) {
    mensajesMostrar += "Longitud invalida, intente nuevamente <br>";
    entrarRegistro = true;
  }
  // Con esto validamos que la letra sea mayuscula del nombre y el apellido

  // NOMBRE
  var letraInicialNombre = nom.value.charAt(0);
  if (!esMayuscula(letraInicialNombre)) {
    mensajesMostrar += "La primera letra es minúscula del Nombre <br>";
    entrarRegistro = true;
  }
  // APELLIDO
  var letraInicialApellido = apel.value.charAt(0);
  if (!esMayuscula(letraInicialApellido)) {
    mensajesMostrar += "La primera letra es minúscula del Apellido <br>";
    entrarRegistro = true;
  }
  // CORREO

  var letraCorreoRegistro = cRegistro.value.charAt(0);
  if (!esMayuscula(letraCorreoRegistro)) {
    mensajesMostrar += "Registro no ingresado";
	entrarRegistro = true;
  }

  // ENVIAR FORMULARIO REGISTRO
  if (entrarRegistro) {
    msj.innerHTML = mensajesMostrar;
  } else {
    msj.innerHTML = "Formulario Enviado";
  }
});
// Con esto validamos que sea una mayuscula la letra
function esMayuscula(letra) {
  return letra == letra.toUpperCase();
}
