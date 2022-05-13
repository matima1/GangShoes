//              COMENTARIO VALIDACIONES
const formComentario = document.getElementById("form-comentario");
var com = document.getElementById("com1");
var msjCom = document.getElementById("msjComentario");


formComentario.addEventListener("submit", (a) => {
    a.preventDefault();
  let mensaje = "";
  let enviadoComentario = false;
  if (com.value.length < 20 || com.value.length > 2000) {
    a.preventDefault();
    mensaje +=
      "Longitud del Comentario no valido, intente nuevamente <br>";
    enviadoComentario = true;
  }
  //              ENVIAR COMENTARIO
  if (enviadoComentario) {
    msjCom.innerHTML = mensaje;
  } else {
    msjCom.innerHTML = "Enviado";
  }
});
Hola_1234