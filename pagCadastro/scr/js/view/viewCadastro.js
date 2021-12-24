function viewCEP(infoCep){
    // Completa os inputs de acordo com o CEP
    $('#nomeRua').val(infoCep.logradouro);
    $('#bairro').val(infoCep.bairro);
    $('#cidade').val(infoCep.localidade);
    $('#estado').val(infoCep.uf);
}