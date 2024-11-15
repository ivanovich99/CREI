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
  renderer.setSize(width,height);
  
  // Crear escena 
  scene = new THREE.Scene();

  // Crear camara
  camera = new THREE.PerspectiveCamera(50, width/height);

  // Posicion camara (x,y,z)
  camera.position.set(0,0,10);

  // Agregar camara a escena 
  scene.add(camera);

  // Crear luz direccional (color, intensidad)
  light = new THREE.DirectionalLight(0xffffff, 0.8);

  // Posicion luz (x,y,z)
  light.position.set(0,0,10);

  // Agregar luz a escena 
  scene.add(light);
  
  // Cargar OBJ
  loadOBJ();
}

// Cargar modelo 3D
var loadOBJ = function(){
  var manager = new THREE.LoadingManager();
  var loader = new THREE.OBJLoader(manager);
  
  // Cargar Modelo 3D de Github  
  loader.load('https://ivanovich99.github.io/CREI/fox.obj', agregarObj3D);
};

// Inicio Funciones Modificaciones Objeto 
var agregarObj3D = function(objeto){

  // Redimensionar objeto (x,y,z)
  objeto.scale.set(1, 1, 1);
  objeto.position.set(0, 0, 0);

  // --- SLIDERS ROTACION ---
  // Slider Rotacion X
  document.getElementById("sliRotX").oninput = function() {
    objeto.rotation.x = parseFloat(this.value);
  };

  // Slider Rotacion Y
  document.getElementById("sliRotY").oninput = function() { 
    objeto.rotation.y = parseFloat(this.value);
  };

  // Slider Rotacion Z
  document.getElementById("sliRotZ").oninput = function() { 
    objeto.rotation.z = parseFloat(this.value);
  };

  // --- SLIDERS ESCALAMIENTO ---
  // Slider Escalamiento X
  document.getElementById("sliEscX").oninput = function() {
    objeto.scale.x = parseFloat(this.value);
  };

  // Slider Escalamiento Y
  document.getElementById("sliEscY").oninput = function() { 
    objeto.scale.y = parseFloat(this.value);
  };

  // Slider Escalamiento Z
  document.getElementById("sliEscZ").oninput = function() { 
    objeto.scale.z = parseFloat(this.value);
  };

  // --- SLIDERS TRASLACIÓN ---
  // Slider Translación X
  document.getElementById("sliTransX").oninput = function() {
    objeto.position.x = parseFloat(this.value);
  };

  // Slider Translación Y
  document.getElementById("sliTransY").oninput = function() {
    objeto.position.y = parseFloat(this.value);
  };

  // Slider Translación Z
  document.getElementById("sliTransZ").oninput = function() {
    objeto.position.z = parseFloat(this.value);
  };

  // Color Objeto 3D
  objeto.traverse(function(child) {
    if (child instanceof THREE.Mesh) {
      child.material.color = new THREE.Color('#f9710c');
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
