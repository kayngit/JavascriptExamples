function animation() {
    for (let i = 0; i < balls.length; i++) {
        const ballObject = balls[i];
        ballObject.ball.style.left = ballObject.x + 'px';
        ballObject.ball.style.top = ballObject.y + 'px';

        ballObject.x += ballObject.vectorX;
        ballObject.y += ballObject.vectorY;

        if (ballObject.x > 380) {
            ballObject.vectorX = -1 - Math.random();
        } else if (ballObject.x < 0) {
            ballObject.vectorX = 1 + Math.random();
        }

        if (ballObject.y > 380) {
            ballObject.vectorY = -1 - Math.random();
        } else if (ballObject.y < 0) {
            ballObject.vectorY = 1 + Math.random();
        }
    }
}

const cont = document.querySelector('#cont');

let vectorX = 1;
let vectorY = 2;

const balls = [];
for (let i = 0; i < 100; i++) {
    const ball = document.createElement('div');
    console.log(ball)
    ball.setAttribute('class', 'ball');
    ball.style['background-color'] = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    const x = Math.floor(Math.random() * 380);
    const y = Math.floor(Math.random() * 380);
    balls.push({
        ball,
        x,
        y,
        vectorX: 1 + Math.random(),
        vectorY: 1 + Math.random(),
    });
    cont.appendChild(ball);
}


setInterval(animation, 10);