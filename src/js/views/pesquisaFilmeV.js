class PesquisaView {
    constructor() {
        this.container = document.querySelector(".containers");
        this.containerSearch = document.querySelector(".content");

    }
    update(model) {
        this.container.innerHTML +=
            `
        <div class="film-container">
        <p class="film-title">${model.title} <span class="rating">${model.ratings[0].Value}</span></p>
         <img class="film-poster" src=${model.poster} onclick= "PesquisaController.buscaFilmeImg('${model.title}')">
         </div> 
         `
    }

    updatePesquisa(model) {
        try {

            if (model.title === undefined) throw `<img class="picture-erro" src='https://blog.locaweb.com.br/wp-content/uploads/2017/12/Descubra-como-surgiu-o-erro-404-1.png'>`
            

            let ratings = ``;
            if (model.ratings.length == 1) {
                ratings = `<p>IMDB: ${model.ratings[0].Value}</p>`;
            }
            if (model.ratings.length == 2) {
                ratings = `
                <p>IMDB: ${model.ratings[0].Value}</p>
                <p>Rotten Tomatoes: ${model.ratings[1].Value}</p>`;
            }
            if (model.ratings.length == 3) {
                ratings = `
                <p>IMDB: ${model.ratings[0].Value}</p>
                <p>Rotten Tomatoes: ${model.ratings[1].Value}</p>
                <p>Metacritic: ${model.ratings[2].Value}</p>`;
            }

            this.containerSearch.innerHTML =
            `
        <div class= "d-flex justify-content-center p-3">
        <picture>
        <img class="poster" src=${model.poster} alt="Imagem não encontrada">
        </picture>
        <div class="cor-especial p-4">
        <p>Titulo: ${model.title}</p>
        <p>Lançamento: ${model.released}</p>
        <p>Duração: ${model.runtime}</p>
        <p>Gênero: ${model.genre}</p>
        <p>Diretor: ${model.director}</p>
        <p>Escritor: ${model.writer}</p>
        <p>Elenco: ${model.actors}</p>
        </div>
        <div class="cor-especial p-4">
        <p>Roteiro: ${model.plot}</p>
        <p>Idioma: ${model.language}</p>
        <p>País: ${model.country}</p>
        <p>Prêmios: ${model.awards}</p>
        <p>Bilheteria: ${model.boxOffice}</p>
        <p>Produtora: ${model.production}</p>
        ${ratings}
        </div>
        </div>
         `
        } catch (e) {
            this.containerSearch.innerHTML =
                `
            ${e}
            `
        }


    }
}