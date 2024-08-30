export const vertex: string = `

varying vec2 vUv;

void main() {
    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`;

export const fragment: string = `

uniform vec3 uColour1;
uniform vec3 uColour2;

varying vec2 vUv;

// vec3 colorA = vec3(0.912,0.191,0.652);
// vec3 colorB = vec3(1.000,0.777,0.052);

// vec3 colourNormal = uColour1 / 255.0;

void main() {
  vec3 color = mix(uColour1, uColour2, vUv.x);

  gl_FragColor = vec4(color, 1.0);
}
`;
