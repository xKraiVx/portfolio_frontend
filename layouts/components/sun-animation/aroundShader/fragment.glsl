uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform samplerCube uPerlin;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 eyeVector;

float PI = 3.141592653589793238;

float Fresnel(vec3 eyeVector, vec3 worldNormal) {
    return pow(1.0 + dot(eyeVector, worldNormal), 3.0);
}

vec3 brightnessToColor(float b) {
    b *= 0.20;

    return (vec3(b, b * b, b * b * b * b) / 0.2) * 0.6;
}


void main() {
    float brightness = - 1.5 + abs(sin(time * 0.1) * 0.8);

    float fres = Fresnel(eyeVector, vNormal);
    brightness += fres;

    vec3 col = brightnessToColor(brightness);
    gl_FragColor = vec4(col, 0.);
}