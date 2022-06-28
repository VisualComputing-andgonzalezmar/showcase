precision mediump float;

// uniforms are defined and sent by the sketch
uniform bool grey_scale;
uniform sampler2D texture;

// interpolated texcoord (same name and type as in vertex shader)
varying vec2 texcoords2;

// returns luma of given texel
float luma(vec3 texel) {
    //Se saca el maximo de los tres componentes MAX(R,G,B)
    float max = texel.r;
    if(texel.g > max){
        max = texel.g;
    }
    if(texel.b > max){
        max = texel.b;
    }

    //Se saca el maximo de los tres componentes MIN(R,G,B)
    float min = texel.r;
    if(texel.g < min){
        min = texel.g;
    }
    if(texel.b < min){
        min = texel.b;
    }
    float lightnessL = 0.5 * max + 0.5 * min;
    return lightnessL + lightnessL + lightnessL;
}

void main() {
  // texture2D(texture, texcoords2) samples texture at texcoords2 
  // and returns the normalized texel color
  vec4 texel = texture2D(texture, texcoords2);
  gl_FragColor = grey_scale ? vec4((vec3(luma(texel.rgb))), 1.0) : texel;
}