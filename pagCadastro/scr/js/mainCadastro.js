// Gatilho pro CEP
$('#cep').focusout(function(){
    // Envia o CEP informado pro Controller
    controllerCEP($('#cep').val());
});

// Gatilho confirmação de senha
$('#confSenha').focusout(function(){
    // Envia senha para Controller
    controllerSenha($('#confSenha').val());
});
