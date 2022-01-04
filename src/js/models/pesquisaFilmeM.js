class PesquisaModel {
    constructor() {
        this._title;
        this._year;
        this._released;
        this._runtime;
        this._genre;
        this._director;
        this._writer;
        this._actors;
        this._plot;
        this._language;
        this._country;
        this._awards;
        this._posterUrl;
        this._ratings;
        this._boxOffice;
        this._production;
    }
    get title() {
        return this._title;
    }
    get year() {
        return this._year;
    }
    get released() {
        return this._released;
    }
    get runtime() {
        return this._runtime;
    }
    get genre() {
        return this._genre;
    }
    get director() {
        return this._director;
    }
    get writer() {
        return this._writer;
    }
    get actors() {
        return this._actors;
    }
    get plot() {
        return this._plot;
    }
    get language() {
        return this._language;
    }
    get country() {
        return this._country;
    }
    get awards() {
        return this._awards;
    }
    get poster() {
        return this._posterUrl;
    }
    get ratings() {
        return this._ratings;
    }
    get boxOffice() {
        return this._boxOffice;
    }
    get production() {
        return this._production;
    }
    fazRequest(filme, callback) {
        let request = new XMLHttpRequest;
        request.open("GET", `https://www.omdbapi.com/?t=${filme}&apikey=eb6848c5`);

        request.addEventListener("load", () => {
                if (request.status == 200) {
                    let response = JSON.parse(request.responseText);
                    this._title = response.Title;
                    this._year = response.Year;
                    this._released = response.Released;
                    this._runtime = response.Runtime;
                    this._genre = response.Genre;
                    this._director = response.Director;
                    this._writer = response.Writer;
                    this._actors = response.Actors;
                    this._plot = response.Plot;
                    this._language = response.Language;
                    this._country = response.Country;
                    this._awards = response.Awards;
                    this._posterUrl = response.Poster;
                    this._ratings = response.Ratings;
                    this._boxOffice = response.BoxOffice;
                    this._production = response.Production;
                    callback();
                } else if(request.status==404){
                    console.log(`Filme não encontrado ${request.status}`);
                } else {
                    console.log(`Erro:${request.status} Houve algo inesperado`);
                }
        });
        request.send();
    }



}