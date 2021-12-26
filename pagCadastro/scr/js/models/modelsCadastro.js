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

function modelSenha(confSenha){
    // Checa se a senha e a confirmação diferem
    if(confSenha !== $('#senha').val()){
        // Caso defira, exibe msg de erro
        viewSenha();
    }
    // Caso a msg de erro for chamada, e o usuário corrigir, a msg irá sumir 
    else if (confSenha === $('#senha').val() && $('#msgErroSenha').css('display') === 'block'){
        // Apaga a msg de erro
        unViewSenha();
    }
}

function modelEmail(email){
    // Checa se tem um '@' e '.' após o '@'
    if(email.indexOf('@') > 0 && email.indexOf('.', email.indexOf('@')) >= email.indexOf('@')){
        // Checa se a msg de erro está sendo exibida e apaga
        if($('#msgErroEmail').css('display') === 'block'){
            unViewEmail()
        }
    } 
    // Mostra msg de erro
    else {
        viewEmail()
    }
}