class ControllerCEP{
    // Vai receber o CEP
    constructor(cep){
        this.cep = cep;
    }

    // Envia o CEP para validação
    validandoCep(cepValidar = this.cep){
        // chamando Model para validação
        let chamandoModel = new ModelCEP(cepValidar);
        return chamandoModel.validaCep();
    }
}