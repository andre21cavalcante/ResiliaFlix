function viewCEP(infoCep){
    // Completa os inputs de acordo com o CEP
    $('#nomeRua').val(infoCep.logradouro);
    $('#bairro').val(infoCep.bairro);
    $('#cidade').val(infoCep.localidade);
    $('#estado').val(infoCep.uf);
}

// Irá resetar o que foi inputado e exibe msg de Erro
function viewMsgErroCEP(){
    $('#cep').attr("placeholder", "CEP inválido");
    $('#cep').val('');
    $('#nomeRua').val('');
    $('#bairro').val('');
    $('#cidade').val('');
    $('#estado').val('');
}

// Mostra msg de erro referente ao item passado
function mostraMsgErro(obj){
    obj.css('display', 'block');
}

// Apaga msg de erro referente ao item passado
function escondeMsgErro(obj){
    obj.css('display', 'none');
}
