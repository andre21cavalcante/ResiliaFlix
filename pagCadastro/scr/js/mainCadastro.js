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

// Gatilho pro email
$('#email').focusout(function(){
    // Envia o email informado pro Controller
    controllerEmail($('#email').val());
});

$('#rg').keypress(function(e){
    controllerRG($('#rg'));
});