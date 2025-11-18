const urlParams = new URLSearchParams(window.location.search)
const urlNoticia = urlParams.get('id')

document.querySelector('#titulo').innerHTML = urlNoticia;

fetch("./../DataBase.json").then(response => response.json()).then(data => {
    const noticiaUrl = urlNoticia;
    const artigo = data.articles.find((article) => article.url === noticiaUrl);
    document.querySelector("#titulo").innerHTML=artigo.title;
    document.querySelector("#autor").innerHTML=artigo.author;
    document.querySelector("#imagem").src=artigo.urlToImage;
    document.querySelector("#conteudo").innerHTML=artigo.description;

}
)