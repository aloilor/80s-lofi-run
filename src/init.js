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
finishTweenCamera = false;

function cameraTween(){
  if(tweenCameraFlag){
    tweenCameraFlag = false;
  new TWEEN.Tween(camera.position).to({z:camera.position.z + 88.25}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.position).to({y:camera.position.y - 19.0}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.position).to({x:camera.position.x - 18.5}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.rotation).to({y:camera.rotation.y - 2.8}, 5000).easing(TWEEN.Easing.Linear.None).start();
  new TWEEN.Tween(camera.rotation).to({x:camera.rotation.x - 0.5}, 5000).easing(TWEEN.Easing.Linear.None).onComplete(function() {finishTweenCamera = true}).start();

  }
}

var timeLoading = 0;
clock.start();
function animate() {
    timeLoading += 1;
    console.log(lives);
    renderer.render( scene, camera );
    requestAnimationFrame( animate );

    if(timeLoading > 250){
    document.getElementById("loading").style.display = "none";
    cameraTween();
  
    TWEEN.update();

    if(finishTweenCamera){

      if (fence) random_obs_spawn(fence);
      if (bitcoin) {random_bitcoin_spawn(bitcoin); rotateBitcoin();}
      if (nitro) random_nitro_spawn(nitro);
      if (keepGoing && car1 && camera.position.z > -715){
        camera.position.z -= 0.07;
        car1.position.z -= 0.07;
        if (bubble){ //SET THE BUBBLE TO BE ATTACHED TO THE CAR
          bubble.position.x = car1.position.x;
          bubble.position.z = car1.position.z + 0.15;
          bubble.position.y = car1.position.y + 0.15;
        }  
        rotateWheel(car1);
        TWEEN.update();
        
        blink(car1, invFlag);

        if (invFlag && clock.getElapsedTime() >= nitroStartInv + nitroSpan){
          invFlag = false;
          scene.remove(bubble);          
        }

        //OBSTACLE COLLISION
        if(obs_collision(car1) && !invFlag) {
          //keepGoing = false;
          collisionFlag = true;
          collisionStart = clock.getElapsedTime();
          lives -= 1;
          car1.traverse( child => {
            if ( child.material ){
              child.material.opacity = 0.0;
              child.material.transparent = true;
            } 
          } );
        }
        bitcoin_collision(car1);

        //GETTING NITRO
        if (nitro_collision(car1)){
          nitroStartInv = clock.getElapsedTime();
          bubble.position.setX(bubblePosX);
          bubble.position.setY(bubblePosY);
          bubble.position.setZ(bubblePosZ);
          scene.add(bubble);
        }
      } else if(! keepGoing || car1 && camera.position.z < -715) {
        endAnimation(car1);
        TWEEN.update();
      }
    }

  }

}; animate();

