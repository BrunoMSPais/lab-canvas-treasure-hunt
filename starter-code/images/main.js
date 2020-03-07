var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

//iteration 2

//propertyes
// var col = ;

// var row = ;

//methods
// moveUp() {
    
// };

// moveRight() {

// };

// moveDown() {

// };

// moveLeft() {

// };

// var player = new Character(0,0) // (0,0) = Initial position
// player.moveDown() // Increase by 1 the value of player.row
// player.moveUp() // Decrease by 1 the value of player.row
// player.moveRight() // Increase by 1 the value of player.col
// player.moveLeft() // Decrease by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2

// Iteration 1
function drawGrid() {
    // TODO: write the code of the function
        for (let i = 0; i < width + 1; i++) {
            const elementX = (i / 10) * width;
            
            ctx.beginPath() * elementX;
            ctx.moveTo(elementX, 0)
            ctx.lineTo(elementX, height);
            ctx.strokeStyle = "black";
            ctx.stroke() * elementX;
        } 

        for (let j = 0; j < height + 1; j++) {
            const elementY = (j / 10) * height;
            
            ctx.beginPath() * elementY;
            ctx.moveTo(0, elementY)
            ctx.lineTo(height, elementY);
            ctx.strokeStyle = "black";
            ctx.stroke() * elementY;
        } 
        
}

function drawPlayer() {
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
}

function drawEverything() {
  drawGrid()
  // drawPlayer()
  // drawTreasure()
}

drawEverything()