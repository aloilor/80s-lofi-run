loader.load( '../models/cars/parzivals_delorean_dmc-12/scene.gltf', function ( gltf ) {
    car1 = gltf.scene;
    car1.scale.multiplyScalar(0.19); 
    car1.name = "car1";
    car1.castShadow = true;
    car1.receiveShadow = true;
    car1.position.setX(0.0);
    car1.position.setY(0.0);
    car1.position.setZ(22.0);
    //car1.position.setZ(-170.0); // HELPFUL DEBUGGER

    dirLight.target = car1;
    

    car1.rotateY(THREE.Math.degToRad(180));
    scene.add( car1 );
    
    // VISUALIZAING THE HIERARCHY OF THE CAR
    console.log(dumpObject(car1).join('\n'));
});

frontWheel = document.getElementById('Front_Wheel_Llanta')
backWheel = document.getElementById('Back_Wheel_Llanta')
frontTire = document.getElementById('Tire_Front')
backTire = document.getElementById('Tire_Back')

var groupFront = new TWEEN.Group()
var groupBack = new TWEEN.Group()

var tweenFront = new TWEEN.Tween({x: 1}, groupFront).to({x: 10}, 100).start()
var tweenBack = new TWEEN.Tween({x: 1}, groupBack).to({x: 10}, 100).start()

groupFront.update() // only updates tweenA
groupBack.update() // only updates tweenB