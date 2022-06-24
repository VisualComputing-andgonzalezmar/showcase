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
    quad(-1, -1, 1, -1, 1, 1, -1, 1);
}