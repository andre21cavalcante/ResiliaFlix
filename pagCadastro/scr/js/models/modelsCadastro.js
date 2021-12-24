function modelCEP(cep){
    $.ajax({
        url: `http://viacep.com.br/ws/${cep}/json/`,
        method: 'GET',
        success: function(requisicao){
            viewCEP(requisicao);
            // console.log(requisicao); 
        },
        error: function(error){
            $('#cep').attr("placeholder", "CEP inválido");
            $('#cep').val('');
            $('#nomeRua').val('');
            $('#bairro').val('');
            $('#cidade').val('');
            $('#estado').val('');
            console.log(error);
        }
    })
}

