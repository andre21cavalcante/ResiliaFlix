
$('#botao').click(function(e){
    e.preventDefault()
    // Chama o Controller e passa o CEP como parêmetro
    const chamandoController = new ControllerCEP($('#cep').val())
    chamandoController.validandoCep()
    // console.log(chamandoController.validandoCep());
});

