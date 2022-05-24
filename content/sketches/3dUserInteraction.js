var xLight = -1;
var yLight = 1;
var zLight = -1;

var xMoon = 0;
var yMoon = 0;
var zMoon = 250;
//https://i.ibb.co/N2Gz0vB/Marte.jpg
function preload() {
    textura_tierra = loadImage('https://i.ibb.co/PD4LyP5/planeta.jpg');
    textura_luna = loadImage('https://i.ibb.co/WPvVybx/luna.jpg');
    textura_fondo_estrellas = loadImage("https://i.ibb.co/NNTFKmL/nocheHD.jpg")
}

function setup() {
    createCanvas(600, 600, WEBGL);
    checkbox = createCheckbox('Ver Marte', false);
    checkbox.changed(myCheckedEvent);
}

function draw() {
    noStroke() //No dibujar la malla de las esferas

    texture(textura_fondo_estrellas)
    sphere(800)

    for (let i = 0; i < 3; i++) {
        directionalLight(
            255, 255, 255 - i * 25,//Color
            xLight, yLight, zLight //Dirección
        );
    }

    orbitControl() //Controlar con el mouse la camara

    rotateZ(-0.3) //Inclinación de la tierra

    push()
    rotateY(frameCount * 0.01); //rotación de la tierra sobre su propio eje
    texture(textura_tierra);
    sphere(100);
    pop()

    push()
    rotateY(-frameCount * 0.05 / 10);//Traslación de la luna al rededor de la tierra
    translate(xMoon, yMoon, zMoon)//Distancia del centro de la luna al centro de la tierra
    rotateY(-frameCount * 0.05);//Rotación del la luna sobre su propio eje
    texture(textura_luna);
    sphere(25);
    pop()
}

function keyPressed() {
    //Control de la ubicacion de la luz
    if (keyCode === UP_ARROW) {
        yLight = yLight + 1;
    } else if (keyCode === DOWN_ARROW) {
        yLight = yLight - 1;
    } else if (keyCode === RIGHT_ARROW) {
        xLight = xLight - 1;
    } else if (keyCode === LEFT_ARROW) {
        xLight = xLight + 1;
    } else if (keyCode === ENTER) {
        zLight = zLight - 1;
    } else if (keyCode === BACKSPACE) {
        zLight = zLight + 1;
    } else if (keyCode === CONTROL) {
        zMoon = zMoon + 10;
    } else if (keyCode === ESCAPE) {
        zMoon = zMoon - 10;
    }
}

function myCheckedEvent() {
    if (checkbox.checked()) {
        textura_tierra = loadImage('https://i.ibb.co/N2Gz0vB/Marte.jpg');
    } else {
        textura_tierra = loadImage('https://i.ibb.co/PD4LyP5/planeta.jpg');
    }
}