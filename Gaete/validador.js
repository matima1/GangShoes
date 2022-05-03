function validate(){
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(nombre.length < 5){
      text = "Ingrese un nombre valido";
      error_message.innerHTML = text;
      return false;
    }
    if(asunto.length < 10){
      text = "Porfavor Ingrese un texto con el contenido suficiente";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(telefono) || telefono.length != 8){
      text = "Ingrese un numero de telefono valido";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Ingrese un email valido";
      error_message.innerHTML = text;
      return false;
    }
    if(mensaje.length <= 140){
      text = "Porfavor ingrese mas de 140 caractereres";
      error_message.innerHTML = text;
      return false;
    }
    alert("Enviado correctamente!");
    return true;
  }