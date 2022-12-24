
//todo prepare canvas
const myCanvas = document.getElementById('myCanvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx = myCanvas.getContext('2d');


//todo rectangle
// ctx.fillRect(25, 25, 200, 200) //! (sumbuX, sumbuY, width, height)
// or
// ctx.fillStyle = 'pink';
// ctx.strokeStyle = '#333';
// ctx.lineWidth = 5;

// ctx.rect(50, 50, 300, 400);
// ctx.fill();
// ctx.stroke();

//todo circle
// ctx.fillStyle = 'lightblue';
// ctx.strokeStyle = '#000'
// ctx.lineWidth = 2;

// ctx.arc(300, 300, 150, 0, 2 * Math.PI); //! (sumbuX, sumbuY, radius, startAngle, endAngle)
// ctx.fill();
// ctx.stroke();

//todo path
ctx.fillStyle = 'lightgreen';
ctx.strokeStyle = '#000'
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(450, 350);
ctx.lineTo(150, 350);
ctx.lineTo(300, 50); // atau diganti dengan closePath()
ctx.fill();
ctx.stroke();
