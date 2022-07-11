loader.load( '../models/cars/parzivals_delorean_dmc-12/scene.gltf', function ( gltf ) {
    car1 = gltf.scene;
    car1.scale.multiplyScalar(0.19); 
    car1.name = "car1";
    car1.position.setX(0.0);
    car1.position.setY(0.0);
    car1.position.setZ(22.0);
    //car1.position.setZ(-170.0); // HELPFUL DEBUGGER

    car1.rotateY(THREE.Math.degToRad(180));
    scene.add( car1 );

    // VISUALIZAING THE HIERARCHY OF THE CAR
    console.log(dumpObject(car1).join('\n'));
});
