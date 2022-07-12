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

    scene.add(bitcoin);
    console.log(dumpObject(bitcoin).join('\n'));

})