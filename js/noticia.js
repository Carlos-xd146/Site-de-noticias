const urlParams = new URLSearchParams(window.location.search)
const urlNoticia = urlParams.get('id')

document.querySelector('#titulo').innerHTML = urlNoticia;