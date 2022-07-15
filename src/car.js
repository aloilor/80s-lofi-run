function rotateWheelTire(car1) {

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

    //var groupFrontWheelTire = {frontWheel, frontTire};
    //var groupBackWheelTire = {backWheel, backTire};
    
    //var tweenFrontWheelTire = new TWEEN.Tween(frontWheel.rotation).to({y: 1 }, 10).repeat(Infinity).start()
    //var tweenBackWheelTire = new TWEEN.Tween(groupBackWheelTire.rotation).to({y: -(90 * Math.PI / 180)}, 1).start()

    //tweenFrontWheelTire.update()
    //tweenBackWheelTire.update()

}
