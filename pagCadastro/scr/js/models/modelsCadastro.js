class ModelCEP{
    // Recebe o CEP do ValidandoCep
    constructor(cep){
        this.cep = cep
    }

    validaCep(){
        $.ajax({
            // https://viacep.com.br/ws/"+ cep +"/json/?callback=?
            url: `https://viacep.com.br/ws/${this.cep}/json/`,

            success: function(request){
                // console.log(request);
                return request
            },
        
            error: function(error){
                console.log(error);
                return error
            }
            
        })
    }
}

// requestAPI = $.ajax({
//     // https://viacep.com.br/ws/"+ cep +"/json/?callback=?
//     url: `https://viacep.com.br/ws/${this.cepRecebido}/json/?callback=?`,

//     success: function(request){
//         console.log(request);
//     },

//     error: function(error){
//         console.log(error);
//     }
    
// })