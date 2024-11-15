// Declaración variables 
var scene, camera;

// Dimensiones del canvas y tamaño de ventana
var width = window.innerWidth;
var height = window.innerHeight;

// Función inicializar escena
function init(){
  // Mandar a llamar Canvas del HTML
  canvas = document.getElementById("");
  gl = WebGLUtils.setupWebGL(canvas);
  
  // Render Obj3D 
  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  
  // Tamano renderer
  renderer.setSize(00,00);
  
  // Crear escena 
  // scene = new THREE.

  // Crear camara
  // camera = new THREE.

  // Posicion camara (x,y,z)
  // camera.position

  // Agregar camara a escena 
  // scene.add

  // Crear luz direccional (color, intensidad)
  light = new THREE.DirectionalLight(0xffffff, 0.8);

  // Posicion luz (x,y,z)
  // light.position

  // Agregar luz a escena 
  // scene.add
  
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
  document.getElementById("").oninput = function() {
    // objeto.rotation.x = parseFloat(this.value);
  };

  // Slider Rotacion Y
  document.getElementById("").oninput = function() { 
    // objeto.rotation. =
  };

  // Slider Rotacion Z
  document.getElementById("").oninput = function() { 
    // objeto.rotation. =
  };

  // --- SLIDERS ESCALAMIENTO ---
  // Slider Escalamiento X
  document.getElementById("").oninput = function() {
    // objeto.scale.x = parseFloat(this.value);
  };

  // Slider Escalamiento Y
  document.getElementById("").oninput = function() { 
    // objeto.scale. =
  };

  // Slider Escalamiento Z
  document.getElementById("").oninput = function() { 
    // objeto.scale. =
  };

  // --- SLIDERS TRASLACIÓN ---
  // Slider Translación X
  document.getElementById("").oninput = function() {
    // objeto.position.x = parseFloat(this.value);
  };

  // Slider Translación Y
  document.getElementById("").oninput = function() {
    // objeto.position. = 
  };

  // Slider Translación Z
  document.getElementById("").oninput = function() {
    // objeto.position. = 
  };

  // Color Objeto 3D
  objeto.traverse(function(child) {
    if (child instanceof THREE.Mesh) {
      // child.material.color =
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
