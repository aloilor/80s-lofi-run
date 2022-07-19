var bitStart = -4 -4;          // bitStart POSITION FROM WHICH THE ALL THE COINS WILL bitStart TO SPAWN

var size = 3;
var bitcoins = new Array();
var gap_between_coins = 1;
var gap_between_groups = 3;
var group = 3; // THE BITCOINS WILL ALWAYS SPAWN IN GROUP OF 3

var poss_x_bit_pos = [        // USEFUL ARRAY TO KEEP TRACK OF THE X POSITIONS IN WHICH THE COINS CAN SPAWN
    coinMid - 2*offset,       
    coinMid - offset,
    coinMid,                // -0.17
    coinMid + offset,
    coinMid + 2*offset
];



// THE BITCOINS WILL ALWAYS SPAWN IN GROUP OF 3
function bitcoin_straight_line(bitcoin){
    var x = poss_x_bit_pos[ Math.floor(Math.random() * poss_x_bit_pos.length) ];
    for ( i = 0; i < group; i++){
        var clone = bitcoin.clone();        
        clone.position.set(x, bitPosY, bitStart);
        bitcoins.push(clone);
        scene.add(clone);    
        bitStart -= gap_between_coins;
    }
    bitStart -= gap_between_groups;
}

// FUNCTION TO RANDOMLY SPAWN BITCOINS
function random_bitcoin_spawn(bitcoin){
    while(Math.abs(bitStart) < Math.abs(camera.position.z) + max_distance){
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
function bitcoin_collision(car1){
    for (i = 0; i < bitcoins.length; i++){
        //console.log("coin x, z", bitcoins[i].position.x, bitcoins[i].position.z);
        car = car1.getObjectByName('root');
        //console.log("car x, z", car.position.x+coinMid, car1.position.z);

        if (bitcoins[i].position.x == car1.position.x+coinMid && Math.floor(Math.abs(bitcoins[i].position.z)) == Math.floor(Math.abs(car1.position.z - 1.5))){
            //console.log(bitcoins.length);
            scene.remove(bitcoins[i]);
            //bitcoins.splice(bitcoins.indexOf(bitcoins[i]), 1);
            score += 1;
            //console.log(score);
        }
    }
}


function check_bitcoin (obj) {  // USEFUL FUNCTION TO CHECK IF WE ARE GOING TO SPAWN AN OBJECT obj WHERE 
                                // THERE ALREADY IS A COIN
                                // RETURNS TRUE IF THERE'S ALREADY A COIN AND FALSE OTHERWISE
    for (i = 0; i < bitcoins.length; i++){
        if (bitcoins[i].position.x == obj.position.x+coinMid && Math.floor(Math.abs(bitcoins[i].position.z)) == Math.floor(Math.abs(obj.position.z+0))){
            return true;
        }
    }
    return false;
    
}

function rotateBitcoin() {
    for (i = 0; i < bitcoins.length; i++){
        var axisBitcoin = new THREE.Vector3();

        var topPosition = new THREE.Vector3(bitcoins[i].position.x + 0.5, bitcoins[i].position.y + 0.5 , bitcoins[i].position.z + 0.5);
        var bottomPosition = new THREE.Vector3(bitcoins[i].position.x - 0.5, bitcoins[i].position.y - 0.5  , bitcoins[i].position.z - 0.5);

        axisBitcoin.copy( topPosition ).sub( bottomPosition );
        bitcoins[i].rotateOnAxis( axisBitcoin, Math.PI / 270);
    }
}

