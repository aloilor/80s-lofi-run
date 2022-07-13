// INITIALIZING THE SCENE AND OTHER USEFUL THINGS SUCH AS LIGHT AND LOADERS
//SCENE INITIALIZATION
scene = new THREE.Scene();
scene.background = new THREE.Color('black');

// INITIALIZING THE LOADER
var loader = new THREE.GLTFLoader();

// LOAD CAR
var car1;
loader.load( '../models/cars/parzivals_delorean_dmc-12/scene.gltf', function ( gltf ) {
  car1 = gltf.scene;
  car1.scale.multiplyScalar(0.19); 
  car1.name = "car1";
  car1.castShadow = true;
  car1.receiveShadow = true;
  car1.position.setX(0.0);
  car1.position.setY(0.0);
  car1.position.setZ(22.0);
  //car1.position.setZ(-170.0); // HELPFUL DEBUGGER

  dirLight.target = car1;
  

  car1.rotateY(THREE.Math.degToRad(180));
  scene.add( car1 );
  
  // VISUALIZAING THE HIERARCHY OF THE CAR
  console.log(dumpObject(car1).join('\n'));
});

// CAMERA INITIALIZATION
const fov = 45;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 10000;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.x = 2;
camera.position.z = 26.1;
// camera.position.z = -165; // HELPFUL DEBUGGER
camera.position.y = 1.1;

// INITIALIZING POST PROCESSING FILTERS
//const renderScene = new RenderPass(scene, camera);
//const composer = new EffectComposer(renderer);
//composer.addPass(renderScene);

scene.add( camera );

// RENDERER INITIALIZATION
renderer = new THREE.WebGLRenderer( { antialias: true} );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = Math.pow( 0.94, 5.0 );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// AMBIENT LIGHT
const colorA = 0xffdbdb;
const intensityA = 3.0;
const ambLight = new THREE.AmbientLight(colorA, intensityA);
scene.add(ambLight);

// DIRECTIONAL LIGHT
const colorD = 0xFF0000;
const intensityD = 2.0;
const dirLight = new THREE.DirectionalLight(colorD, intensityD);
dirLight.position.set(0, 5.0, -500);
// dirLight.target.position.set(0, 0, 20);
dirLight.castShadow = true;
scene.add(dirLight);
scene.add(dirLight.target);
//HELPER TO VISUALIZE OUR DIRCETIONAL LIGHT
const helper = new THREE.DirectionalLightHelper(dirLight);
scene.add(helper);



// FUNCTION TO RETURN THE HIERARCHY OF THE OBJECTS
function dumpObject(obj, lines = [], isLast = true, prefix = '') {
    const localPrefix = isLast ? '└─' : '├─';
    lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
    const newPrefix = prefix + (isLast ? '  ' : '│ ');
    const lastNdx = obj.children.length - 1;
    obj.children.forEach((child, ndx) => {
      const isLast = ndx === lastNdx;
      dumpObject(child, lines, isLast, newPrefix);
    });
    return lines;
}

function animate() {
    
    renderer.render( scene, camera );


    requestAnimationFrame( animate );
    //camera.position.z -= 0.1;
    //car1.position.z -= 0.1;

    if(car1){
      rotateWheelTire(car1);
    }
    
};

animate();