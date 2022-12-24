const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let sumbuX = 150;
let sumbuY = 150;
let speedX = 5;
let speedY = 5;
const r = 50;

function draw() {
    window.requestAnimationFrame(draw);
    
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = 'lightgreen'
    ctx.strokeStylev = '#333'
    ctx.lineWidth = 1;
    
    ctx.beginPath()
    ctx.arc(sumbuX, sumbuY, r, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();

    if( sumbuX+r > innerWidth || sumbuX-r < 0 ) {
        speedX = -speedX;
    }

    if( sumbuY+r > innerHeight || sumbuY-r < 0 ) {
        speedY = -speedY;
    }


    sumbuX += speedX;
    sumbuY += speedY;
}

draw();