function rotateWheelTire(car1) {

    frontWheel = car1.getObjectByName('Front_Wheel_Llanta_Material009_0')
    backWheel = car1.getObjectByName('Back_Wheel_Llanta_Material009_0')
    frontTire = car1.getObjectByName('Tire_Front_Material010_0')
    backTire = car1.getObjectByName('Tire_Back_Material010_0')
    car = car1.getObjectByName('RootNode')
    
    var frontWheelTween = new TWEEN.Tween(frontWheel).to({x: 20000}, 1000).start()
    var backWheelTween = new TWEEN.Tween(backWheel).to({x: 20000}, 1000).repeat(Infinity).start()
    var frontTireTween = new TWEEN.Tween(frontTire).to({x: 20000}, 1000).start()
    var backTireTween = new TWEEN.Tween(backTire).to({x: 20000}, 1000).repeat(Infinity).start()
    var carTween = new TWEEN.Tween(car.position).to({x: 20000}, 1000).start()

    frontWheelTween.update()
    frontTireTween.update()
    TWEEN.update()
    carTween.update()
}