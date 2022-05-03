var formulario = document.getElementById("formulariomio");

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

function validatelefono(){
    var elemento = document.getElementById("telefono");
    if( isNaN(elemento.value)){
        alert("el campo debe ser numerico");
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




<body>
    <div class="container">
        <div class="row">
            <h1 style="text-align: center;" class="colorLetra">Validación</h1>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <form action="" method="post" name="formulario1" id="form1">
                    <div class="form-group">
                        <label class="colorLetra">Usuario</label>
                        <input type="text" id="nom" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label class="colorLetra">Contraseña</label>
                        <input type="password" id="clave" class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="colorLetra">Correo</label>
                        <input type="email" id="correo" class="form-control">
                    </div>

                    <input type="submit" class="btn btn-primary" style="margin-top: 10px;">
                    <p id="mensajes"></p>

                </form>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>

    <script src="js/valid.js"></script>
</body>

</html>