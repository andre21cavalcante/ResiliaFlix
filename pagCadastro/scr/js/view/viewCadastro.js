function viewCEP(infoCep){
    // Completa os inputs de acordo com o CEP
    $('#nomeRua').val(infoCep.logradouro);
    $('#bairro').val(infoCep.bairro);
    $('#cidade').val(infoCep.localidade);
    $('#estado').val(infoCep.uf);
}

// Mostra a msg de erro ref a senha
function viewSenha(){
    $('#msgErroSenha').css('display', 'block');
}

// Apaga a msg de erro ref a senha
function unViewSenha(){
    $('#msgErroSenha').css('display', 'none');
}

// Mostra a msg de erro ref ao email
function viewEmail(){
    $('#msgErroEmail').css('display', 'block');
}

// Apaga a msg de erro ref ao email
function unViewEmail(){
    $('#msgErroEmail').css('display', 'none');
}

// Mostra a msg de erro ref ao RG
function viewRG(){
    $('#msgErroRG').css('display', 'block');
}

// Apaga a msg de erro ref ao RG
function unViewRG(){
    $('#msgErroRG').css('display', 'none');
}