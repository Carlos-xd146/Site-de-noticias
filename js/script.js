// Funçao para gerar elementos HTML para cada noticia
fetch('DataBase.json')
    .then(response => response.json())
    .then(data => {
        const container = document.createElement('div');
        container.id = 'noticias-container';
        document.body.appendChild(container);
        data.articles.array.forEach(article => {
            const noticia = document.createElement('div');
            noticia.className = 'noticia';
            noticia.innerHTML = `
                <h2>${article.title}</h2>
                <p><strong>Autor:</strong> ${article.author || 'Desconhecido'}</p>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="Imagem da noticia" style="max-width: 300px;">
                <p><a href="${article.url}" target="_blank">Leia mais</a></p>
                <hr> 
            `;
            container.appendChild(noticia);
        })
        // Se quiser adicionar o container em um elemento especifico, use:
        const news = document.querySelector('#noticias');
        if (news) {
            news.appendChild(container);
        }
    })
