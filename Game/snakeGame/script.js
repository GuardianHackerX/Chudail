const easy = document.querySelector('#easy')
const medium = document.querySelector('#medium')
const hard = document.querySelector('#hard')

easy.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = './easy.html'
})

medium.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = './medium.html'
})

hard.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = './hard.html'
})
