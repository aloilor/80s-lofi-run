// import * from "./bitcoins.js";


// INITIALIZING THE SCENE AND OTHER USEFUL THINGS SUCH AS LIGHT AND LOADERS
//SCENE INITIALIZATION
scene = new THREE.Scene();
//scene.background = new THREE.Color('black');

// CAMERA INITIALIZATION
const fov = 45;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 10000;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

//DEFAULT VALUE

posX = 1.0;
posY = 1.0;
posZ = -1.75;
rotX = 0.0;
rotY = 0.2;

camera.position.x = 19.5;
camera.position.z = -90;
// camera.position.z = -165; // HELPFUL DEBUGGER
camera.position.y = 20;
camera.rotation.y = 3;
camera.rotation.x = 0.5;
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
//scene.add(helper);

tweenCameraFlag = true;

function cameraTween(){
  if(tweenCameraFlag){
    tweenCameraFlag = false;
  new TWEEN.Tween(camera.position).to({z:camera.position.z + 70.0}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.position).to({y:camera.position.y - 18.9}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.position).to({x:camera.position.x - 18.5}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.rotation).to({y:camera.rotation.y - 2.8}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.rotation).to({x:camera.rotation.x - 0.5}, 5000).easing(TWEEN.Easing.Linear.None).start();
  }
}

var timeLoading = 0;
console.log(timeLoading)

function animate() {
    timeLoading += 1;

    console.log(timeLoading)
    renderer.render( scene, camera );
    requestAnimationFrame( animate );

    if(timeLoading > 250){
    document.getElementById("loading").style.display = "none";
    cameraTween();

    if (bitcoin) {random_bitcoin_spawn(bitcoin); rotateBitcoin();}
    if (nitro) random_nitro_spawn(nitro);
    if (car1 && camera.position.z > -715){
      camera.position.z -= 0.07;
      car1.position.z -= 0.07;
      rotateWheel(car1);
      TWEEN.update();
      bitcoin_collision(car1);
      nitro_collision(car1);
    } else if(car1 && camera.position.z < -715) {
      endAnimation(car1);
      TWEEN.update();
    }

  }

}; animate();

