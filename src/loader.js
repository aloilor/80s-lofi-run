// INITIALIZING THE LOADER
var loader = new THREE.GLTFLoader();

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
    //scene.add(bitcoin);
    //console.log(dumpObject(bitcoin).join('\n'));
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
  //bitcoin.rotateY(THREE.Math.degToRad(180));
  //scene.add(nitro);
  //console.log(dumpObject(bitcoin).join('\n'));

})


// LOADING ENVIRONMENT MODEL 
loader.load( '../models/maps/80s-style/neonroad_endless_loop/scene.gltf', function ( gltf ) {
    ambient = gltf.scene;
    ambient.name = "ambient1";
    scene.add( ambient );
    
    //VISUALIZING THE HIERARCHY OF OUR ENVIRONMENT 
    //console.log(dumpObject(ambient).join('\n'));
});




