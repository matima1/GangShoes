function validarfor() {

    var nom = document.getElementById("nom").value;
    var precio = document.getElementById("precio").value;
    var desc = document.getElementById("desc").value;
    var msj = document.getElementById("mensajes").value;


    const form = document.getElementById("form1");

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        if((nom == "") || (precio == "") || (desc == "")){   //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        return true;
    }else {
        alert("Formulario Enviado");
        return false;
    }
});
}
function iniciar (){
    document.getElementById("mensajes").addEventListener('click',validar,false);
}