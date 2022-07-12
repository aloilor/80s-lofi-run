
var max_distance = 30; // MAX DISTANCE FROM THE CAMERA IN WHICH THE BITCOINS WILL SPAWN, TO KEEP CLEAN AND FAST THE GAME
var size = 3;
var bitcoins = new Array();
var gap_between_coins = 1;
var gap_between_groups = 3;
var coinMid = -0.17; // TO PUT THE COIN IN THE MIDDLE OF THE ROAD ()
var offset = 0.5;                
var group = 3; // THE BITCOINS WILL ALWAYS SPAWN IN GROUP OF 3
var start = carPosZ + 5; // START POSITION FROM WHICH THE COINS WILL START TO SPAWN

var poss_x_positions = [        // USEFUL ARRAY TO KEEP TRACK OF THE X POSITIONS IN WHICH THE COINS CAN SPAWN
    coinMid - 2*offset,
    coinMid - offset,
    coinMid,
    coinMid + offset,
    coinMid + 2*offset
];


// LOAD THE BITCOIN MODEL 
var bitcoin;
var bitPosX = coinMid;
var bitPosY = 0.05;
var bitPosZ = 21.0;

loader.load( '../models/other entities/bitcoin/scene.gltf', function ( gltf ) {
    bitcoin = gltf.scene;
    bitcoin.scale.multiplyScalar(0.13); 
    bitcoin.position.setX(bitPosX);
    bitcoin.position.setY(bitPosY);
    bitcoin.position.setZ(bitPosZ);
    bitcoin.name = "bitcoin"
    bitcoin.castShadow = true;
    bitcoin.receiveShadow = true;
    //bitcoin.rotateY(THREE.Math.degToRad(180));
    scene.add(bitcoin);
    console.log(dumpObject(bitcoin).join('\n'));
})

// THE BITCOINS WILL ALWAYS SPAWN IN GROUP OF 3
function bitcoin_straight_line(start, bitcoin){
    var x = poss_x_positions[ Math.floor(Math.random() * poss_x_positions.length) ];
    console.log(x)
    for ( i = 0; i < group; i++){
        var clone = bitcoin.clone();
        clone.position.set(x, bitPosY, start);
        start += gap_between_coins;
        bitcoins.push(clone);
        scene.add(clone);      
    }
    start += gap_between_groups;
}

function random_bitcoin_spawn(bitcoin){




}


