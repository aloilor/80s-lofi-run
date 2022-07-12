var max_distance = 30;
var size = 3;
var bitcoins = new Array();

loader.load( '../models/other entities/bitcoin/scene.gltf', function ( gltf ) {
    bitcoin = gltf.scene;
    bitcoin.scale.multiplyScalar(0.13); 
    bitcoin.position.setX(0.0);
    bitcoin.position.setY(0.05);
    bitcoin.position.setZ(21.0);
    bitcoin.name = "bitcoin"
    bitcoin.castShadow = true;
    bitcoin.receiveShadow = true;
    //bitcoin.rotateY(THREE.Math.degToRad(180));


    // ATTACH POINT LIGHT TO EVERY SINGLE BITCOIN
    colorP = 0xFFFFFF;
    intensityP = 1;
    pointLight = new THREE.PointLight(colorP, intensityP);
    pointLight.position.set(0, 0.05, 21.0);

    bitcoin.add(pointLight);
    const helper = new THREE.PointLightHelper(pointLight);
    bitcoin.add(helper);



    scene.add(bitcoin);
    console.log(dumpObject(bitcoin).join('\n'));

})