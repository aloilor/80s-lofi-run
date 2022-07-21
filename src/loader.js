// INITIALIZING THE LOADER
var loader = new THREE.GLTFLoader();

// LOADING CAR MODEL 
var carPosX = 0.0;
var carPosY = 0.1;
var carPosZ = -5;
// LOAD CAR
var car1;
loader.load( '../models/cars/vintage_sport_car/scene.gltf', function ( gltf ) {
  car1 = gltf.scene;
  car1.scale.multiplyScalar(0.30); 
  car1.name = "car1";
  car1.castShadow = true;
  car1.receiveShadow = true;
  car1.position.setX(carPosX);
  car1.position.setY(carPosY);
  car1.position.setZ(carPosZ);
  car1.rotation.y = Math.PI / 10;

    gltf.scene.traverse( child => {
        if ( child.material ) child.material.metalness = 0.80;
    } );
  car1.rotateY(THREE.Math.degToRad(180));
  scene.add( car1 );
  
  var textureWheel = new THREE.TextureLoader().load( '../textures/PngItem_2081052.png' );
  frontWheelLeft = car1.getObjectByName('Object_127');
  textureWheel.encoding = THREE.sRGBEncoding;
  frontWheelLeft.material.map = textureWheel;
  frontWheelLeft.material.needsUpdate = true;

  // VISUALIZAING THE HIERARCHY OF THE CAR
  // console.log(dumpObject(car1).join('\n'));
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
    
    gltf.scene.traverse( child => {
      if ( child.material ) child.material.metalness = 0.0001;
    } );
})

// LOADING NITRO MODEL
var nitro;
var nitroPosX = 0;
var nitroPosY = 0.05;
var nitroPosZ = -6;
loader.load( '../models/other entities/nitrogen_bottle/scene.gltf', function ( gltf ) {
  nitro = gltf.scene;
  nitro.scale.multiplyScalar(0.01); 
  nitro.position.setX(nitroPosX);
  nitro.position.setY(nitroPosY);
  nitro.position.setZ(nitroPosZ);
  nitro.name = "nitro"
  nitro.castShadow = true;
  nitro.receiveShadow = true;

  gltf.scene.traverse( child => {
    if ( child.material ){
      child.material.metalness = 0.1;
      child.material.transparent = true;
      //console.log(child.material.transparent);
    } 
  } );
})


// LOADING ENVIRONMENT MODEL 
loader.load( '../models/maps/80s-style/neonroad_endless_loop/scene.gltf', function ( gltf ) {
    ambient = gltf.scene;
    ambient.name = "ambient1";
    scene.add( ambient );
});



var fence;
var fencePosX = 0;
var fencePosY = 0.05;
var fencePosZ = -8;
loader.load( '../models/other entities/concrete_fence/scene.gltf', function ( gltf ) {
  fence = gltf.scene;
  fence.scale.multiplyScalar(0.005); 
  fence.position.setX(-0.75 + 3*offset);
  fence.position.setY(fencePosY);
  fence.position.setZ(fencePosZ);
  fence.rotateY(THREE.Math.degToRad(90));
  fence.name = "fence";
  fence.castShadow = true;
  fence.receiveShadow = true;

  gltf.scene.traverse( child => {
    if ( child.material ) child.material.metalness = 0.4;
  } );
})


var bubble;
var bubblePosX = carPosX;
var bubblePosY = carPosY + 0.15;
var bubblePosZ = carPosZ + 0.2;
//LOADING INVINCIBILITY BUBBLE
loader.load( '../models/other entities/energy_sphere/scene.gltf', function ( gltf ) {
  bubble = gltf.scene;
  bubble.scale.multiplyScalar(0.6); 
  bubble.position.setX(bubblePosX);
  bubble.position.setY(bubblePosY);
  bubble.position.setZ(bubblePosZ+0.1);
  //bubble.rotateY(THREE.Math.degToRad(90));
  bubble.name = "bubble";
  bubble.castShadow = true;
  bubble.receiveShadow = true;

  gltf.scene.traverse( child => {
    if ( child.material ){
      child.material.metalness = 0.4;
      child.material.opacity = 0.4;
      child.material.transparent = true;
    } 
  } );
  //scene.add(bubble);
})






