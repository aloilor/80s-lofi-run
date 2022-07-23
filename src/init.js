// import * from "./bitcoins.js";ù
// import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
// import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';

const bloom = urlParams.get("bloom");
const blur = urlParams.get("blur");
var checkBloom;
var checkBlur;

if(bloom == "true"){
  checkBloom = true;
} else {
  checkBloom = false;
}

if(blur == "true"){
  checkBlur = true;
} else {
  checkBlur = false;
}

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

const renderScene = new THREE.RenderPass(scene, camera);
const composer = new THREE.EffectComposer(renderer);
composer.addPass(renderScene);

if(checkBloom){
  const bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.45, //intensity
    0.1, // ratio of bloom
    0.1 //pixel che emette il bloom
  );

  composer.addPass(bloomPass);
}


if(checkBlur){
  const hblur = new THREE.ShaderPass( THREE.HorizontalBlurShader );
  hblur.uniforms[ 'h' ].value = 1 / ( window.innerWidth / 1 );
  composer.addPass( hblur );

  const vblur = new THREE.ShaderPass( THREE.VerticalBlurShader );
  vblur.uniforms[ 'v' ].value = 1 / ( window.innerHeight / 1 );
  vblur.renderToScreen = true;
  composer.addPass( vblur );
}

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

//MARS

var marsColor = new THREE.TextureLoader().load( '../textures/marsColor.jpg' );
var marsNormal = new THREE.TextureLoader().load( '../textures/marsNormal.png' );
var marsSpecular = new THREE.TextureLoader().load( '../textures/marsSpecular.png' );
var geometry = new THREE.SphereGeometry( 60, 160, 80);
var material = new THREE.MeshPhongMaterial( { map: marsColor, bumpMap: marsNormal, specularMap: marsSpecular} );
var mars = new THREE.Mesh( geometry, material );
mars.position.x = -300;
mars.position.y = 50;
mars.position.z = -175;
scene.add( mars );

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

var explosionFlag = true;
var timeLoading = 0;
clock.start();
function animate() {
    timeLoading += 1;
    //console.log(lives);
    //renderer.render( scene, camera );
    composer.render();
    requestAnimationFrame( animate );
    mars.rotation.y += 0.01;

    if(timeLoading > 250){
    document.getElementById("loading").style.display = "none";
    cameraTween();
  
    TWEEN.update();

    if(finishTweenCamera){

      if (fence) random_obs_spawn(fence);
      if (bitcoin) {random_bitcoin_spawn(bitcoin); rotateBitcoin();}
      if (nitro) random_nitro_spawn(nitro);
      if (keepGoing && car1 && camera.position.z > -715){

        mars.position.z -= carSpeed+0.03;
        camera.position.z -= carSpeed;
        car1.position.z -= carSpeed;
        if (bubble){ //SET THE BUBBLE TO BE ATTACHED TO THE CAR
          bubble.position.x = car1.position.x;
          bubble.position.z = car1.position.z + 0.15;
          bubble.position.y = car1.position.y + 0.15;
        }  
        rotateWheel(car1);
        TWEEN.update();
        
        blink(car1, invFlag);
        
        if (invFlag){
          nitro_catch(car1, bitcoins);
          TWEEN.update();
        } 

        if (invFlag && clock.getElapsedTime() >= nitroStartInv + nitroSpan){
          invFlag = false;
          scene.remove(bubble);          
        }

        //OBSTACLE COLLISION
        if(obs_collision(car1) && !invFlag) {
          //keepGoing = false;
          collisionFlag = true;
          collisionStart = clock.getElapsedTime();
          car1.traverse( child => {
            if ( child.material ){
              child.material.opacity = 0.0;
              child.material.transparent = true;
            } 
          } );
        }

        if (lives == 0) keepGoing = false;
        bitcoin_collision(car1);

        //GETTING NITRO
        if (nitro_collision(car1)){
          nitroStartInv = clock.getElapsedTime();
          bubble.position.setX(bubblePosX);
          bubble.position.setY(bubblePosY);
          bubble.position.setZ(bubblePosZ);
          scene.add(bubble);
        }
      
        if (!keepGoing){
          freeTheScene(nitros); freeTheScene(obstacles); freeTheScene(bitcoins);
          if(explosionFlag){
            explosionFlag = false;
            explosionCar(car1);
            TWEEN.update();
          }
        }
      
      } else if(car1 && camera.position.z < -715) {
        freeTheScene(nitros); freeTheScene(obstacles); freeTheScene(bitcoins);
        endAnimation(car1);
        TWEEN.update();
      }
    }

  }

}; animate();

