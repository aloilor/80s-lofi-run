// import * from "./bitcoins.js";


// INITIALIZING THE SCENE AND OTHER USEFUL THINGS SUCH AS LIGHT AND LOADERS
//SCENE INITIALIZATION
scene = new THREE.Scene();
//scene.background = new THREE.Color('black');

// INITIALIZING THE LOADER
var loader = new THREE.GLTFLoader();

// CAMERA INITIALIZATION
const fov = 45;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 10000;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.x = 0.0;
camera.position.z = 0;
// camera.position.z = -165; // HELPFUL DEBUGGER
camera.position.y = 1.1;

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

// INITIALIZING POST PROCESSING FILTERS
//const renderScene = new THREE.RenderPass(scene, camera);
//const composer = new THREE.EffectComposer(renderer);
//composer.addPass(renderScene);

// AMBIENT LIGHT
const colorA = 0xffdbdb;
const intensityA = 3.5;
const ambLight = new THREE.AmbientLight(colorA, intensityA);
scene.add(ambLight);

// DIRECTIONAL LIGHT
const colorD = 0xFF0000;
const intensityD = 4.0;
const dirLight = new THREE.DirectionalLight(colorD, intensityD);
dirLight.position.set(0, 10.0, -720);
dirLight.target.position.set(0, 0, 25);
dirLight.castShadow = true;
scene.add(dirLight);
scene.add(dirLight.target);
//HELPER TO VISUALIZE OUR DIRCETIONAL LIGHT
const helper = new THREE.DirectionalLightHelper(dirLight);
scene.add(helper);


// LOADING CAR MODEL 
var carPosX = 0.0;
var carPosY = 0.0;
var carPosZ = -4;
var car1;
loader.load( '../models/cars/parzivals_delorean_dmc-12/scene.gltf', function ( gltf ) {
    car1 = gltf.scene;
    car1.scale.multiplyScalar(0.19); 
    car1.name = "car1";
    car1.castShadow = true;
    car1.receiveShadow = true;
    car1.position.setX(carPosX);
    car1.position.setY(carPosY);
    car1.position.setZ(carPosZ);
    //car1.position.setZ(-170.0); // HELPFUL DEBUGGER

    car1.rotateY(THREE.Math.degToRad(180));
    scene.add( car1 );
    
    // VISUALIZAING THE HIERARCHY OF THE CAR
    //console.log(dumpObject(car1).join('\n'));
});

// LOADING BITCOIN MODEL 
var bitcoin;
var bitPosX = coinMid;
var bitPosY = 0.05;
var bitPosZ = -5;
loader.load( '../models/other entities/bitcoin/scene.gltf', function ( gltf ) {
    bitcoin = gltf.scene;
    bitcoin.scale.multiplyScalar(0.13); 
    bitcoin.position.setX(bitPosX);
    bitcoin.position.setY(bitPosY);
    bitcoin.position.setZ(bitPosZ);
    bitcoin.name = "bitcoin"
    bitcoin.castShadow = true;
    bitcoin.receiveShadow = true;
    //bitcoin.rotateY(THREE.Math.degToRad(180));
    scene.add(bitcoin);
    //console.log(dumpObject(bitcoin).join('\n'));

})

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

    if (bitcoin) random_bitcoin_spawn(bitcoin);
    if (car1 && camera.position.z > -715){
      camera.position.z -= 0.12;
      car1.position.z -= 0.12;
      bitcoin_collision(car1);
    }
    

};

animate();