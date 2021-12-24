// class ControllerCEP{
//     // Vai receber o CEP
//     constructor(cep){
//         this.cep = cep;
//     }

//     // Envia o CEP para validação
//     validandoCep(cepValidar = this.cep){
//         // chamando Model para validação
//         const chamandoModel = new ModelCEP(cepValidar);
//         // Recebe a info do CEP, caso seja válido.
//         const cepValidado = chamandoModel.validaCep()
//         console.log(cepValidado);
//         // responseJSON
//     }
// }

// class ControllerCEP{
//     // Recebe CEP
//     constructor(cep){
//         this.cep = cep;
//     }
//     // Como o nome já diz tá mandando pra Model Validar
//     mandandoValidarCEP(){
//         const tchan = new ModelCEP(this.cep)
//         const dadosRecebidos = tchan.satanas;
//         console.log(dadosRecebidos);
//     }
// }

function controllerCEP(cep){
    modelCEP(cep);    
}   