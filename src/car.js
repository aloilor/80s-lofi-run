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
function onDocumentKeyDown(event) {
var keyCode = event.which;
car = car1.getObjectByName('root');
    // left
if (keyCode == 65 && keyFlag) {
    console.log('sx');
    keyFlag = false;
    new TWEEN.Tween(car.position).to({x:car.position.x + 1}, 500).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(function() {keyFlag = true}).start();
    // right
} else if (keyCode == 68 && keyFlag) {
    console.log('dx');
    keyFlag = false;
    new TWEEN.Tween(car.position).to({x:car.position.x - 1}, 500).easing(TWEEN.Easing.Sinusoidal.Out).onComplete(function() {keyFlag = true}).start();
    // space
} else if (keyCode == 32) {
    console.log('space');
}
};