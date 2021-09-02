function animation() {
    x += vectorX;
    y += vectorY;

    if (x > 380) {
        vectorX = -1;
    } else if (x < 0) {
        vectorX = 1;
    }

    if (y > 380) {
        vectorY = -2;
    } else if (y < 0) {
        vectorY = 2;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px'
}


const ball = document.querySelector('#ball')

let x = 28;
let y = 137;
let vectorX = 1;
let vectorY = 2;


ball.style.left = x + 'px';
ball.style.top = y + 'px';

setInterval(animation, 10);