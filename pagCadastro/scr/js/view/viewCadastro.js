// class ViewCEP {
//     constructor(infoCep){
//         this.infoCep = infoCep;
//     }
// }

function viewCEP(infoCep){
    // console.log(infoCep);
    $('#nomeRua').val(infoCep.logradouro);
    $('#bairro').val(infoCep.bairro);
    $('#cidade').val(infoCep.localidade);
    $('#estado').val(infoCep.uf);
}


// ResponseJSON: Object { cep: "28020-230", logradouro: "Rua Doutor Ariosto Lannes Rabelo", bairro: "Parque Jóquei Club", … }
// ​​
// bairro: "Parque Jóquei Club"
// ​​
// cep: "28020-230"
// ​​
// complemento: ""
// ​​
// ddd: "22"
// ​​
// gia: ""
// ​​
// ibge: "3301009"
// ​​
// localidade: "Campos dos Goytacazes"
// ​​
// logradouro: "Rua Doutor Ariosto Lannes Rabelo"
// ​​
// siafi: "5819"
// ​​
// uf: "RJ"

