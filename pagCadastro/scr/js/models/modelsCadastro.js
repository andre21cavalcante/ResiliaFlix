function modelCEP(cep){
    $.ajax({
        url: `http://viacep.com.br/ws/${cep}/json/`,
        method: 'GET',
        success: function(requisicao){
            // Manda obj pro View
            viewCEP(requisicao); 
        },
        error: function(error){
            // Vai apagar o que foi escrito nesses campos caso o cep esteja errado e avisa ao user
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

