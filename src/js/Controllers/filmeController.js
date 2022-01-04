class FilmesController {
    static homeFilmes(){
        let arrayFilmes = ['Pink Flamingos','Spider-Man','Gummo','About Time', 'Spider-Man 2', 'Fight Club', 'Avengers: Endgame', 'Hacksaw Ridge', 'Joker', 'The Butterfly Effect', 'Django Unchained', 'Titanic']
        for(let filme of arrayFilmes){
            let model = new filmeModel();
            model.fazRequest(filme,() => {let view = new filmeView(); view.update(model)});
        }
    }
    static filmeImg(filme){
        localStorage.setItem("meuFilme", filme);
        location.href=".src/index.html";
    }
}
