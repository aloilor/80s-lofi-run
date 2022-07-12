loader.load( '../models/maps/80s-style/neonroad_endless_loop/scene.gltf', function ( gltf ) {
    ambient = gltf.scene;
    ambient.name = "ambient1";
    scene.add( ambient );
    
    //VISUALIZING THE HIERARCHY OF OUR ENVIRONMENT 
    //console.log(dumpObject(ambient).join('\n'));
});
