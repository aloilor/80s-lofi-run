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


function nitro_spawn(nitro){
    var x = poss_x_nitro_pos[ Math.floor(Math.random() * poss_x_nitro_pos.length) ];
    x = 0.0;
    var clone = nitro.clone();
    clone.position.set(x, 0.07, nitroStart);
    nitros.push(clone);
    scene.add(clone);
    console.log(nitros.length);
    nitroStart -= gap_between_nitros;

}


function random_nitro_spawn(nitro){
    while(Math.abs(nitroStart) < Math.abs(camera.position.z) + max_distance){
        nitro_spawn(nitro);
        //nitro_free();       
    }
}


function nitro_free(){
    for (i = 0; i < nitros.length; i++){
        if (nitros[i].position.z > camera.position.z+1){
            nitros.splice(nitros.indexOf(nitros[i]), 1);
            // console.log(bitcoins.length);
            scene.remove(nitros[i]);
        }
    }
}

function nitro_collision(car){
    for (i = 0; i < nitros.length; i++){
        //console.log("car x, z", car.position.x+coinMid, car.position.z);
        //console.log("coin x, z", bitcoins[i].position.x, bitcoins[i].position.z);

        if (nitros[i].position.x == car.position.x && Math.floor(Math.abs(nitros[i].position.z)) == Math.floor(Math.abs(car.position.z+0))){
            //console.log(bitcoins.length);
            scene.remove(nitros[i]);
            //bitcoins.splice(bitcoins.indexOf(bitcoins[i]), 1);
            score += 20;
            //console.log(score);
        }
    }
}