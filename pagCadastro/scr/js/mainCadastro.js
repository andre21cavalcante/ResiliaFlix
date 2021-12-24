// const chamandoController = new ControllerCEP($('#cep').val())

// $('#botao').click(function(e){
//     e.preventDefault()
//     // Chama o Controller e passa o CEP como parêmetro
//     chamandoController.validandoCep()
//     // console.log(chamandoController.validandoCep());
// });


$('#cep').focusout(function(){
    controllerCEP($('#cep').val())
    // // chamandoControllerCEP.mandandoValidarCEP()
})
