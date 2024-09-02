export const vertex: string = `

varying vec2 vUv;

uniform float uTime;
uniform float uMovement;
uniform float uSpeed;

void main() {
  vUv = uv;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  modelPosition.y += sin(modelPosition.x * 6.0 + uTime * uSpeed) * 0.1;
  modelPosition.y += sin(modelPosition.z * 10.0 + uTime * uMovement) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`;

export const fragment: string = `

uniform vec3 uColour1;
uniform vec3 uColour2;

varying vec2 vUv;

void main() {
  vec3 color = mix(uColour1, uColour2, vUv.x);

  gl_FragColor = vec4(color, 1.0);
}
`;
