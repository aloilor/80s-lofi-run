var nitros = new Array();
var gap_between_nitros = 120;       //DISTANCE BETWEEN A NITRO TANK AND THE NEXT ONE
var nitroStart = -70;               //START POSITION FROM WHICH THE NITROS WILL START TO SPAWN

var poss_x_nitro_pos = [            // USEFUL ARRAY TO KEEP TRACK OF THE X POSITIONS IN WHICH THE NITRO CAN SPAWN
    - 2*offset,
    - offset,
    0.0,
    offset,
    2*offset
];

var nitro_range = 0.35; // RANGE IN WHICH THE NITRO WILL BE TAKEN


function nitro_spawn(nitro){
    var x = poss_x_nitro_pos[ Math.floor(Math.random() * poss_x_nitro_pos.length) ];
    var clone = nitro.clone(); 
    clone.position.set(x, nitroPosY, nitroStart);
    while (check_bitcoin(clone) || check_obs(clone)){
        nitroStart -= 1;
        clone.position.set(x, nitroPosY, nitroStart);
    }
    clone.position.set(x, nitroPosY, nitroStart);
    nitros.push(clone);
    scene.add(clone);
    //console.log(nitros.length);
    nitroStart -= gap_between_nitros;
}


function random_nitro_spawn(nitro){
    while(Math.abs(nitroStart) < Math.abs(camera.position.z) + max_distance){
        nitro_spawn(nitro);
        nitro_free();       
    }
}


function nitro_free(){
    for (i = 0; i < nitros.length; i++){
        if (nitros[i].position.z > camera.position.z+1){
            scene.remove(nitros[i]);
            nitros.splice(nitros.indexOf(nitros[i]), 1);
            //console.log(nitros.length);
        }
    }
}

function nitro_collision_aux(car, i){
    if (car.position.x > nitros[i].position.x - nitro_range &&
        car.position.x < nitros[i].position.x + nitro_range &&  
        Math.abs(car.position.z) > Math.abs(nitros[i].position.z) - nitro_range && 
        Math.abs(car.position.z) < Math.abs(nitros[i].position.z) + nitro_range ){
            return true;
        }
    else return false; 

}


function nitro_collision(car){
    for (i = 0; i < nitros.length; i++){

        if (nitro_collision_aux(car, i)){
            invincible = true;
            scene.remove(nitros[i]);
            //console.log(score);
        }
    }
}

function nitro_check(obj){
    
}