class PesquisaController {
    static buscaFilme(){
        let arrayFilmes = ["Pink Flamingos", "Spider-Man", "Gummo", "About Time", "Spider-Man 2", "Fight Club", "Avengers: Endgame", "Hacksaw Ridge", "joker", "The Butterfly Effect", "Django Unchained", "Titanic"];
        for(let filme of arrayFilmes){
            let model = new PesquisaModel();
            model.fazRequest(filme,() => {let view = new PesquisaView(); view.update(model)});
        }
    }
    static paginaDePesquisa(){
        localStorage.setItem('novoFilme', document.getElementById("nomeFilme").value);
        location.href="./src/html/pesquisaFilme.html";
    }
    static pegaFilme(){
        localStorage.setItem('novoFilme', document.getElementById("nomeFilme").value);
        location.href="./pesquisaFilme.html";
    }
    static buscaFilmebarra(){
        let model = new PesquisaModel();
        model.fazRequest(localStorage.getItem('novoFilme'),() => {let view = new PesquisaView(); view.updatePesquisa(model)});
    }
    static buscaFilmeImg(filme){
        localStorage.setItem('novoFilme', filme);
        location.href="./src/html/pesquisaFilme.html";
    }

}
document.querySelector('#formulario').addEventListener("submit",(event)=>{event.preventDefault()});