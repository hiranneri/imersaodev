var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

const containerFilmes = document.querySelector(".filmes");
function atualizarFilmes(){
    for (var i = 0; i < listaFilmes.length; i++){
        
        containerFilmes.innerHTML += `<img src="${listaFilmes[i]}">`;
        
       
    }    
}
atualizarFilmes();

var filme = document.querySelector(".campoFilme");

if(filme.value.length > 0){
    pesquisarFilme();
} 


function pesquisarFilme() {
    let filmeDigitado = document.querySelector(".campoFilme").value;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    const baseURl = 'https://api.themoviedb.org/3';
    const apiKey = 'bbd612676fbc2fa02bbaab26b4c7fcfe';
    
    const url = `${baseURl}/search/movie?api_key=${apiKey}&query=${filmeDigitado}`;
    console.log(url, 'nome: ', filmeDigitado);
    fetch(url, {
        headers:{
            'Content-Type':'application/json;charset=utf-8',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQ2MTI2NzZmYmMyZmEwMmJiYWFiMjZiNGM3ZmNmZSIsInN1YiI6Ij'+
                    'YwNjM0MWU0OGYyNmJjMDAzZjZiMzFjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYYIMWDxJIAr5s4HkYwdt59CNbCDQPCgGNW71j7886M'
        }
    }, options)
        .then(response => response.json())
            .then(filmesEncontrados => {
                let tituloFilme = filmesEncontrados.results[0].original_title;
                let descricaoFilme = filmesEncontrados.results[0].overview;
                let imagem = filmesEncontrados.results[0].poster_path;
                mostrarFilmeLocalizado(tituloFilme, descricaoFilme, imagem);
                
                
        })
    
    
}


function mostrarFilmeLocalizado(titulo, descricao, posterPath){
    // containerFilmes.innerText += titulo;
    // containerFilmes.innerText += descricao;
    let urlImage = 'http://image.tmdb.org/t/p/w500';
    listaFilmes.push(`${urlImage}/${posterPath}`);
    containerFilmes.innerHTML += `<img src="${urlImage}/${posterPath}" class="filme-localizado" alt=${titulo}>`;
   
    limparCampo();
}
function limparCampo(){
    filme.value = '';
}

