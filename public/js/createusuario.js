function inicializar() {
    $("#btnEnviar").click(doClickEnviar);
}

function doClickEnviar(e) {
    if($("#txtPassword").val() == 
    $("#txtConfirmPassword").val()) {
        $("#frmCrearUsuario").submit();
    } else {
        ///
    }
}

$(function () {
    inicializar();
});