if (document.getElementById('nuevo_usuario')) {
    var formulario = document.getElementById('nuevo_usuario');
    var errores = document.getElementById('errores');

    function validar_password(e){
        if (formulario.pass.value != formulario.pass2.value) {
            errores.innerHTML = "<p class='alert alert-danger text-white'>Las contraseñas no coinciden</p>";
            e.preventDefault();
        }
    }

    formulario.addEventListener('submit', validar_password);
}