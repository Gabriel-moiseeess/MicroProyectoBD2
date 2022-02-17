const stage =  document.getElementById("stage");

const ctx = stage.getContext('2d');

stage.width = 800;
stage.height = 500;

const keys = [];

const player = {
    x: 0,
    y: 0,

    width: 40,
    height: 72,

    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite =  new Image();
playerSprite.src = "./img/chewie.png";
const background = new Image();
background.src = "./img/background.png";

function drawSprite(img,sX,sY,sW,sH,dX,dY,dW,dH) {
    
         ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);

}


function animate() {
//ctx.clearRect(0,0,stage.width,stage.height);
ctx.drawImage(background,0,0,stage.width,stage.height);
drawSprite(playerSprite,0,0, player.width,player.height,200,150,player.width,player.height);
requestAnimationFrame(animate);

}
animate();

window.addEventListener("keydown", function e(e) {
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function e(e) {
    delete keys[e.keyCode];
});