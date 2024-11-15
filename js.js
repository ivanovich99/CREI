// Declaración variables 
var scene, camera;

// Dimensiones del canvas y tamaño de ventana
var width = window.innerWidth;
var height = window.innerHeight;

// Función inicializar escena
function init(){
  // Mandar a llamar Canvas del HTML
  // canvas = 
  gl = WebGLUtils.setupWebGL(canvas);
  
  // Render Obj3D 
  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  // Tamano renderer
  renderer.setSize(, );
  
  // Crear escena y cámara
  // scene =

  // Crear camara
  // camera = 

  // Posicion camara 
  // position

  // Agregar luz a escena 

  
  // Crear luz direccional
  light = new THREE.DirectionalLight(0xffffff, 0.8);

  // Posicion camara 
  // position

  // Agregar escena a camara 
  
  // Cargar OBJ
  
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

  // Redimensionar objeto 
  objeto.scale.set(1, 1, 1);
  objeto.position.set(0, 0, 0);

  // Sliders Rotaciones
  document.getElementById("").oninput = function() {
    // rotation.
  };

  // Escalamiento Sliders
  document.getElementById("").oninput = function() { 
    // scale.
  };

  // Translación Sliders 
  document.getElementById("").oninput = function() {
    // position.
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
