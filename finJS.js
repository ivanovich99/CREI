// Declaración variables 
var scene, camera; 

// Dimensiones del canvas y tamaño de ventana
var width = window.innerWidth;
var height = window.innerHeight;

// Función inicializar escena
function init(){
  // Mandar a llamar Canvas del HTML
  canvas = document.getElementById("scene");
  gl = WebGLUtils.setupWebGL(canvas);
  
  // Render Obj3D 
  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  // Tamano renderer
  renderer.setSize(width, height);
  
  // Crear escena y cámara
  scene = new THREE.Scene();

  // Crear camara
  camera = new THREE.PerspectiveCamera(50, width/height);

  // Posicion camara 
  camera.position.set(0,0,10);

  // Agregar camera a escena 
  scene.add(camera);
  
  // Crear luz direccional
  directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

  // Posicion directionalLight 
  directionalLight.position.set(0,0,10);

  // Agregar directionalLight a escena 
   scene.add(directionalLight);

  // Cargar OBJ
  loadOBJ();
}

// Cargar modelo 3D
var loadOBJ = function(){
  var manager = new THREE.LoadingManager();
  var loader = new THREE.OBJLoader(manager);
  
  // Cargar Modelo 3D de Github  
  loader.load('https://ivanovich99.github.io/GV/tallerCREI/fox.obj', agregarObj3D);
};

// Inicio Funciones Modificaciones Objeto 
var agregarObj3D = function(objeto){

  // Redimensionar objeto 
  objeto.scale.set(1, 1, 1);
  objeto.position.set(0, 0, 0);

  // Sliders Rotaciones
  document.getElementById("sliRotX").oninput = function() {
   objeto.rotation.x = parseFloat(this.value);
  };
  
  document.getElementById("sliRotY").oninput = function() {
   objeto.rotation.y = parseFloat(this.value);
  };
  
  document.getElementById("sliRotZ").oninput = function() {
   objeto.rotation.y = parseFloat(this.value);
  };

  // Escalamiento Sliders
  document.getElementById("sliEscX").oninput = function() { 
   objeto.scale.x = parseFloat(this.value);
  };
  
  document.getElementById("sliEscY").oninput = function() { 
   objeto.scale.y = parseFloat(this.value);
  };
  
  document.getElementById("sliEscZ").oninput = function() { 
   objeto.scale.z = parseFloat(this.value);
  };

  // Translación Sliders 
  document.getElementById("sliTransX").oninput = function() {
      objeto.position.z = parseFloat(this.value);
  };
  
  document.getElementById("sliTransY").oninput = function() {
      objeto.position.y = parseFloat(this.value);
  };
  
  document.getElementById("sliTransZ").oninput = function() {
      objeto.position.z = parseFloat(this.value);
  };

  // Color Objeto 3D
  objeto.traverse(function(child) {
    if (child instanceof THREE.Mesh) {
      child.material.color = new THREE.Color('#f9710c')
    }
  });

  // Agregar objeto a escena
  scene.add(objeto);

  // Renderizar
  render();
};

// Funcion loop para renderizar en cada cambo 
var render = function() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

// Inicializar y renderizar
init();
render();
