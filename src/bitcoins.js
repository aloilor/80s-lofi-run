
var max_distance = 70; // MAX DISTANCE FROM THE CAMERA IN WHICH THE BITCOINS WILL SPAWN, TO KEEP CLEAN AND FAST THE GAME
var size = 3;
var bitcoins = new Array();
var gap_between_coins = 1;
var gap_between_groups = 3;
var coinMid = -0.17; // TO PUT THE COIN IN THE MIDDLE OF THE ROAD ()
var offset = 0.5;                
var group = 3; // THE BITCOINS WILL ALWAYS SPAWN IN GROUP OF 3
var start = -4 - 4; // START POSITION FROM WHICH THE COINS WILL START TO SPAWN

var poss_x_positions = [        // USEFUL ARRAY TO KEEP TRACK OF THE X POSITIONS IN WHICH THE COINS CAN SPAWN
    coinMid - 2*offset,
    coinMid - offset,
    coinMid,
    coinMid + offset,
    coinMid + 2*offset
];

var score = 0; // SCORE 


// THE BITCOINS WILL ALWAYS SPAWN IN GROUP OF 3
function bitcoin_straight_line(bitcoin){
    var x = poss_x_positions[ Math.floor(Math.random() * poss_x_positions.length) ];
    for ( i = 0; i < group; i++){
        var clone = bitcoin.clone();        
        clone.position.set(x, bitPosY, start);
        bitcoins.push(clone);
        scene.add(clone);    
        start -= gap_between_coins;
    }
    start -= gap_between_groups;
}

// FUNCTION TO RANDOMLY SPAWN BITCOINS
function random_bitcoin_spawn(bitcoin){
    while(Math.abs(start) < Math.abs(camera.position.z) + max_distance){
        bitcoin_straight_line(bitcoin);
        bitcoin_free();
    } 
}

// CLEANUP FUNCTION - TO REMOVE UNUSED BITCOINS (THE ONES WE ALREADY SURPASSED) FROM THE SCENE
// AND TO KEEP EVERYTHING FAST AND CLEAN
function bitcoin_free(){
    for (i = 0; i < bitcoins.length; i++){
        if (bitcoins[i].position.z > camera.position.z+1){
            bitcoins.splice(bitcoins.indexOf(bitcoins[i]), 1);
            // console.log(bitcoins.length);
            scene.remove(bitcoins[i]);
        }
    }
}

// FUNCTION TO CHECK IF THE CAR HAS GOT ANY BITCOIN, TO UPDATE THE SCORE
function bitcoin_collision(car){
    for (i = 0; i < bitcoins.length; i++){
        //console.log("car x, z", car.position.x+coinMid, car.position.z);
        //console.log("coin x, z", bitcoins[i].position.x, bitcoins[i].position.z);

        if (bitcoins[i].position.x == car.position.x+coinMid && Math.floor(Math.abs(bitcoins[i].position.z)) == Math.floor(Math.abs(car.position.z+0))){
    
            //console.log(bitcoins.length);
            scene.remove(bitcoins[i]);
            //bitcoins.splice(bitcoins.indexOf(bitcoins[i]), 1);
            score += 1;
            console.log(score);
        }
        
    }
}

