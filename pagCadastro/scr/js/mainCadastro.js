// Gatilho
$('#cep').focusout(function(){
    // Envia o CEP informado pro Controller
    controllerCEP($('#cep').val())
})
