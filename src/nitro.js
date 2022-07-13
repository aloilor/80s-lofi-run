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

    var clone = nitro.clone();
    clone.position.set(x, 0.07, nitroStart);
    nitros.push(clone);
    scene.add(clone);
    nitroStart -= gap_between_nitros;

}


function random_nitro_spawn(nitro){
    while(Math.abs(nitroStart) < Math.abs(camera.position.z) + max_distance){
        nitro_spawn(nitro);
        //nitro_free();       
    }
}


function nitro_free(){

}