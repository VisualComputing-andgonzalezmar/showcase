let myShader1;
let myShader2;
let myShader3;
let esfera = 1;
let imgPivot;
let img0;
let img1;
let img2

let count = 0;

function preload() {
    // a shader is composed of two parts, a vertex shader, and a fragment shader
    // the vertex shader prepares the vertices and geometry to be drawn
    // the fragment shader renders the actual pixel colors
    // loadShader() is asynchronous so it needs to be in preload
    // loadShader() first takes the filename of a vertex shader, and then a frag shader
    // these file types are usually .vert and .frag, but you can actually use anything. .glsl is another common one
    myShader1 = loadShader("/showcase/sketches/shaders/shader1.vert", "/showcase/sketches/shaders/shader3.frag");
    myShader2 = loadShader("/showcase/sketches/shaders/shader2.vert", "/showcase/sketches/shaders/shader3.frag");
    myShader3 = loadShader("/showcase/sketches/shaders/shader3.vert", "/showcase/sketches/shaders/shader3.frag")
    img0 = loadImage("/showcase/sketches/wall.jpg")
    img1 = loadImage("/showcase/sketches/tierra.png");
    img2 = loadImage("/showcase/sketches/xsd.jpg")
    imgPivot = img1;
}

function setup() {
    // shaders require WEBGL mode to work
    radio = createRadio();
    checkbox0 = createCheckbox('Esfera/Cilindro', false);
    checkbox0.changed(myCheckedEvent0);
    button = createButton('Imagen');
    button.position(0, 0);
    button.mousePressed(changeBtn);
    
    radio.option('1','SolidNoise');
    radio.option('2','SolidRipple');
    radio.option('3','Sphere');
    radio.style('width', '60px');
    radio.selected('1');
    createCanvas(600, 600, WEBGL);
    radio.style('margin-top', "-150px");
    radio.style('color', 'aqua');
    checkbox0.style('color', 'aqua');
    textAlign(CENTER);
    noStroke();
  }

function draw() {
    background(0);
    // shader() sets the active shader with our shader

    let val = radio.value();
    changeShaderVert(val);


    // Rotate our geometry on the X and Y axes
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.005);

    // Draw some geometry to the screen
    // We're going to tessellate the sphere a bit so we have some more geometry to work with
    if (esfera == 1) {
        sphere(width / 5, 300, 300);
    } else {
        cylinder(width / 8, width / 2, 24, 24, false, false);
    }

}

function changeShaderVert(val) {
    if (val == 1) {
        shader(myShader1);
        myShader1.setUniform("uFrameCount", frameCount);
        myShader1.setUniform("uNoiseTexture", imgPivot);
    } else if (val == 2) {
        shader(myShader2);
        myShader2.setUniform("uFrameCount", frameCount);
        myShader2.setUniform("uNoiseTexture", imgPivot);
    } else {
        shader(myShader3);
        myShader3.setUniform("uFrameCount", frameCount);
        myShader3.setUniform("uNoiseTexture", imgPivot);
    }

}

function myCheckedEvent0() {
    if (checkbox0.checked()) {
        esfera = 0;
    } else {
        esfera = 1
    }
}

function changeBtn() {
    count = count + 1;
    if (count == 0) {
        imgPivot = img0;
    } else if (count == 1) {
        imgPivot = img1
    } else if (count == 2) {
        count = -1
        imgPivot = img2
    } else {

    }

}
