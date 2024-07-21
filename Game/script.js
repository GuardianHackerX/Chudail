const snakeGame = document.querySelector('#snakeGame')
const stoneGame = document.querySelector('#stoneGame')
const flappyGame = document.querySelector('#flappyGame')
const game = document.querySelector('.game');

game.addEventListener('click', (e)=> {
    e.preventDefault();
})

snakeGame.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = './snakeGame/index.html'
});

stoneGame.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = './stoneGame/index.html'
});

flappyGame.addEventListener('click', (e)=> {
    e.preventDefault();
    window.location.href = './flappyGame/index.html'
});

