//CONTACTO VALIDACIONES
const form = document.getElementById("formulariomio");
var nom = document.getElementById("nombre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let mensajeNombreApellido = "";

  let contacto = false;

  //         NOMBRE
  if (nom.value.length < 3 || nom.value.length > 10 & apel.value.length < 3 || apel.value.length > 10) {
    mensajeNombreApellido += "Longitud invalida del Nombre o Apellido, intente nuevamente <br>";
    contacto = true;
  }
  // Con esto validamos que la letra sea mayuscula del nombre y el apellido
  var letraInicialNombre = nom.value.charAt(0);
  if (!esMayuscula(letraInicialNombre) || !esMayuscula(letraInicialApellido)) {
    mensajeNombreApellido += "La primera letra es minúscula del Nombre o Apellido <br>";
    contacto = true;
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
