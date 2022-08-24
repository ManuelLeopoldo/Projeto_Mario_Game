/* The above code is a game where you have to jump over the pipes. */
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove('jump');

    }, 500);

}

/* A loop that is checking if the pipe is in the same position as the mario. If it is, it will stop the
game. */
const loop = setInterval(() => {
    console.log('loop')

    const pipePosition = pipe.ofsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '120');
    
    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '40px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);