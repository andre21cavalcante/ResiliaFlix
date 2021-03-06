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
            viewMsgErroCEP();
            throw 'CEP inválido ou API Offline';
        }
    })
}

function modelSenha(confSenha){
    // Checa se a senha e a confirmação diferem
    if(confSenha !== $('#senha').val()){
        // Caso defira, exibe msg de erro
        mostraMsgErro($('#msgErroSenha'))
    }
    // Caso a msg de erro for chamada, e o usuário corrigir, a msg irá sumir 
    else if (confSenha === $('#senha').val() && $('#msgErroSenha').css('display') === 'block'){
        // Apaga a msg de erro
        escondeMsgErro($('#msgErroSenha'))
    }
}

function modelEmail(email){
    // Checa se tem um '@' e '.' após o '@'
    if(email.indexOf('@') > 0 && email.indexOf('.', email.indexOf('@')) >= email.indexOf('@')){
        // Checa se a msg de erro está sendo exibida e apaga
        if($('#msgErroEmail').css('display') === 'block'){
            escondeMsgErro($('#msgErroEmail'))
        }
    } 
    // Mostra msg de erro
    else {
        mostraMsgErro($('#msgErroEmail'))
    }
}

// Funções ref. ao RG:

// Add '.' e '-' aos lugares
function addMascaraRG(rg){
    if(rg.val().length === 3 || rg.val().length === 7){
        rg.val(function(){
            return this.value += '.';
        });
    } else if (rg.val().length === 11){
        rg.val(function(){
            return this.value += '-';
        });
    }
}

// Checa pra ver se o que está sendo escrito é número
function bloqueandoLetras(e){
    const caractere = String.fromCharCode(e.keyCode);
    const padrao = '[0-9]';
    
    // Caso seja retorna True
    if(caractere.match(padrao)){
        return true;
    }
}

// Checa se todos os campos do RG foram preenchidos
$('#rg').focusout(function(){
    
    if($('#rg').val().length !== 14){
        // Caso não tenham sido, mostra msg de erro
        mostraMsgErro($('#msgErroRG'));

    } else if($('#rg').val().length === 14 && $('#msgErroRG').css('display') === 'block'){
        escondeMsgErro($('#msgErroRG'));
    }
});

function modelRG(e, rg){
    
    // Add '.' e '-' aos lugares
    addMascaraRG(rg)

    // Se o valor retornado for falso, irá bloquear a entrada
    if(!bloqueandoLetras(e)){
        e.preventDefault()
    }
}


function modelBotao(e){
    // Recebe toda info do user
    const listaDeInputs = [
        $('#nome'),
        $('#email'),
        $('#rg'),
        $('#senha'),
        $('#confSenha'),
        $('#cep'),
        $('#nomeRua'),
        $('#bairro'),
        $('#cidade'),
        $('#estado'),
    ]
    // Checa se cada uma foi preenchida
    for(let i = 0; i < listaDeInputs.length; i++){
        // Caso não tenha sido exibe msg de erro
        if(listaDeInputs[i].val() === ''){
            mostraMsgErro($('#msgErroBotao'))
            e.preventDefault()
        }
    }
}