var animTime = 350;


function rotateWheel(car1) {

    // IMPORT OBJECT

    frontWheelLeft = car1.getObjectByName('front_wheel_left_53');
    frontWheelRight = car1.getObjectByName('front_wheel_right_55');
    backWheelLeft = car1.getObjectByName('front_wheel_left001_57');
    backtWheelRight = car1.getObjectByName('front_wheel_right001_59');

    //CREATE AXIS

    var frontAxis = new THREE.Vector3();
    var backAxis = new THREE.Vector3();

    frontAxis.copy( frontWheelLeft.position ).sub( frontWheelRight.position );
    backAxis.copy( backWheelLeft.position ).sub( backtWheelRight.position );

    //ROTATE THE WHEELS

    frontWheelLeft.rotateOnAxis( frontAxis, Math.PI / 180 );
    frontWheelRight.rotateOnAxis( frontAxis, Math.PI / 180 );
    backWheelLeft.rotateOnAxis( backAxis, Math.PI / 180 );
    backtWheelRight.rotateOnAxis( backAxis, Math.PI / 180 );

}

// CAR MOVEMENT

document.addEventListener("keydown", onDocumentKeyDown, false);
var keyFlag = true;
var keyFlagJump = true;
function onDocumentKeyDown(event) {
var keyCode = event.which;
car = car1.getObjectByName('root');
frontWheelLeft = car1.getObjectByName('front_wheel_left_53');
frontWheelRight = car1.getObjectByName('front_wheel_right_55');
backWheelLeft = car1.getObjectByName('front_wheel_left001_57');
backtWheelRight = car1.getObjectByName('front_wheel_right001_59');
var rightYaxis = new THREE.Vector3();
var leftYaxis = new THREE.Vector3();
rightYaxis.copy( frontWheelRight.position ).sub( backtWheelRight.position );
leftYaxis.copy( frontWheelLeft.position ).sub( backWheelLeft.position );
    // left
if (keyCode == 65 && keyFlag && car1.position.x != - 1 && car1.position.z > -714) {
    //console.log(car.position.x + 'sx');
    keyFlag = false;
    frontWheelLeft.rotation.x = 0.0;
    frontWheelLeft.rotation.y = 0.0;
    frontWheelLeft.rotation.z = 0.0;
    frontWheelRight.rotation.x = 0.0;
    frontWheelRight.rotation.y = 0.0;
    frontWheelRight.rotation.z = 0.0;
    new TWEEN.Tween(car1.position).to({x:car1.position.x - 0.5}, animTime).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(function() {keyFlag = true}).start();
    new TWEEN.Tween(car.rotation).to({z:car.rotation.z + Math.PI / 15}, animTime/2).easing(TWEEN.Easing.Sinusoidal.Out).chain(
    new TWEEN.Tween(car.rotation).to({z:car.rotation.z - Math.PI / 215}, animTime/2).easing(TWEEN.Easing.Sinusoidal.Out)).start();
    new TWEEN.Tween(frontWheelLeft.rotation).to({y:frontWheelLeft.rotation.y + 1, z:frontWheelLeft.rotation.z - 0.5}, 250).easing(TWEEN.Easing.Sinusoidal.Out).chain(
    new TWEEN.Tween(frontWheelLeft.rotation).to({y:frontWheelLeft.rotation.y = 0, z:frontWheelLeft.rotation.z = 0}, 250).easing(TWEEN.Easing.Sinusoidal.Out)).start();
    new TWEEN.Tween(frontWheelRight.rotation).to({y:frontWheelRight.rotation.y + 1, z:frontWheelRight.rotation.z - 0.5}, 250).easing(TWEEN.Easing.Sinusoidal.Out).chain(
    new TWEEN.Tween(frontWheelRight.rotation).to({y:frontWheelRight.rotation.y = 0, z:frontWheelRight.rotation.z = 0}, 250).easing(TWEEN.Easing.Sinusoidal.Out)).start();

    // right
} else if (keyCode == 68 && keyFlag && car1.position.x != + 1 && car1.position.z > -714) {
    //console.log('dx');
    keyFlag = false;
    frontWheelRight.rotation.x = 0.0;
    frontWheelRight.rotation.y = 0.0;
    frontWheelRight.rotation.z = 0.0;
    frontWheelLeft.rotation.x = 0.0;
    frontWheelLeft.rotation.y = 0.0;
    frontWheelLeft.rotation.z = 0.0;
    new TWEEN.Tween(car1.position).to({x:car1.position.x + 0.5}, animTime).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(function() {keyFlag = true}).start();
    new TWEEN.Tween(car.rotation).to({z:car.rotation.z - Math.PI / 15}, animTime/2).easing(TWEEN.Easing.Sinusoidal.Out).chain(
    new TWEEN.Tween(car.rotation).to({z:car.rotation.z + Math.PI / 215}, animTime/2).easing(TWEEN.Easing.Sinusoidal.Out)).start();
    new TWEEN.Tween(frontWheelRight.rotation).to({y:frontWheelRight.rotation.y - 1, z:frontWheelRight.rotation.z + 0.5}, 250).easing(TWEEN.Easing.Sinusoidal.Out).chain(
    new TWEEN.Tween(frontWheelRight.rotation).to({y:frontWheelRight.rotation.y = 0, z:frontWheelRight.rotation.z = 0}, 250).easing(TWEEN.Easing.Sinusoidal.Out)).start();
    new TWEEN.Tween(frontWheelLeft.rotation).to({y:frontWheelLeft.rotation.y - 1, z:frontWheelLeft.rotation.z + 0.5}, 250).easing(TWEEN.Easing.Sinusoidal.Out).chain(
    new TWEEN.Tween(frontWheelLeft.rotation).to({y:frontWheelLeft.rotation.y = 0, z:frontWheelLeft.rotation.z = 0}, 250).easing(TWEEN.Easing.Sinusoidal.Out)).start();
    
    // space
} else if (keyCode == 32 && keyFlagJump && car1.position.z > -714) {
    //console.log('space');
    keyFlagJump = false;
    jumpPlay();
    new TWEEN.Tween(car1.position).to({y:car1.position.y + 0.6}, 300).easing(TWEEN.Easing.Quadratic.Out).chain(
    new TWEEN.Tween(car1.position).to({y:car1.position.y - 0.04}, 500).easing(TWEEN.Easing.Quadratic.In).onComplete(function() {keyFlagJump = true, car1.position.y = 0.1})).start();
    new TWEEN.Tween(car.rotation).to({x:car.rotation.x - 0.25}, 400).easing(TWEEN.Easing.Quadratic.Out).chain(
    new TWEEN.Tween(car.rotation).to({x:car.rotation.x + 0.001}, 400).easing(TWEEN.Easing.Quadratic.In)).start();
} else if(keyCode == 37 && camera.position.x > -1 ) {
    new TWEEN.Tween(camera.position).to({x:camera.position.x - 1}, 300).easing(TWEEN.Easing.Linear.None).start();
} else if(keyCode == 39 && camera.position.x < 3) {
    new TWEEN.Tween(camera.position).to({x:camera.position.x + 1}, 300).easing(TWEEN.Easing.Linear.None).start();
} else if(keyCode == 38 && camera.position.y < 1.50) {
    new TWEEN.Tween(camera.position).to({y:camera.position.y + 0.25}, 300).easing(TWEEN.Easing.Linear.None).start();
} else if(keyCode == 40 && camera.position.y > 0.50) {
    new TWEEN.Tween(camera.position).to({y:camera.position.y - 0.25}, 300).easing(TWEEN.Easing.Linear.None).start();
} 
};

var once = true;

function endAnimation(car1){
    car = car1.getObjectByName('root');
    if(once){
        endPlay();
        once = false;
        new TWEEN.Tween(car.rotation).to({z:car.rotation.z + Math.PI / 2}, 300).easing(TWEEN.Easing.Quadratic.Out).start();
        new TWEEN.Tween(car.rotation).to({x:car.rotation.x + 0.3}, 300).easing(TWEEN.Easing.Quadratic.Out).chain(
        new TWEEN.Tween(car.rotation).to({x:car.rotation.x - 0.01}, 300).easing(TWEEN.Easing.Quadratic.In)).start();
    }
}


function explosionCar(car1){

        car = car1.getObjectByName('root');
        finishPlay();
        new TWEEN.Tween(car.rotation).to({z:car.rotation.z + Math.PI / 2}, 300).easing(TWEEN.Easing.Quadratic.Out).start();
        new TWEEN.Tween(car.rotation).to({x:car.rotation.x + 0.3}, 300).easing(TWEEN.Easing.Quadratic.Out).chain(
        new TWEEN.Tween(car.rotation).to({x:car.rotation.x - 0.01}, 1000).easing(TWEEN.Easing.Quadratic.In)).onComplete(function() {
            car1.traverse( child => {
                new TWEEN.Tween(child.position).to({x:child.position.x + Math.random()}, 1000).easing(TWEEN.Easing.Exponential.Out).start();
                new TWEEN.Tween(child.position).to({y:child.position.y + Math.random()/2}, 1000).easing(TWEEN.Easing.Exponential.Out).start();
                new TWEEN.Tween(child.position).to({z:child.position.z + Math.random()}, 1000).easing(TWEEN.Easing.Exponential.Out).start();
              } );
        }).start();
}