let uvShader;

function preload() {
    uvShader = readShader('/showcase/sketches/shaders/uv.frag', { matrices: Tree.NONE, varyings: Tree.texcoords2 });
}

function setup() {
    createCanvas(570, 470, WEBGL);
    noStroke();
    shader(uvShader);
    textureMode(NORMAL);
}

function draw() {
    background(0);
    //quad(-0.5, -0.5, 0, 1, 0, 1, 0.5, -0.5);
    //triangle(-0.5, -0.5, 0, 1, 0.5, -0.5);
    circle(0, 0, 0.2);
}