// Funçao para gerar elementos HTML para cada noticia
// fetch('DataBase.json')
//     .then(response => response.json())
//     .then(data => {
//         const container = document.createElement('div');
//         container.id = 'noticias-container';
//         document.body.appendChild(container);
//         data.articles.array.forEach(article => {
//             const noticia = document.createElement('div');
//             noticia.className = 'noticia';
//             noticia.innerHTML = `
//                 <h2>${article.title}</h2>
//                 <p><strong>Autor:</strong> ${article.author || 'Desconhecido'}</p>
//                 <p>${article.description}</p>
//                 <img src="${article.urlToImage}" alt="Imagem da noticia" style="max-width: 300px;">
//                 <p><a href="${article.url}" target="_blank">Leia mais</a></p>
//                 <hr> 
//             `;
//             container.appendChild(noticia);
//         })
//         // Se quiser adicionar o container em um elemento especifico, use:
//         const news = document.querySelector('#noticias');
//         if (news) {
//             news.appendChild(container);
//         }
//     })






// fetch("https://newsapi.org/v2/everything?q=brasil&from=2025-10-27&sortBy=publishedAt&apiKey=366a4893cc3440b486f45b01e7fe90a5").then(response => response.json()).then(data => {
//     // const noticiaUrl = 'https://observador.pt/2025/10/06/acesso-a-saude-mental-para-comunidades-africanas-em-portugal-ainda-e-limitado-diz-afropsis/';
//     // const artigo = data.articles.find((article) => article.url === noticiaUrl);
//     // console.log(artigo);

//     const container = document.createElement('div');
//     container.id = 'noticias-container';
//     document.body.appendChild(container);
//     data.articles.forEach(article => {
//         const noticia = document.createElement('div');
//         noticia.className = 'noticia';
//         noticia.innerHTML = `
//                 <h2>${article.title}</h2>
//                 <p><strong>Autor:</strong> ${article.author || 'Desconhecido'}</p>
//                 <p>${article.description}</p>
//                 <img src="${article.urlToImage}" alt="Imagem da noticia" style="max-width: 300px;">
//                 <p><a href="./noticia.html?id=${article.url}" target="_blank">Leia mais</a></p>
//                 <hr> 
//             `;
//         container.appendChild(noticia);
//     })
//     // Se quiser adicionar o container em um elemento especifico, use:
//     const news = document.querySelector('#noticias');
//     if (news) {
//         news.appendChild(container);
//     }

// })


const data = new Date();
const ano = String(data.getFullYear());
const mes = String(data.getMonth()+1).padStart(2,'0');
const dia = String(data.getDate()-1).padStart(2,'0');
const diaAnterior = ano+'-'+mes+'-'+dia;

// fetch(`https://newsapi.org/v2/everything?q=brasil&from=${diaAnterior}&sortBy=publishedAt&apiKey=366a4893cc3440b486f45b01e7fe90a5`).then(response => response.json()).then(data => {
    // const noticiaUrl = 'https://observador.pt/2025/10/06/acesso-a-saude-mental-para-comunidades-africanas-em-portugal-ainda-e-limitado-diz-afropsis/';
    // const artigo = data.articles.find((article) => article.url === noticiaUrl);
    // console.log(artigo);

fetch("./DataBase.json").then(response => response.json()).then(data => {
    const container = document.createElement('div');
    data.articles.forEach(article => {
        const noticia = document.createElement('div');
        noticia.innerHTML = `
            <a href="./noticia.html?id=${article.url}" target="_blank">
            <h1>${article.title}</h1>
            <p>${article.author}</p>
            <img src="${article.urlToImage}">
            </a>
            `;
        container.appendChild(noticia);    
    }
    )
    const noticias = document.querySelector('#noticias');
    noticias.appendChild(container)
}
)