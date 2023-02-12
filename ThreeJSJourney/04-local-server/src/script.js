import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: '#0000f0'});
const mesh = new THREE.Mesh(geometry, material);

// Add Mesh to Scene
scene.add(mesh);

// Sizes
const size = {
  width: 800,
  height: 600
}

// Camera: Point of view
// When rendering one scene, the view only comes from one of the cameras
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 1;
scene.add(camera);

// Setup Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(size.width, size.height);

// Render
renderer.render(scene, camera);