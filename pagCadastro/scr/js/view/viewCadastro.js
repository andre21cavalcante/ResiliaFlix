function viewCEP(infoCep){
    // Completa os inputs de acordo com o CEP
    $('#nomeRua').val(infoCep.logradouro);
    $('#bairro').val(infoCep.bairro);
    $('#cidade').val(infoCep.localidade);
    $('#estado').val(infoCep.uf);
}

// Mostra a msg de erro
function viewSenha(){
    $('#msgErroSenha').css('display', 'block');
}

// Apaga a msg de erro
function unViewSenha(){
    $('#msgErroSenha').css('display', 'none');
}